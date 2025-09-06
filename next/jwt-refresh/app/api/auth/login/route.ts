import {
    NextRequest,
    NextResponse
} from 'next/server'
import {
    prisma
} from '@/lib/db'
import {
    emailRegex,
    passwordRegex
} from '@/lib/regexp';
import bcrypt from 'bcryptjs';
import {
    createTokens,
    setAuthCookies
} from '@/lib/jwt';

export async function POST(request:NextRequest){
    try{
        const {
            email,
            password
        } = await request.json();
        console.log(email, password)
        

        // 验证一下邮箱和密码格式和正确性，通过了再派发token
        if(!email || !emailRegex.test(email)) {
            return NextResponse.json({
                error: 'Email 输入有误！'
            }, {
                status: 400
            })
        }
        if(!password || !passwordRegex.test(password)) {
            return NextResponse.json({
                error: 'Password 输入有误！'
            }, {
                status: 400
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        // console.log('////',user.email, user.password)
        if(!user) {
            return NextResponse.json({
                error: 'Invaild credentails'
            }, {
                status: 401 //forbidden 权限不足
            })
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword) {
            return NextResponse.json({
                error: 'Invaild password'
            }, {
                status: 401 //forbidden 权限不足
            })
        }

        const {accessToken, refreshToken} = await createTokens(user.id);
        
        await prisma.user.update({
            where: {
                id: user.id
            },
            // 登录成功时获取的refreshToken存入数据库
            data: {
                refreshToken
            }
        })

        setAuthCookies(accessToken, refreshToken);

        return NextResponse.json({
            message: 'Login successful'
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            error: 'Internal Server Error'
        }, {
            status: 500
        })
    } finally {
        //释放数据库对象
        await prisma.$disconnect();
    }
    
}