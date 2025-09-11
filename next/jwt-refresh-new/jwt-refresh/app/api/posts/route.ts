import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
    try {
        // 获取所有文章，按创建时间倒序排列
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                createdAt: true,
                updatedAt: true,
                author: {
                    select: {
                        id: true,
                        email: true
                    }
                }
            }
        })

        return NextResponse.json({
            success: true,
            posts,
            total: posts.length
        })

    } catch (error) {
        console.error('获取文章失败:', error)
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : '未知错误'
        }, { status: 500 })
    }
}