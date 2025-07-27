import { 
    useTitle,
 } from '@/hooks/useTitle'
import styles from './home.module.css'
import { useEffect, useState } from 'react'
import {
    ArrowUp,
    ArrowDown,
    Search,
    Bell,
    EyeO,
    LikeO,
} from '@react-vant/icons'
import {
    Input,
    Image,
    Tabs
} from 'react-vant'
const tabs = ['关注','综合','排行榜','后端','前端','Android','IOS','人工智能','开发工具','代码人生']
const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);// 展开状态
    useTitle('首页')
    useEffect(() => {
        const phoneHide = document.querySelector(`.${styles.phoneHide}`)
        phoneHide.addEventListener('click', (e) => {
            if(e.target.tagName === 'LI'){
                document.querySelector('.active').classList.remove('active')
                document.querySelector(`.${styles.phoneShowMeau}`).classList.add('active')
            }
        })
    }, [isExpanded])
    return (
        <>
            <div className='view-container'>
                {/* 头部搜索 */}
                <header className='main-header container visible'>
                    <a className={`${styles.logo}`}>
                        <img 
                            src="//lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" 
                            alt="稀土掘金" 
                        />
                    </a>
                    <nav className={`${styles.navList} active`}>
                        <ul className={styles.navList}>
                        {/* 左边导航 */}
                        <li className={styles.mainNavList}>
                            <div className={styles.phoneShowMeau}>
                            <p>首页</p> &nbsp;
                            {
                                !isExpanded ? (
                                    <ArrowUp onClick={() => {
                                        setIsExpanded(true)
                                        document.querySelector(`.${styles.phoneHide}`).classList.remove('hidden')
                                    }}/>
                                ) : (
                                    <ArrowDown onClick={() => {
                                        setIsExpanded(false)
                                        document.querySelector(`.${styles.phoneHide}`).classList.add('hidden')
                                    }}/>
                                )
                            }

                            </div>
                            {/* 下拉菜单 */}
                            <ul className={`${styles.phoneHide} hidden`}>
                                <li className={`${styles.navItem} active`}><a href="/">首页</a></li>
                                <li className={styles.navItem}><a href="https://aicoding.juejin.cn/">AI Coding</a></li>
                                <li className={styles.navItem}><a href="/search">搜索页</a></li>
                                <li className={styles.navItem}><a href="/account">我的</a></li>
                            </ul>
                        </li>

                        {/* 右边导航：搜索、通知、头像 */}
                        <li>
                            <ul className={styles.rightSideNav}>
                            <li className={`${styles.searchAdd} ${styles.navItem}`}>
                                <Input
                                placeholder="搜索"
                                type="text"
                                suffix={<Search className={styles.searchIcon} />}
                                />
                            </li>
                            <li className={styles.navItem}><Bell className={styles.notification} /></li>
                            <li className={`${styles.navImg} ${styles.navItem}`}>
                                <Image 
                                fit="cover"
                                src="https://pic.rmb.bdstatic.com/bjh/down/d3lLqzyu-9K4-8wyqjPx9wdb8ddee34ee9369fa2a3bdd66ef6cad5.jpg?for=bg" 
                                round
                                />
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </nav>
                </header>
                {/* 主要区域 */}
                <main className='main-container'>
                    {/* 顶部tabs */}
                    <nav>
                         <Tabs className={`${styles.tabs}`}>
                            {tabs.map(item => (
                            <Tabs.TabPane key={item} title={`${item}`}> 
                                {/* 内容区 */}
                                <div className={`${styles.timelineContent}`}>
                                    <div className={`${styles.entryList}`}>
                                        <li className={`${styles.entryItem}`}>
                                            <a className={`${styles.entryLink}`} href="https://juejin.cn/post/7504468600850333748">
                                                <div className={`${styles.titleRow}`}>前端必备CSS布局之弹性（Flex）布局</div>
                                                <div className={`${styles.mainRow}`}>
                                                    <div className={`${styles.mainRowCenter}`}>
                                                        <p>
                                                            弹性布局（Flexbox）是一种用于在页面上布局元素的强大工具。它允许你以一种灵活的方式组织，无论大小如何，都可以自适应调整...
                                                        </p>
                                                        <img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/94e70af5c91b4c8982babefa20f1d6bb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230466&x-signature=uf7CW3oX77WRZF2EpkKgb5vrZCk%3D" alt="文章封面" /></div>
                                                    <div className={`${styles.entryFooter}`}>
                                                        <p>每天开心 &nbsp;&nbsp; 15分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`}/>5 &nbsp;&nbsp;<LikeO  className={`${styles.likeIcon}`} />点赞</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`${styles.entryItem}`}>
                                            <a className={`${styles.entryLink}`} href="https://juejin.cn/post/7531515052198641673">
                                                <div className={`${styles.titleRow}`}>告别样式冲突：CSS 模块化实战</div>
                                                <div className={`${styles.mainRow}`}>
                                                    <div className={`${styles.mainRowCenter}`}>
                                                        <p>
                                                            在开发 React 应用时，我们常常会遇到这样的问题：多个组件中使用了相同类名，导致样式相互覆盖，最终渲染效果与预期不符。比...
                                                        </p>
                                                        <img src="https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/89cfd625f53f49f58f8dbbea5d073fad~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230466&x-signature=7kw%2BgddaPXPRQZON8Dm%2FSjUVZ%2F8%3D" alt="文章封面" /></div>
                                                    <div className={`${styles.entryFooter}`}>
                                                        <p>前端 &nbsp;&nbsp; 50分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />17 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                         <li className={`${styles.entryItem}`}>
                                            <a className={`${styles.entryLink}`} href="https://juejin.cn/post/7529753277769891849">
                                                <div className={`${styles.titleRow}`}>Zustand：React 状态管理的轻量级利器</div>
                                                <div className={`${styles.mainRow}`}>
                                                    <div className={`${styles.mainRowCenter}`}>
                                                        <p>
                                                            在现代 React 开发中，随着应用规模的扩大，组件之间共享状态的需求日益增加。React 本身提供了 useState 和 useReducer 这样的本...
                                                        </p>
                                                        <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/2e5fe686130f4b1d9bf9a926e2c90051~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230467&x-signature=YpcDjZnpiTRoXZ8Sf68MkYizYeA%3D" alt="文章封面" /></div>
                                                    <div className={`${styles.entryFooter}`}>
                                                        <p>每天开心 &nbsp;&nbsp; 2小时前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />250 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                         <li className={`${styles.entryItem}`}>
                                            <a className={`${styles.entryLink}`} href="https://juejin.cn/post/7528223952940285990">
                                                <div className={`${styles.titleRow}`}>一文带你玩转Fragment文档碎片💡</div>
                                                <div className={`${styles.mainRow}`}>
                                                    <div className={`${styles.mainRowCenter}`}>
                                                        <p>
                                                           文档碎片（DocumentFragment）是一个轻量级的文档对象，它不是文档的一部分，不会触发页面的重绘或重排。
                                                        </p>
                                                        <img src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b74fb5bdf69a4e5b9178d18314692807~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230467&x-signature=nnIng95309tSC3v7%2FNC2fjB3vho%3D" alt="文章封面" /></div>
                                                    <div className={`${styles.entryFooter}`}>
                                                        <p>每天开心 &nbsp;&nbsp; 15分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />5 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>

                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </div>
                                </div>
                                {/* 底部按钮 */}
                                <div className='app-open-button position-fixed fs-28'>APP内打开</div>
                            </Tabs.TabPane>
                            ))}
                        </Tabs>
                    </nav>


                </main>
            </div>
        </>
    )
}
export default Home