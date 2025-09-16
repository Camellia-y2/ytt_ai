import {
    createClient
} from '@supabase/supabase-js';

// Next.js 客户端组件需要使用 NEXT_PUBLIC_ 前缀
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);      