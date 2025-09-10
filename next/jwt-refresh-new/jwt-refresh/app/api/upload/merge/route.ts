import {
  NextRequest,
  NextResponse
} from 'next/server'
import {
  ensureUploadDirs,//确保上传路径存在
  listUploadedChunks,//readDirSync
  readMeta,//读取这个文件的媒体信息
  mergeChunks,//合并文件
  writeMeta
} from '@/lib/upload-server'

export async function POST(req: NextRequest) {
  const {
    fileHash,
  } = await req.json()
  ensureUploadDirs(fileHash)//确保这个东西存在
  // if(fileAreadyExist(fileHash,fileName)){
  //   return NextResponse.json({
  //    complete:true, 
  //    uploaded:[],
  //    message:'秒传：文件已经存在'
  //   })
  // }
  const existed = readMeta(fileHash)
  const uploaded = listUploadedChunks(fileHash)//拿到已经上传完成的片段
  const meta = readMeta(fileHash)
  console.log(meta, '//////')
  if (!meta) {
    return NextResponse.json({
      error: '找不到meta'
    }, {
      status: 404
    })
  }
  const {
    fileName,
    totalChunks,
  } = meta
  const finalPath = await mergeChunks(fileHash, fileName, totalChunks)
  meta.complete = true
  meta.finalPath = finalPath as string;
  writeMeta(fileHash, meta)
  return NextResponse.json({
    complete: true,
    finalPath,

  })
}
