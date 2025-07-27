import { useTitle } from '@/hooks/useTitle'
import { 
    useState,
    useEffect
} from 'react'
import { Input, Button } from 'react-vant'
import styles from './search.module.css'
import { Tabs } from 'react-vant'
import { 
    Search,
    ArrowUp,
    ArrowDown,
    DeleteO,
    Close
} from '@react-vant/icons'

const SearchTabs = ['全部', '文章', '课程', '标签', '用户']
const SearchPage = () => {
    useTitle('搜索')
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]); // 搜索历史
    const [isHistoryExpanded, setIsHistoryExpanded] = useState(true) // 控制展开/收起

    // 从 localStorage 加载搜索历史
    useEffect(() => {
        const history = localStorage.getItem('searchHistory')
        if (history) {
            try {
                setSearchHistory(JSON.parse(history))
            } catch (e) {
                setSearchHistory([])
            }
        }
    }, [])

    // 保存搜索历史到 localStorage
    useEffect(() => {
        if (searchHistory.length > 0) {
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        } else {
            localStorage.removeItem('searchHistory') // 搜索历史为空时清除
        }
    }, [searchHistory])
    
    const handleSearch = () => {
        if(text.trim() === ''){
            return;
        }
        setSearchHistory([
            text.trim(),
            ...searchHistory.filter(i => i !== text.trim()) // 重复的搜索记录要删掉
        ])
        setIsSending(true);
    }
    const cancelSearch = () => {
        setIsSending(false);
        setText('');
    }
    return (
        <>
        {/* 搜索栏 */}
        <div className={`flex flex-1 ${styles.inputArea}`}>
        <Input
                value={text}
                // 左侧图标 可以点击发送
                prefix={
                    <Search 
                    onClick={() => {
                            handleSearch();
                        }}
                    className='cPointer'
                    />
                }
                suffix={
                    // 当输入框有内容时才显示清空按钮
                     text.trim() !== '' && (<Close
                        onClick={() => {
                            setText('');
                        }}
                        className={`cPointer position-relative ${styles.closeIcon}`}
                    />)
                }
                onChange={(e) => setText(e)}
                placeholder='搜索文章/课程/标签/用户'
                className={`flex-1 ${styles.input}`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.keyCode === 13) {
                    handleSearch();
                    }
                }}
            
            />
            <Button
            type='default'
            onClick={cancelSearch}
            className={styles.cancelBtn}
            >
            取消
            </Button>
        </div>

    {/* 固定显示的 Tabs 标签页 */}
        <Tabs>
            {SearchTabs.map((tab, index) => (
            <Tabs.TabPane key={index} title={tab}>
                {/* 根据是否输入搜索内容，切换显示内容 */}
                {!isSending ? (
                <div className={`${styles.searchHistoryBlock} ${styles.tabContent}`}>
                    <div className='flex'>
                        <p className={styles.searchHistoryTitle}>搜索历史</p>
                        {isHistoryExpanded ? (
                            <ArrowUp
                                className={`${styles.arrowUp} position-relative`}
                                onClick={() => setIsHistoryExpanded(false)}
                            />
                        ) : (
                            <ArrowDown
                                className={`${styles.arrowDown} position-relative`}
                                onClick={() => setIsHistoryExpanded(true)}
                            />
                        )}
                        <DeleteO  
                            className={`${styles.delete} position-relative`} 
                            onClick={() => setSearchHistory([])}
                        />
                    </div>
                    <ul className={`${isHistoryExpanded ? 'flex' : 'hidden'} fs-28 wrap`}>
                    {searchHistory.map((item, idx) => (
                        <li 
                            key={idx} 
                            onClick={() => {
                                setText(item);
                                setSearchHistory([
                                    item.trim(),
                                    ...searchHistory.filter(i => i !== item.trim()) // 重复的搜索记录要删掉
                                ]) // 将搜索记录加入历史
                                setIsSending(true);
                            }} 
                            className={styles.searchHistoryItem}
                        >
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
                ) : (
                <div className={styles.tabContent}>
                    <p>你搜索的内容是："{text}"</p>
                    <p>当前 Tab：{tab}</p>
                    {/* 这里可以根据 tab 显示不同内容，调用不同组件 */}
                </div>
                )}
            </Tabs.TabPane>
            ))}
        </Tabs>
        </>
    )
}

export default SearchPage