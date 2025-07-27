import React from 'react'
import styles from './home.module.css'
import { Tabs} from 'react-vant'
import { EyeO, LikeO } from '@react-vant/icons'
import EntryItem from './EntryItem'

const tabs = ['关注','综合','排行榜','后端','前端','Android','IOS','人工智能','开发工具','代码人生']

const tabData = [
  [
    {
      href: 'https://juejin.cn/post/7504468600850333748',
      title: '前端必备CSS布局之弹性（Flex）布局',
      desc: '弹性布局（Flexbox）是一种用于在页面上布局元素的强大工具。它允许你以一种灵活的方式组织，无论大小如何，都可以自适应调整...',
      img: 'https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/94e70af5c91b4c8982babefa20f1d6bb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230466&x-signature=uf7CW3oX77WRZF2EpkKgb5vrZCk%3D',
      footer: <p>每天开心 &nbsp;&nbsp; 15分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`}/>5 &nbsp;&nbsp;<LikeO  className={`${styles.likeIcon}`} />点赞</p>
    },
    {
      href: 'https://juejin.cn/post/7531515052198641673',
      title: '告别样式冲突：CSS 模块化实战',
      desc: '在开发 React 应用时，我们常常会遇到这样的问题：多个组件中使用了相同类名，导致样式相互覆盖，最终渲染效果与预期不符。比...',
      img: 'https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/89cfd625f53f49f58f8dbbea5d073fad~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230466&x-signature=7kw%2BgddaPXPRQZON8Dm%2FSjUVZ%2F8%3D',
      footer: <p>前端 &nbsp;&nbsp; 50分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />17 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>
    },
    {
      href: 'https://juejin.cn/post/7529753277769891849',
      title: 'Zustand：React 状态管理的轻量级利器',
      desc: '在现代 React 开发中，随着应用规模的扩大，组件之间共享状态的需求日益增加。React 本身提供了 useState 和 useReducer 这样的本...',
      img: 'https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/2e5fe686130f4b1d9bf9a926e2c90051~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230467&x-signature=YpcDjZnpiTRoXZ8Sf68MkYizYeA%3D',
      footer: <p>每天开心 &nbsp;&nbsp; 2小时前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />250 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>
    },
    {
      href: 'https://juejin.cn/post/7528223952940285990',
      title: '一文带你玩转Fragment文档碎片💡',
      desc: '文档碎片（DocumentFragment）是一个轻量级的文档对象，它不是文档的一部分，不会触发页面的重绘或重排。',
      img: 'https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b74fb5bdf69a4e5b9178d18314692807~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5q-P5aSp5byA5b-D:q75.awebp?rk3s=f64ab15b&x-expires=1754230467&x-signature=nnIng95309tSC3v7%2FNC2fjB3vho%3D',
      footer: <p>每天开心 &nbsp;&nbsp; 15分钟前&nbsp;&nbsp; <EyeO className={`${styles.eyeIcon}`} />5 &nbsp;&nbsp;<LikeO className={`${styles.likeIcon}`} />点赞</p>
    }
  ]
]

const TabsNav = () => (
  <nav>
    <Tabs className={`${styles.tabs}`}>
      {tabs.map((item, idx) => (
        <Tabs.TabPane key={item} title={`${item}`}>
          {/* 内容区 */}
          <div className={`${styles.timelineContent}`}>
            <div className={`${styles.entryList}`}>
              {tabData[0].map((entry, i) => (
                <EntryItem key={i} {...entry} />
              ))}
            </div>
          </div>
          {/* 底部按钮 */}
          <div className='app-open-button position-fixed fs-28'>APP内打开</div>
        </Tabs.TabPane>
      ))}
    </Tabs>
  </nav>
)

export default TabsNav 