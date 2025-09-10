import {
  NextRequest,
  NextResponse
} from 'next/server'
import {
  ensureUploadDirs,
  fileAreadyExist,
  readMeta,
  listUploadedChunks,
  writeMeta
} from '@/lib/upload-server'

export async function POST(req: NextRequest) {
  const { fileHash, fileSize, fileName, chunkSize, totalChunks } = await req.json()
  ensureUploadDirs(fileHash)
  if (fileAreadyExist(fileHash, fileName)) {
    return NextResponse.json({
      complete: true,
      uploaded: [],
      message: '秒传；文件已经存在'
    })
  }
  //断点续传
  const existed = readMeta(fileHash)//读取媒体信息文件
  const uploaded = listUploadedChunks(fileHash)
  const meta = {
    fileName,
    fileSize,
    chunkSize,
    totalChunks,
    uploadedChunks: uploaded,
    complete: false,
  }
  writeMeta(fileHash, { ...(existed || {}), ...meta })
  return NextResponse.json({
    complete: false,
    uploaded,
    message: '初始化成功'
  })


}

