import {
  NextRequest,
  NextResponse
} from 'next/server'
import {
  prisma
} from '@/lib/db'
import bcrypt from 'bcryptjs'
import {
  emailRegex,
  passwordRegex
} from '@/lib/regexp'
import {
  createTokens,
  setAuthCookies
} from '@/lib/jwt'

export async function POST(request: NextRequest) {
  try {
    const {
      email,
      password
    } = await request.json()
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({
        error: `邮箱格式无效`
      }, {
        status: 400
      })
    }
    if (!password || !passwordRegex.test(password)) {
      return NextResponse.json({
        error: `密码需6-18位，且不能全为数字`
      }, {
        status: 400
      })
    }
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!user) {
      return NextResponse.json({
        error: `用户不存在`
      }, {
        status: 401//没有权限 forbidden
      })
    }
    // 将用户输入的密码加密后与数据库中的密码进行比较
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json({
        error: `密码错误`
      }, {
        status: 401
      })
    }

    const {
      accessToken,
      refreshToken
    } = await createTokens(user.id)
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        refreshToken//将refreshToken存储到数据库中
      }
    })
    setAuthCookies(accessToken, refreshToken)
    return NextResponse.json({
      message: '登录成功'
    })
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      error: '服务端错误'
    }, {
      status: 500
    })
  } finally {
    // 性能优化 释放数据库对象
    await prisma.$disconnect()
  }
}