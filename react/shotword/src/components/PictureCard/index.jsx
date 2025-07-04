import { useState } from 'react';
import './style.css';

const PictureCard = (props) => {
    const {
        word,
        audio,
        uploadImg,// 回调函数告诉父组件要更新图片
    } = props;
    const [imgPreview,setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');

    const uploadImgData = (e) => {
        const file = (e.target).files?.[0];
        if (!file) { return; }
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const data = reader.result;
                setImgPreview(data);
                uploadImg(data);// 告诉父组件要更新图片--通过回调函数
                resolve(data);
            }
            reader.onerror = (error) => { reject(error); };
        })
    }
    return (
        <div className='card'>
           <input
            id='selectImage'
            type='file'
            accept='.jpg,.ipeg,.png,.gif'
            onChange={uploadImgData}
           />
            <label htmlFor="selectImage" className='upload'>
                <img src={imgPreview} alt="preview" />
            </label>
            <div className='word'>{word}</div>
        </div>
    )
}
export default PictureCard;