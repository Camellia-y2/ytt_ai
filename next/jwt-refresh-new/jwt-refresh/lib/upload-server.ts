import {
  existsSync,//判断文件或目录是否存在
  mkdirSync,//创建目录
  createWriteStream,//创建写入流
  readFileSync,//读取文件
  writeFileSync,//写入文件
  readdirSync,//读取目录
  statSync,//获取文件状态
} from 'fs'
import {
  join
} from 'path'

export type Meta = {
  fileName: string;
  fileSize: number;
  chunkSize: number;
  totalChunks: number;
  uploadedChunks: number[];
  complete: boolean;
  finalPath?: string;
}
const ROOT = process.cwd()
// 项目根目录：process.cwd()为运行命令的当前工作路径，__dirname是当前文件所在目录，两者可能不同，
// 前者随运行位置变化，后者固定在文件路径
const UPLOAD_ROOT = join(ROOT, 'uploads')//将根目录与uploads文件夹拼接
export function getUploadDir(fileHash: string) {
  const dir = join(UPLOAD_ROOT, fileHash)
  const chunkDir = join(dir, 'chunks')
  return {
    dir,
    chunkDir
  }
}

// 创建文件夹
export const ensureUploadDirs = (fileHash: string) => {
  const { dir, chunkDir } = getUploadDir(fileHash)
  //建立目录
  if (!existsSync(UPLOAD_ROOT)) mkdirSync(UPLOAD_ROOT)
  if (!existsSync(dir)) mkdirSync(dir)
  if (!existsSync(chunkDir)) mkdirSync(chunkDir)
  return {
    dir,
    chunkDir
  }
}

export function saveChunk(fileHash: string, chunkIndex: number, blob: Buffer) {
  const { chunkDir } = ensureUploadDirs(fileHash)
  const filePath = join(chunkDir, `${chunkIndex}.part`)
  const stream = createWriteStream(filePath)
  return new Promise<void>((resolve, reject) => {
    stream.on('err', reject)
    stream.on('finish', () => resolve())
    stream.end(blob)
  })
}

export function metaPath(fileHash: string) {
  return join(getUploadDir(fileHash).dir, 'meta.json')
}
export function readMeta(fileHash: string): Meta | null {
  const p = metaPath(fileHash)// meta.json文件Meta,描述文件
  if (!existsSync(p)) {
    return null
  }
  const raw = readFileSync(p, 'utf-8')
  return JSON.parse(raw) as Meta

}
export function writeMeta(fileHash: string, meta: Meta) {
  const p = metaPath(fileHash)
  const raw = JSON.stringify(meta, null, 2)//null表示不替换任何值，2表示缩进2个空格（美化JSON）
  writeFileSync(p, raw)
}

export function listUploadedChunks(fileHash: string): number[] {
  const { chunkDir } = getUploadDir(fileHash)
  if (!existsSync(chunkDir)) return []
  const files = readdirSync(chunkDir)
  const ids = files
    .map((f) => Number(f.split('.')[0]))
    .filter((n) => Number.isInteger(n) && !isNaN(n))
    .sort((a, b) => a - b)
  return ids
}

export function finalFilePath(fileHash: string, fileName: string) {
  const { dir } = getUploadDir(fileHash)
  return join(dir, fileName)
}
export function fileAreadyExist(fileHash: string, fileName: string) {
  const p = finalFilePath(fileHash, fileName)
  return existsSync(p) && statSync(p).size > 0
}
//按顺序读取chunk的文件夹，并顺着可写流流向最终的地址（hash+文件名）
export async function mergeChunks(fileHash: string, fileName: string, totalChunks: number) {
  const { chunkDir } = getUploadDir(fileHash)//拿到存储chunk的文件
  const finalPath = finalFilePath(fileHash, fileName)//最终文件的路径
  const stream = createWriteStream(finalPath)//创建可写流
  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = join(chunkDir, `${i}.part`)//拼接chunk的路径
    if (!existsSync(chunkPath)) {
      throw new Error(`缺失分片${i} `)
    }
    const chunk = readFileSync(chunkPath)//读取chunk
    // readFileSync是异步的
    stream.write(chunk)//写入chunk
  }
  stream.end()//关闭可写流
  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(finalPath))
    stream.on('error', reject)
  })
}
