// 管理全局主题颜色
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
//persist 会自动把 isDark 保存到 localStorage，刷新页面也不会丢失
  persist( 
    (set, get) => ({
      isDark: false, // 默认浅色模式

      // 切换主题的函数
      toggleDark: () => {
        const newDark = !get().isDark;
        set({ isDark: newDark });

        // 同步到 document.body class
        if (newDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      },

      // 直接设置主题
      setDark: (value) => {
        set({ isDark: value });
        if (value) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      },
    }),
    {
      name: 'theme-storage', // 存入 localStorage 的 key
      partialize: (state) => ({ isDark: state.isDark }), // 只持久化 isDark
    }
  )
);

export default useThemeStore;