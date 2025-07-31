import useTitle from '@/hooks/useTitle'
import {
    useRef,
    useState
} from 'react'
import styles from './coze.module.css'
const Coze = () => {
    const uploadImageRef = useRef(null)
    const uploadUrl = 'https://api.coze.cn/v1/files/upload';
    const patToken = import.meta.env.VITE_PAT_TOKEN;
    const workflowUrl = 'https://api.coze.cn/v1/workflow/run';
    const workflow_id = '7533135015803289663';
    const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
    const [uniform_color, setUniformColor]=useState('红');
    const [uniform_number, setUniformNumber] = useState(10);
    const [position, setPosition] = useState(0);
    const [shooting_hand, setShootingHand] = useState(0);
    const [style, setStyle] = useState('写实');
    const [imgUrl, setImgUrl] = useState('');
    const [status, setStatus] = useState('');
    const updateImageData = () => {
        const input = uploadImageRef.current;
        // console.log(uploadImageRef.current)
        if (!input.files || input.files.length === 0) { return; }
        const file = input.files[0];
        // console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file); // HTML5
        reader.onload = (e) => { 
            // base64格式图片
            setImgPreview(e.target?.result)
            // imgPreview.value = e.target?.result as string; 
        };
    }
   const uploadFile = async () => {
    // 图像是二进制文件，如音频等，需要使用 FormData 来发送
    const formData = new FormData(); // 创建一个 FormData 对象，用于发送文件
    const input = uploadImageRef.current; // 获取文件输入元素的引用（React ref）

    // 检查是否有文件被选中
    if (!input.files || input.files.length <= 0) return;

    // 将选中的第一个文件添加到 formData 中，字段名为 'file'
    formData.append('file', input.files[0]);

    // 发起 POST 请求上传文件
    const res = await fetch(uploadUrl, { 
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${patToken}`, 
            // 注意：不要手动设置 Content-Type，让浏览器自动设置（尤其是 boundary）
        }, 
        body: formData, 
    });

    // 解析响应为 JSON
    const ret = await res.json();
    console.log(ret);

    // 如果返回状态码不是 0，更新状态并退出
    if (ret.code !== 0) { 
        status.value = ret.msg; 
        return; 
    }

    // 成功时返回文件 ID
    return ret.data.id;
}
    const generate = async () => {
        setStatus("图片上传中...");
        const file_id = await uploadFile();
        console.log(file_id);
        if (!file_id) return;
        setStatus("图片上传成功，正在生成...")
        const parameters = { 
            // 图片需要id 
            picture: JSON.stringify({ file_id }), 
            style: style, 
            uniform_number: uniform_number, //队服编号 
            uniform_color: uniform_color, // 队服颜色 
            position: position, // 0-守门员，1-前锋，2-后卫 
            shooting_hand: shooting_hand, // 0-左手，1-右手 
        };
        const res = await fetch(workflowUrl, {
            method: 'POST',
            headers: { 
                Authorization: `Bearer ${patToken}`, 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ workflow_id, parameters, }),
        });
        const ret = await res.json();
        console.log(ret);

        if (ret.code !== 0) { setStatus(ret.msg); return; }
        const data = JSON.parse(ret.data); 
        setStatus(''); 
        setImgUrl(data.data);
    }
    useTitle('Coze')
    return (
       <div className={styles.container}>
            <div className={styles.input}>
                <div className={styles.fileInput}>
                    <input 
                    ref={uploadImageRef}
                    type="file" 
                    id="image" 
                    name="image" 
                    accept="image/*" 
                    required
                    onChange={updateImageData}
                    />
                </div>
                <img 
                    src={imgPreview} 
                    alt="preview" 
                    className={styles.preview}

                />
                <div className={styles.settings}>
                    <div className={styles.selection}>
                        <label>队服编号</label>
                        <input value={uniform_number} type="number" onChange={(event) => setUniformNumber(event.target.value)} />
                    </div>
                </div>
                <div className={styles.selection}>
                    <label>队服颜色:</label>
                    <select value={uniform_color} onChange={(e) => {setUniformColor(e.target.value)}}>
                        <option value="红">红</option>
                        <option value="蓝">蓝</option>
                        <option value="绿">绿</option>
                    </select>
                </div>
                <div className="settings">
                    <div className="selection">
                        <label>位置：</label>
                        <select value={position} onChange={(e) => {setPosition(e.target.value)}}>
                            <option value="0">守门员</option>
                            <option value="1">前锋</option>
                            <option value="2">后卫</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>持杆:</label>
                        <select value={shooting_hand} onChange={(e) => setShootingHand(e.target.value)}>
                            <option value="0">左手</option>
                            <option value="1">右手</option>
                        </select>
                    </div>
                    <div className={styles.selection}>
                        <label>风格:</label>
                        <select value={style} onChange={(e) => setStyle(e.target.value)}>
                            <option value="写实">写实</option>
                            <option value="乐高">乐高</option>
                            <option value="国漫">国漫</option>
                        </select>
                    </div>
                </div>
                <div className={styles.generate}>
                    <button onClick={generate}>生成</button>
                </div>
            </div>
            <div className={styles.output}>
                <div className={styles.generated}>
                    {imgUrl && <img src={imgUrl} alt="" />}
                    {status && <>{status}</>}
                </div>
            </div>
            
        </div>
    )
}
export default Coze