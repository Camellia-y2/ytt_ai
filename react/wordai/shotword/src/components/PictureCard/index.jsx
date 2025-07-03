import React,{
    useState
} from 'react';
import './style.css'

const PictureCard = (props) => {
    console.log(props,'///');
    const { uploadImage,word } = props;
    console.log(uploadImage);
    const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');

    const updateImageData = (e) => {
        // html5 的文件上传功能
        // const file = e.target.files[0];
        // if(!file) {
        //     return;
        // }

        // 可选链操作符 ？. 当左侧的操作数是null或undefined时，不会引起错误，而是返回undefined。
        const file = e.target.files?.[0]
        console.log(file)
        // 图片预览 I/O 异步操作
        return new Promise((resolve, reject) => {
            // html5
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // console.log(reader.result)
                // 响应式业务
                setImgPreview(reader.result);
                // 如果将图片数据交给父组件？
                uploadImage(reader.result);
                reader(reader.result);
            }
        })
    }
    return (
        <div className='card'>
           <input 
                id='selectImage' 
                type="file" 
                accept='.jpg,.jpeg,.png,.gif'
                onChange={updateImageData}
            />
            <label
                className='upload'
                htmlFor='selectImage'>
                    <img src={imgPreview} alt="preview" />
            </label>
            {/* template -> JSX -> {数据绑定} -> 响应式 -> 单词业务 */}
            <div className='word'>
                {word}
            </div>
        </div>
    )
}

export default PictureCard;