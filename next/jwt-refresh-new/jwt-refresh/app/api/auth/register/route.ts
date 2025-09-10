import {
  NextRequest,//拿到请求体
  NextResponse//返回响应体
} from 'next/server'
import {
  prisma
} from '@/lib/db'
import bcrypt from 'bcryptjs'
import {
  emailRegex,
  passwordRegex
} from '@/lib/regexp'
//restful

//匹配规则，符号数学
//.什么都匹配，匹配一个字符
//+一次或多次
//@ 邮箱中必须要有的字符
// .+@ 在@前面至少要有一个字符
// \. 一定要有一个.  754211506@qq.com
export async function POST(request: NextRequest) {
  try {
    const {
      email,
      password
    } = await request.json()
    //正则
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({
        error: `邮箱格式无效`
      }, {
        status: 400
      })
    }
    if (!password || !passwordRegex.test(password)) {
      return Response.json(
        { error: '密码需6-18位，且不能全为数字' },
        { status: 400 }
      )
    }
    // 检测用户名是否已经注册
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (existingUser) {
      return NextResponse.json({
        message: '用户已存在'
      }, {
        status: 409//冲突
      })
    }


    //密码单向加密
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    // prisma.user.create作用：
    // 1. 向数据库中插入数据
    // 2. 返回插入的数据
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })
    return NextResponse.json({
      message: '注册成功'
    }, {
      status: 201//成功创建，与200不一样，200是成功
    })
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      message: '注册失败'
    }, {
      status: 500//服务器错误
    })
  }
}