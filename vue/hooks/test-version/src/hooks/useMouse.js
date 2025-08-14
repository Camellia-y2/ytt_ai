import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

export function useMouse(){
    const x = ref(0)
    const y = ref(0)

    const updateMounsePosition = (e) => {
        x.value = e.clientX
        y.value = e.clientY
    }

    onMounted(()=>{
        window.addEventListener('mousemove',updateMounsePosition)
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',updateMounsePosition)
    })
    return {
        x,
        y
    }
}
