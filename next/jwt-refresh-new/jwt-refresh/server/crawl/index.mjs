import { config } from 'dotenv';
import { createCrawl, createCrawlOpenAI } from 'x-crawl';
import {
  join 
} from 'path';
import {
  writeFile
} from 'fs/promises';
config(); // 加载 .env 文件中的环境变量

// 创建一个基础的网页爬虫实例，用于控制浏览器进行页面抓取。
const crawlApp = createCrawl({ 
  maxRetry: 3, //如果请求失败，最多重试 3 次。
  intervalTime: { // 每次请求之间随机延迟 1~2 秒，防止被反爬机制封禁（模拟人类操作）。
    max: 2000,
    min: 1000
  }
})
// AI 辅助
// 创建一个集成了 OpenAI 的爬虫实例，可用于在爬取过程中调用 AI 模型分析内容
const crawlOpenAIApp = createCrawlOpenAI({ 
  clientOptions: {
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
  },
  defaultModel: {
    chatModel: "gpt-4o"
  }
})

const writeJSONToFile = async (data, filename) => {
  const filePath = join(process.cwd(), filename);
  try{
    await writeFile(filePath, JSON.stringify(data, null, 2));
  }catch(err){
    console.error('写入文件错误');
  }
}

//开始爬取页面
crawlApp
  // 启动浏览器并访问博客园首页
  .crawlPage({
    url: 'https://www.cnblogs.com/',
    // url: 'https://www.cnblogs.com/#p2',// 爬取第二页的数据
    // 系统安装chrome，指定Chrome浏览器的路径
    launchOptions: {
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    }
  }) 
  // 页面加载完成后执行回调函数
  .then(async (res)=>{
    const {
      page, // 当前页面的 Puppeteer 页面对象，可执行 DOM 操作
      browser // 浏览器实例（可用于关闭或其他高级操作）
    } = res.data;
    // 博客园首页存放文章列表的容器 ID
    const targetSelector = '#post_list';
    // 等待该元素出现在页面上，确保动态内容已加载完成
    await page.waitForSelector(targetSelector);
    // $eval 是 Puppeteer 提供的方法，用于在页面上下文中执行函数。
    // 获取 #post_list 元素的完整 innerHTML，即所有文章列表的 HTML 字符串。
    // 结果保存在 highlyHTML 变量中，可用于后续解析或存储。
    const highlyHTML = await page.$eval(targetSelector, (el) => el.innerHTML);
    console.log(highlyHTML)

    // 暂时注释掉AI分析，避免网络连接问题
    const result = await crawlOpenAIApp.parseElements(
      highlyHTML,
      `
        获取每一个.post-item元素里面的.post-item-title里的标题，
        .post-item-summary里的纯文本摘要，以JSON格式返回。如：
        [
          {
            "title": "标题",
            "content": "摘要"
          }
        ]
      `
    )

    await browser.close();

    // 把HTML结果写入文件
    await writeJSONToFile({ html: highlyHTML }, 'data/posts.json');

  })


  //导出两个爬虫实例
export {
  crawlApp,
  crawlOpenAIApp
}