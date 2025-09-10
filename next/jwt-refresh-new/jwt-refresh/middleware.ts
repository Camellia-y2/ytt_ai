import { verify } from 'crypto'
import {
  NextRequest,
  NextResponse
} from 'next/server'
import {
  verifyToken
} from './lib/jwt'

const protectedPath = ['/dashboard', '/prodile']
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname//要去的那个地址
  // console.log(path)
  // console.log('中间件')

  if (!protectedPath.some(p => path.startsWith(p))) {
    return NextResponse.next()
  }
  // return NextResponse.()
  // login?
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  console.log(accessToken, refreshToken, '-----???')
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (accessToken) {
    const accessPayload = await verifyToken(accessToken)
    // console.log(accessPayload, '//////')
    if (accessPayload) {
      const requestHeaders = new Headers(request.headers)//将当前请求的头信息实例化
      requestHeaders.set('x-user-id', accessPayload.userId as string)
      //在请求和响应中间添加了一个自定义的请求头，可以辨别当前用户
      // as 断言 :断言accessPayload.userId一定为字符串
      return NextResponse.next({
        request: {
          headers: requestHeaders
        }
      })
    }
  }
  // accessToken过期了 无感刷新

  if (refreshToken) {
    console.log('refresh')
    const refreshPayload = await verifyToken(refreshToken)
    if (refreshPayload) {
      //断言
      // const userId = refreshPayload.userId as string
      const refreshUrl = new URL('/api/auth/refresh', request.url)
      refreshUrl.searchParams.set('redirect', request.url)
      console.log(refreshUrl, 'accessToken过期 刷新token')
      return NextResponse.redirect(refreshUrl)
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
