'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [crawling, setCrawling] = useState(false)
  const [message, setMessage] = useState('')

  // 获取数据库中的文章
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts || [])
      }
    } catch (error) {
      console.error('获取文章失败:', error)
    } finally {
      setLoading(false)
    }
  }

  // 触发爬虫并存储数据
  const handleCrawl = async () => {
    setCrawling(true)
    setMessage('')
    try {
      const response = await fetch('/api/crawl/posts')
      const data = await response.json()
      
      if (data.success) {
        setMessage(data.message)
        // 重新获取文章列表
        await fetchPosts()
      } else {
        setMessage(`错误: ${data.error}`)
      }
    } catch (error) {
      setMessage(`请求失败: ${error instanceof Error ? error.message : '未知错误'}`)
    } finally {
      setCrawling(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">博客园文章列表</h1>
          <button
            onClick={handleCrawl}
            disabled={crawling}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {crawling ? '爬取中...' : '爬取最新文章'}
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('错误') || message.includes('失败') 
              ? 'bg-red-100 text-red-700 border border-red-200' 
              : 'bg-green-100 text-green-700 border border-green-200'
          }`}>
            {message}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">加载中...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">暂无文章数据</p>
            <p className="text-gray-500 mt-2">点击"爬取最新文章"按钮获取数据</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <div className="text-gray-600 mb-4 line-clamp-3">
                  {post.content.split('\n')[0]}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>创建时间: {new Date(post.createdAt).toLocaleString('zh-CN')}</span>
                  <span>ID: {post.id}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}