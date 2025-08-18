import OpenAI from 'openai' // es6 module

const client = new OpenAI({
    apiKey: 'sk-9GYdmZ3YNp8uNsgjbK5HwctlEp8EQ8e8b4k84z7QgVYQMzGz',
    baseURL: 'https://api.agicto.cn/v1',
})

const getWeather = async (city) => {
    return {
        city,
        tem: "28",
        condition: "Sunny"
    }
}

async function main() {
    const resp = await client.chat.completions.create({
        model:'gpt-4o',
        messages:[
            {
                role:'user',
                content: '今天南昌天气怎么样？'
            }
        ],
        // LLM 使用的工具
        tools: [
            // LLM 可以调用的 tool 配置
            {
                type:'function',
                function: {
                    name: 'getWeather',
                    description: '获取指定城市的天气',
                    parameters: {
                        type: 'object',
                        properties:{
                            city: {
                                type: 'string',
                            }
                        },
                        required: ["city"]
                    }
                }
            }
        ]
    })
    const toolCall = resp.choices[0].message.tool_calls?.[0];
    console.log('大模型想调用',toolCall)
    if(toolCall?.function.name === 'getWeather'){
        const args = JSON.parse(toolCall.function.arguments)
        const weather = await getWeather(args.city) // 可以调用外部函数，使用其他大模型、工作流等

        const secondResp = await client.chat.completions.create({
            model: 'gpt-4o',
            // 多轮会话，历史记忆
            messages: [
                {
                    role: 'user',
                    content: '今天南昌天气怎么样？' 
                },
                resp.choices[0].message,
                {
                    role: 'tool', // 大模型角色
                    tool_call_id: toolCall.id,
                    content: JSON.stringify(weather)
                }
            ]
        });
        console.log(secondResp.choices[0].message.content);
    }
}
main()