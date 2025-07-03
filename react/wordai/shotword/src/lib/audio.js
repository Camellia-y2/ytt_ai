// 多个直接输出
export const generateAudio = async (text) => {
    const token = import.meta.env.VITE_AUDIO_ACCESS_TOKEN;
    const appId = import.meta.env.VITE_AUDIO_APP_ID;
    const clusterId = import.meta.env.VITE_AUDIO_CLUSTER_ID;
    const voiceName = import.meta.env.VITE_AUDIO_VOICE_NAME;
    const endpoint = "/tts/api/v1/tts"; // tts语音生成大模型
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer;${token}`
    };
}

const payload = {
    app: {
        appid: appId,
        token, // es6 省略对象写法：token: token 名和值相同
        clusterid: clusterId, // 集群id，默认值为default
    },
    user: {
        uid: 'bearbobo'
    },
    audio: {
        voice_type: voiceName,//音色
        encoding: 'ogg_opus',//编码格式
        compression_rate: 1,
            rate: 24000,
            speed_ratio: 1.0,
            volume_ratio: 1.0,
            pitch_ratio: 1.0,
            emotion: 'happy',
    },
    request: {
        reqid: Math.random().toString(36).substring(7),
        text,
        text_type: 'plain',
        operation: 'query',
        silence_duration: '125',
        with_frontend: '1',
        frontend_type: 'unitTson',
        pure_english_opt: '1',
    },
}

const res = await fetch(endpoint, {
    
})

// export const generateAudioWithMan = () => {

// }


// 单个导出
// import { generateAudio } from './lib/audio.js';
// export default generateAudio;