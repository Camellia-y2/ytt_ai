import {
  NextRequest,
  NextResponse
} from 'next/server'
import {
  saveChunk,
  readMeta,
  writeMeta,
  listUploadedChunks,
} from '@/lib/upload-server'

export async function PUT(req: NextRequest) {
  // blob 写入服务器文件
  const chunkIndex = Number(req.headers.get('x-chunk-index'))//请求头不用像请求体一样await
  const fileHash = req.headers.get('x-file-hash')
  if (!fileHash || Number.isNaN(chunkIndex)) {
    return NextResponse.json({
      error: '缺少x-file-hash或x-chunk-index'
    }, {
      status: 400
    })
  }
  // 请求体的二进制对象全部到达后
  // Node.js 的 Buffer 就像一个临时存放二进制数据的“小盒子”，
  // 比如文件或网络传输的数据，它能在内存中直接操作字节，
  // 就像快递中转站里暂存包裹一样，方便快速处理。
  const buf = Buffer.from(await req.arrayBuffer())//req.arrayBuffer()请求传输过来的二进制数据
  // Buffer.from将二进制数据转换为Node.js的Buffer对象
  await saveChunk(fileHash, chunkIndex, buf)//保存分片,存在本地文件当中

  const meta = readMeta(fileHash)
  if (meta) {
    const set = new Set([...(meta.uploadedChunks ?? []), chunkIndex])
    meta.uploadedChunks = Array.from(set).sort((a, b) => a - b)
    writeMeta(fileHash, meta)
  }
  return NextResponse.json({
    ok: true,
    uploaded: listUploadedChunks(fileHash),
  })
}
