import {
  SignJWT,
  jwtVerify
} from 'jose'
import {
  cookies
} from 'next/headers'
const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET 未配置')
  }
  // 二进制的密钥
  return new TextEncoder().encode(secret)
}
export const createTokens = async (userId: number) => {
  const accessToken = await new SignJWT({ userId })
    // 创建JWT的载荷
    .setProtectedHeader({ alg: 'HS256' })
    //设置头部指定使用HS256算法签名
    .setIssuedAt()//颁发的时间是当前时间
    .setIssuedAt()//颁发的时间是当前时间
    .setExpirationTime('15m')//设置过期时间
    .sign(getJwtSecretKey())//使用secret密钥签名
  const refreshToken = await new SignJWT({ userId })
    // 创建JWT的载荷
    .setProtectedHeader({ alg: 'HS256' })
    //设置头部指定使用HS256算法签名
    .setIssuedAt()//颁发的时间是当前时间
    .setExpirationTime('7d')//设置过期时间
    .sign(getJwtSecretKey())//使用secret密钥签名
  return {
    accessToken,
    refreshToken
  }


}
export const setAuthCookies = async (accessToken: string, refreshToken: string) => {
  // 设置cookie
  const cookieStore = await cookies()
  console.log(cookieStore, '------------')
  cookieStore.set('accessToken', accessToken, {
    // 黑客XSS 攻击js 试图获得cookie 
    httpOnly: true,//不能用js操作cookie
    maxAge: 15 * 60,//过期时间15分钟
    sameSite: 'strict',//严格模式
    path: '/'//生效路径
  })
  cookieStore.set('refreshToken', refreshToken, {
    // 黑客XSS 攻击js 试图获得cookie 
    httpOnly: true,//不能用js操作cookie
    maxAge: 60 * 60 * 24 * 7,//过期时间7天
    sameSite: 'strict',//严格模式
    path: '/'//生效路径
  })
  // 访问权限
  // 刷新权限
}

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey())
    return payload
  } catch (err) {
    console.log(err)
    return null
  }
}