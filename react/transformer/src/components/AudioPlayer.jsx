import {
    useEffect,
    useRef
} from 'react'

// mimeType 声音格式
const AudioPlayer = ({audioUrl , mimeType}) => {
    const audioPlayer = useRef(null)
    const audioSource = useRef(null)

    useEffect(() => {
        if(audioPlayer.current && audioSource.current) {
            audioPlayer.current.src = audioUrl
            audioPlayer.current.play()
        }
    },[audioUrl])
    return (
        <div className='flex relative z-10 my-4 w-full'>
            <audio 
                ref={audioPlayer}
                className='w-full h-14 rounded-lg bg-white 
                shadow-xl shadow-black/5 ring-1 ring-slate-700/10' 
                controls
            >
                {/* 浏览器兼容声音的类型不一样，可能有多个source */}
                <source src={audioUrl} type={mimeType} ref={audioSource} />

            </audio>
        </div>
    )
}
export default AudioPlayer
