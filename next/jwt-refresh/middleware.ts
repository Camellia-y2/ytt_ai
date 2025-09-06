import { verify } from 'crypto';
import {
    NextRequest,
    NextResponse
} from 'next/server'
import {
    verifyToken
} from './lib/jwt'

const protectedPath = ['/dashboard', '/profile'];
// pre  中间件  next
export async function middleware(request:NextRequest){
    const path = request.nextUrl.pathname;
    // console.log(path);
    // console.log('中间件这必须过一下子')

    // 如果是非受保护的，无所谓，让他过
    if(!protectedPath.some(p=>path.startsWith(p))){
        return NextResponse.next();// 直接让他过
    }
    const accessToken = request.cookies.get('access_token')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value;
    // console.log(accessToken, refreshToken) 

    if(!accessToken && !refreshToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if(accessToken) { // 短令牌还生效
        console.log('accessToken 还生效')
        const accessPayload = await verifyToken(accessToken);
        if(accessPayload) {
            const requestHeaders = new Headers(request.headers);
            requestHeaders.set(
                'x-user-id', 
                accessPayload.userId as string // 类型断言，它一定是个字符串类型
            );
            return NextResponse.next({
                request: {
                    headers: requestHeaders
                }
            });
        }
    }
    // accessToken 过期了 无感刷新，确保用户在accessToken过期时无需重新登录即可继续使用应用。
    if(refreshToken) {
        console.log('accessToken 失效，refreshToken 还生效')
        const refreshPayload = await verifyToken(refreshToken);
        if(refreshPayload) {
            // const userId = refreshPayload.userId as string;
            const refreshUrl = new URL('/api/auth/refresh', request.url);
            refreshUrl.searchParams.set('redirect', request.url);
            return NextResponse.redirect(refreshUrl);
        }
    }

    return NextResponse.redirect(new URL('/login', request.url));
}
