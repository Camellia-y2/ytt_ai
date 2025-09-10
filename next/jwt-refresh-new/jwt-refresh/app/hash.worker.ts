// 通过hash判断这个大文件是否曾经上传过
export type HashWorkerIn = {
  type: 'HASH',
  file: File,
  chunkSize: number,
}
async function sha256ArrayBuffer(buf: ArrayBuffer): Promise<string> {
  const hashBuffer = await crypto.subtle.digest('SHA-256', buf);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}
export type HashWorkerOut = {
  type: 'DONE',
  hash: string,
} | {
  type: 'PROGRESS',
  progress: number,
}//联合类型

self.onmessage = async (e: MessageEvent<HashWorkerIn>) => {
  const msg = e.data
  if (msg.type === 'HASH') {
    const { file, chunkSize } = msg
    const total = Math.ceil(file.size / chunkSize)//向上取整
    // 二进制处理
    // ArrayBuffer是JavaScript中用于表示通用、固定长度的原始
    //二进制数据缓冲区的一种对象，常常用于处理文件，网络数据等底层二进制信息
    const chunks: ArrayBuffer[] = []
    for (let i = 0; i < total; i++) {
      const start = i * chunkSize
      const end = Math.min(file.size, start + chunkSize)
      // 截取出来一段二进制数据块
      const chunk = file.slice(start, end)
      // 把他装换成可在内存中可读取的二进制格式
      const buf = await chunk.arrayBuffer()
      chunks.push(buf);
      (self as any).postMessage({
        type: 'PROGRESS',
        progress: (i + 1) / total,
      } as HashWorkerOut)
    }
    // 将多个数据块chunks合并，创建成一个完整的二进制对象 Blob
    // 代表一个不可变的，连续的原始数据文件，常用于文件处理
    const whole = new Blob(chunks)
    //whole.arrayBuffer()会返回一个Promise
    //该Promise在解析后返回包含Blob全部数据的，只读的ArrayBuffer
    const hash = await sha256ArrayBuffer(await whole.arrayBuffer());
    (self as any).postMessage({
      type: 'DONE',
      hash: hash,
    } as HashWorkerOut)
  }
}