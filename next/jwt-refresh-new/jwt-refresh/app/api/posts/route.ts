import {
  NextRequest,//拿到请求体
  NextResponse//返回响应体
} from 'next/server'
import { PrismaClient } from '../../generated/prisma/client'
//不直接和数据库打交道
//用prisma
const prisma = new PrismaClient()
