// 入口文件
// console.log('胡老板的发量，羡慕');
// ai llm sdk 事实标准
import OpenAi from 'openai'; // 模块化引入

const openai=new OpenAi({
    apiKey:'sk-wiybwxcwsqfbwmodahgeygnrzemnfmsoibxidotzolhutetr', // 环境变量 赚钱的 身份
    baseURL: 'https://api.siliconflow.cn/v1' // 国内转发服务器
});
// 完成接口
// await 等待
const response = await openai.completions.create({
    //通义千文
    model:'Qwen/QwQ-32B',
    max_tokens:256,
    temperature:0.1, // 大模型的自由度 小代表严格
    // prompt:'你好啊'
    prompt:`
    Consideration product : 工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿童水上玩具

    1. Compose human readable product title used on Amazon in english within 20 words.
    2. Write 5 selling points for the products in Amazon.
    3. Evaluate a price range for this product in U.S.

    Output the result in json format with three properties called title, selling_points and price_range
    answer me with chinese.
    `
})
console.log(response);
