import {
    client,
    cosineSimilarity
} from './llm.mjs'
import fs from 'fs/promises';

const inputFilePath = './data/posts_with_embedding.json';
const data = await fs.readFile(inputFilePath,"utf-8");
const posts = JSON.parse(data);

// 向量  cosine函数 文本语义化检索
// 你好 =》 hello  可以用向量检索到，而LIKE不行
// LIKE 模糊查询  文本（文字）检索

const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: '前端框架相关'
})

console.log(response.data[0].embedding)

const {
    embedding
} = response.data[0];

const results = posts.map(item => ({
        ...item,
        similarity: cosineSimilarity(embedding, item.embeddings)
    }))
    .sort((a,b) => a.similarity - b.similarity)
    .reverse()
    .slice(0,3)
    .map((item ,index) =>`${index+1}. ${item.title}, ${item.category}`)
    .join('\n');

console.log(results);
