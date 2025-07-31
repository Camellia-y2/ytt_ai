// AI智能助手
import { chat } from '@/llm';
import { Search, Toast, Image, Loading } from 'react-vant';
import { useState } from 'react';
import useTitle from '@/hooks/useTitle';
import styles from './assistant.module.css'
import { ChatO, HomeO, UserO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';

const Assistant = () => {
    const navigate = useNavigate();
    useTitle('AI智能助手')
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'user',
            content: '你好'
        },
        {
            id: 2,
            role: 'assistant',
            content: '你好，我是你的AI助手，请问有什么可以帮到你的呢？'
        }
    ]);
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = async () => {
        if(text.trim() === ''){
            Toast({
                message: '自定义图片',
                icon: (
                    <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
                ),
            })
            return;
        }
        setIsSending(true);
        setText('');

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
    return (
        <div className={`flex h-all h-screen flex-col ${styles.container}`}>
            <header className={styles.header}>
                <h1>AI 宠物助手</h1>
                <HomeO onClick={()=>{navigate('/smartimage')}}/> 
                <h4 className={`${styles.desc} font-f`}>你可以向我咨询宠物相关的问题，我会尽力回答你的问题。</h4>
            </header>
            <main className={styles.messages}>
                 <Search
                    className={styles.search}
                    shape="round"
                    background="rgba(200, 210, 225, 0.04)"
                    placeholder="请输入问题"
                    value={text}
                    onChange={setText}
                    onSearch={handleSubmit}
                />
                {
                    isSending && (
                        <div className='fixed-loading'>{/*离开文档流 */}
                            <Loading type='ball'/>
                        </div>
                    )
                }
                {   
                    messages.map((item,index) => {
                        return (
                            <div 
                                key={index} 
                                className={
                                    item.role === 'user' ? styles.messageRight : styles.messageLeft
                                }
                            >
                                {
                                    item.role=='assistant' ? <ChatO/>: <UserO/>
                                }
                                {item.content}
                            </div>
                        )   
                    })
                }
            </main>
        </div>
    )
}

export default Assistant;