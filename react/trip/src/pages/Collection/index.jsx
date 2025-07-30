import useTitle from '@/hooks/useTitle'
import { useEffect } from 'react'
import {
  useImageStore
} from '@/store/useImageStore'
import Waterfall from '@/components/Waterfall'

const Collection = () => {
  const { loading, images, fetchMore } = useImageStore()
  useEffect(() => {
    fetchMore()
  }, [])
  useTitle('我的收藏')
  return (
    <div>
      <Waterfall images={images} fetchMore={fetchMore} loading={loading}/>
    </div>
  )
}

export default Collection