import {
  useEffect,
  useState,
} from 'react'
import useTitle from '@/hooks/useTitle'
import{
  chat
} from '@/llm'
import styles from './trip.module.css'
import{
  Input,
  Button,
  Loading,
  Toast,
} from 'react-vant'
import {
  ChatO,
  UserO,
} from '@react-vant/icons'
const Trip = () => {
  useTitle('旅游智能客服')
  const [text,setText] = useState('')
  const [isSending,setIsSending] = useState(false)
  //数据驱动界面
  //静态界面
  const [messages,setMessages] = useState([
    {
      id:1,
      content:'hello~',
      role:'user'
    },
    {
      id:2,
      content:'hello,I am your assistant ,I can help you with your travel',
      role:'assistant'
    }
  ])
  const handleChat =async()=>{  
    if(text.trim() === '') {
    Toast.info({
      message:'内容不能为空'
    })
    return
  }
  setIsSending(true)
  setText('')

  setMessages((prev)=>{
    return [
    ...prev,
    {
      role:'user',
      content:text
    }
  ]
  })
  const newMessage = await chat([{
    role:'user',
    content:text
  }]);
  setMessages((prev)=>{
    return [
      ...prev,
      newMessage.data
    ]
  })
  setIsSending(false)
  }
  // useEffect(()=>{
  //   const fetchChat = async()=>{
  //     const res = await kimiChat([
  //       {
  //         role:'user',
  //         content:'赣州旅游推荐'
  //       }
  //     ])
  //     console.log(res)
  //   }
  //   fetchChat()
  // },[])
  
  return (
    <div className='flex flex-col h-all'>
      <div className={`flex-1 ${styles.chatArea}`}>
        {
          messages.map((msg,index)=>{
            return (
              <div 
              key={index}
              className={
                msg.role === 'user' ? styles.messageRight : styles.messageLeft
              }
              >
                {
                  msg.role=='assistant'?
                  <ChatO/>:
                  <UserO/>
                }
                {msg.content}
              </div>
            )
          })
        }
      </div>
      <div className={`flex ${styles.inputArea}`}>
        <Input 
          value={text}
          onChange={(e)=>setText(e)}
          placeholder='请输入消息'
          className={`flex-1 ${styles.input}`}
        />
        <Button
          type='primary'
          onClick={handleChat}
          disabled={isSending}
        >
          发送
        </Button>
      </div>
       {isSending && (<div className='fixed-loading'>{/*离开文档流 */}
        <Loading type='ball'/>
      </div>)}

    </div>
  )
}
export default Trip
