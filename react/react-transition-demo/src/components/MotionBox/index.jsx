import { motion } from 'framer-motion'; // pnpm i framer-motion安装第三方库
const MotionBox = () => {

    return (
        <motion.div 
            initial={{ opacity: 0, y:-50 }} // 初始状态
            animate={{ opacity: 1, y:0 }} // 动画状态
            transition={{ duration: 0.5 }} // 动画持续时间
            style={{ backgroundColor: 'skyblue', padding:20 }} // 样式
        >
            <h2>Motion Box</h2>
        </motion.div>
    )
}
export default MotionBox;