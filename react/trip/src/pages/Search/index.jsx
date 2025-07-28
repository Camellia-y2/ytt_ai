import SearchBox from '@/components/SearchBox'
import useTitle from '@/hooks/useTitle'
import useSearchStore from '@/store/useSearchStore'
import styles from './search.module.css'
import { useState, useEffect, memo } from 'react';

// 性能优化
const HotListItems = memo((props) => {
  console.log('___________',props)
  const {hotList} = props;
  return (
    <div className={styles.hot}>
      <h1>热门推荐</h1>
      {
        hotList.map((item) => (
          <div key={item.id} className={styles.item}>
            {item.city}
          </div>
        ))
      }
    </div> 
  )
})

const Search = () => {
  const [query, setQuery] = useState('');
  const {
    hotList,
    setHotList,
    suggestList,
    setSuggestList,
  } = useSearchStore()

  useEffect(() => {
    setHotList();
  }, [])

  // 单向数据流
  // 反复生成 用useCallback
  const handleQuery = (query) => {
    // api 请求
    console.log('debounce后',query)
    setQuery(query);
    if(!query.trim()) return
    setSuggestList(query);
  }

  const suggestListStyle = {
    display: query.trim() == '' ? 'none' : 'block'
  }
  
  useTitle('搜索')
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBox handleQuery={handleQuery} />
        {/* 组件化，维护性更好 */}
        <HotListItems hotList={hotList} />
        <div className={styles.suggestList} style={suggestListStyle}>
          {
            suggestList.map( item => (
              <div key={item} className={styles.suggestItem}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search