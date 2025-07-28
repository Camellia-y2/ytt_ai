import useTitle from '@/hooks/useTitle'
import {
  useState,
} from 'react';
import {
  Image,
  Cell,
  CellGroup,
  ActionSheet,
  Popup,
  Loading,
} from 'react-vant'
import {
  ServiceO,
  FriendsO,
  StarO,
  SettingO
} from '@react-vant/icons'
import styles from './account.module.css'
import {
  generateAvatar
} from '@/llm'

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: '噜噜',
    level: '5级',
    slogan: '我是噜噜，二代奶龙。',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwyrU4jyb_84PJ0aVyiOkKAeUKjbJFLCl0w&s'
  })
  useTitle('我的')
  const [showActionSheet, setShowActionSheet] = useState(false)
  const handleAction = async (e) => {
    console.log(e);
    if(e.type===1){
      //AI生成头像
      const text = `
        昵称：${userInfo.nickname}
        签名：${userInfo.slogan}
      `;
      const newAvatar = await generateAvatar(text);
    }else if(e.type===2){
      //图片上传

    }
  }
  const actions = [
    {
      name: 'AI上传头像',
      color: '#ee0a24',
      type: 1 
    },
    {
      name: '上传头像',
      color: '#123123',
      type: 2
    }
  ]
  return (
    <div className={styles.container}>
      {/* 用户信息模块 */}
      <div className={styles.user}>
        <Image
          round
          width="64px"
          height="64px"
          src={userInfo.avatar}
          style={{cursor: "pointer"}}
          onClick={()=>setShowActionSheet(true)}
        />
        <div className='ml4'>
          <div className={styles.nickname}>昵称：{userInfo.nickname}</div>
          <div className={styles.level}>等级：{userInfo.level}</div>
          <div className={styles.slogan}>签名：{userInfo.slogan}</div>
        </div>
      </div>
      {/* 服务模块 单元格 */}
      <div className='mt3'>
        <CellGroup>
          <Cell title='服务' icon={<ServiceO />} isLink />
        </CellGroup>
        <CellGroup className='mt2'>
          <Cell title="收藏" icon={<StarO />} isLink />
          <Cell title="朋友圈" icon={<FriendsO />} isLink />
        </CellGroup>
        <CellGroup className='mt2'>
          <Cell title="设置" icon={<SettingO />} isLink />
        </CellGroup>
      </div>
      {/* 上传头像模块 */}
      <ActionSheet
        visible={showActionSheet}
        actions={actions}
        cancelText="取消"
        onCancel={()=>setShowActionSheet(false)}
        onSelect={(e)=>handleAction(e)}
      >

      </ActionSheet>
    </div>
  )
}

export default Account