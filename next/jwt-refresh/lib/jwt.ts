import {
    SignJWT,
    jwtVerify
} from 'jose';
import {
    cookies
} from 'next/headers' // 从请求头中拿

const getJwtSecretKey = (() => {
    const secret = process.env.JWT_SECRET_KEY;
    if(!secret) {
        throw new Error('JWT_SECRET_KEY is not defined');
    }
    // 希望返回二进制的秘钥
    return new TextEncoder().encode(secret);
})

export const createTokens = async (userId:number) => {
    const accessToken = await new SignJWT({userId})
        // 创建JST 载荷
        // 设置头部，指定使用HS256算法签名
        .setProtectedHeader({alg: 'HS256'})
        // 颁发的时间默认为当前时间
        .setIssuedAt()
        //使用secret签名
        // 设置过期时间15minutes
        .setExpirationTime('15m')
        .sign(getJwtSecretKey());

    const refreshToken = await new SignJWT({userId})
        // 创建JST 载荷
        // 设置头部，指定使用HS256算法签名
        .setProtectedHeader({alg: 'HS256'})
        // 颁发的时间默认为当前时间
        .setIssuedAt()
        //使用secret签名
        // 设置过期时间
        .setExpirationTime('7d') // 7天
        .sign(getJwtSecretKey());
    return {
        accessToken,
        refreshToken
    }
}

export const setAuthCookies = async (accessToken: string, refreshToken: string) => {
    const cookiesStore = await cookies();
    cookiesStore.set('access_token', accessToken, {
        // 防止黑客 CSRF(跨站请求伪造)攻击 ，试图获得cookie
        httpOnly: true, // 不能用js操作cookie
        maxAge: 60*15, // 15分钟
        sameSite: 'strict', // 严格模式
        path: '/', // 所有路径都可以访问
    });
    cookiesStore.set('refresh_token', refreshToken, {
        // 防止黑客 CSRF(跨站请求伪造) 攻击，试图获得cookie
        httpOnly: true, // 不能用js操作cookie
        maxAge: 60*60*24*7, // 7天
        sameSite: 'strict', // 严格模式
        path: '/', // 所有路径都可以访问
    });
}

export const verifyToken = async (token: string) => {
    try{
        const {payload} = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch(err) {
        return null;
    }
}