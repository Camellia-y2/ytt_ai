# html5 王者对象Blob

- 图片转成base64字符串编码
- 调用 atob(base64) 二进制的字符串解码
- for每一个字符
    charCodeAt() 转成十进制0-255 8字节的整数
    Unit8Array() 
- 调用 new Blob([unit8Array],{type:''}) 生成二进制文件对象 Blob
- 二进制层面上去压缩，切割，修改
  浏览器将会为二进制提供一个临时访问的地址
- 调用 URL.createObjectURL(blob) 生成二进制对象的url地址 
- 调用 URL.revokeObjectURL(url) 释放二进制对象的url地址