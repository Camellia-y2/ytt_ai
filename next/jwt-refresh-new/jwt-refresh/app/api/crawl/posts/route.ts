import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import path from 'path'
import fs from 'fs/promises'

interface CrawledPost {
  title: string
  content: string
}

export async function GET() {
    try {
        // 读取爬取的数据文件
        const dataPath = path.join(process.cwd(), 'server', 'crawl', 'data', 'posts.json')
        
        // 检查文件是否存在
        try {
            await fs.access(dataPath)
        } catch {
            return NextResponse.json({
                success: false,
                error: '数据文件不存在，请先运行爬虫脚本'
            }, { status: 404 })
        }

        // 读取并解析数据
        const data = await fs.readFile(dataPath, 'utf-8')
        const outerData = JSON.parse(data)
        
        console.log('outerData keys:', Object.keys(outerData))
        
        // 检查content字段是否存在
        if (!outerData.content) {
            return NextResponse.json({
                success: false,
                error: 'JSON文件中没有content字段',
                debug: { keys: Object.keys(outerData) }
            }, { status: 400 })
        }
        
        // 解析嵌套的JSON内容
        const innerData = JSON.parse(outerData.content)
        
        // 检查posts数组是否存在
        if (!innerData.posts || !Array.isArray(innerData.posts)) {
            return NextResponse.json({
                success: false,
                error: '解析的数据中没有posts数组',
                debug: { innerDataKeys: Object.keys(innerData) }
            }, { status: 400 })
        }
        
        const crawledPosts: CrawledPost[] = innerData.posts
        console.log(`找到 ${crawledPosts.length} 篇文章`)

        if (crawledPosts.length === 0) {
            return NextResponse.json({
                success: false,
                error: '未找到任何文章数据'
            }, { status: 400 })
        }

        // 存储到数据库
        let savedCount = 0
        const errors = []

        for (const post of crawledPosts) {
            try {
                // 检查文章是否已存在（根据标题）
                const existingPost = await prisma.post.findFirst({
                    where: {
                        title: post.title
                    }
                })

                if (!existingPost) {
                    await prisma.post.create({
                        data: {
                            title: post.title,
                            content: post.content,
                            published: true,
                            authorId: 1 // 假设使用ID为1的用户作为爬虫用户
                        }
                    })
                    savedCount++
                } else {
                    console.log(`文章已存在，跳过: ${post.title}`)
                }
            } catch (error) {
                errors.push({
                    title: post.title,
                    error: error instanceof Error ? error.message : '未知错误'
                })
                console.error(`保存文章失败: ${post.title}`, error)
            }
        }

        return NextResponse.json({
            success: true,
            message: `成功处理 ${crawledPosts.length} 篇文章，保存了 ${savedCount} 篇新文章`,
            data: {
                totalParsed: crawledPosts.length,
                savedCount,
                skippedCount: crawledPosts.length - savedCount - errors.length,
                errors: errors.length > 0 ? errors : undefined,
                posts: crawledPosts.slice(0, 3) // 返回前3篇文章作为示例
            }
        })

    } catch (error) {
        console.error('处理失败:', error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : '未知错误',
            details: error instanceof Error ? error.stack : undefined
        }, { status: 500 })
    }
}