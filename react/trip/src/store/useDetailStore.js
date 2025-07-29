import {
    create
} from 'Zustand';
import { getDetail } from '@/api/detail'

const useDetailStore = create((set) => ({
    detail: {
        title: '',
        desc: '',
        images: [
            {
                alt: '',
                url: '@image(300x200, @color, #fff, 图片)'
            }
        ],
        price: ''
    },
    loading: false,
    setDetail: async () => {
        set({loading: true})
        const res = await getDetail();
        set({
            loading: false,
            detail: res.data
        });
    }
}))

export default useDetailStore