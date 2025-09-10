import {
  NextRequest,
  NextResponse
} from 'next/server'
import { verifyToken } from '@/lib/jwt'
import { prisma } from '@/lib/db'
import { createTokens } from '@/lib/jwt'
export async function GET(request: NextRequest) {
  try {
    console.log('refresh-----------------')
    const refreshToken = request.cookies.get('refreshToken')?.value
    const redirectUrl = request.nextUrl.searchParams.get('redirect') || "/dashboard"
    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    const refreshPayload = await verifyToken(refreshToken)
    if (!refreshPayload || !refreshPayload.userId) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    const userId = refreshPayload.userId as number
    // 刷新？ 怎么验证是用户来刷新？
    // 把这个refreshToken与数据库中的refreshToken校验
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    if (!user || user.refreshToken !== refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    } = await createTokens(userId)

    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        refreshToken: newRefreshToken
      }
    })
    const response = NextResponse.redirect(new URL(redirectUrl, request.url))
    response.cookies.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 15
    })
    response.cookies.set('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7
    })
    return response
  } catch (err) {
    console.error('刷新token失败', err)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}