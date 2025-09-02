// 负责 posts.json 的模块化
// 支持了fs的promise版本
import fs from 'fs/promises'
// readFileSync 同步
// readFile() 异步 callback
// fs 推出了 promise 版本  'fs/promises'
import { client } from './llm.mjs'

const inputFilePath = './data/posts.json';
const outputFilePath = './data/posts_with_embedding.json';

// 最流行的写法
// 不用写async了，直接await
const data = await fs.readFile(inputFilePath,'utf-8');
console.log(data);
// 向量化
const posts = JSON.parse(data);
const postsWithEmbedding = [];

for(const {title, category} of posts) {
    const response = await client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: `标题： ${title}; 分类： ${category}`
    })
    postsWithEmbedding.push({
        title,
        category,
        embeddings: response.data[0].embedding
    })

    await fs.writeFile(outputFilePath,
        JSON.stringify(
            postsWithEmbedding,
            null,
            2
        )
    )
}