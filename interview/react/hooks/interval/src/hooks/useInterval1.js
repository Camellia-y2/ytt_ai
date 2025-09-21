// 简单版本

import { useEffect } from 'react';

function useInterval(callback, delay) {
  useEffect(() => {
    if (delay === null) return; // 支持暂停
    const id = setInterval(callback, delay);
    return () => clearInterval(id); // React 会自动调用这个清理函数
  }, [delay]); // 依赖 delay，变化时重启定时器
}

export default useInterval;