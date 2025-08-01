// 百科
import styles from './encyclopedia.module.css';
import HeaderBox from '@/components/HeaderBox';
import { Swiper, Image } from 'react-vant';
import generatePetImages from '@/utils/mockPetImages';

const Encyclopedia = () => {
  // 在组件中生成 4 张随机宠物图片
  const petImages = generatePetImages(4);

  return (
    <div>
      {/* 头部 */}
      <HeaderBox />

      {/* 宠物幻灯片 */}
      <div className={styles.swiper}>
        <Swiper autoplay={2000} loop>
          {
            petImages.map((item) => (
                <Swiper.Item key={item.id}>
                <Image src={item.url} alt={item.alt} width="100%" height={200} />
                </Swiper.Item>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Encyclopedia;