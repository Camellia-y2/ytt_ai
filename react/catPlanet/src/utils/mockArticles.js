// 文章模拟生成器
import { EyeO, LikeO } from '@react-vant/icons';
import generatePetImages from './mockPetImages';

// 所有标题、描述都只围绕「猫」和「狗」
const TITLES = [
  '猫咪为什么喜欢钻盒子？',
  '狗狗为什么爱追尾巴？',
  '主子半夜跑酷怎么办？',
  '如何训练狗狗不扑人？',
  '猫咪不吃猫粮的6个原因',
  '狗狗挑食？试试这5个方法',
  '猫咪掉毛严重？可能是这几点',
  '狗狗耳朵臭？可能是耳螨！',
  '猫咪呼噜声代表什么情绪？',
  '狗狗拆家？多半是焦虑导致',
  '如何给猫咪剪指甲？',
  '怎样给狗狗正确洗澡？',
  '猫咪上厕所埋屎行为解析',
  '狗狗坐车晕车怎么办？',
  '为什么猫咪总爱睡在你键盘上？',
  '狗狗摇尾巴一定代表开心吗？'
];

const DESCS = [
  '猫咪天生喜欢狭小隐蔽的空间，钻盒子是它们安全感的体现，也是狩猎本能的延续...',
  '狗狗追尾巴偶尔是玩耍，但如果频繁发生，可能是寄生虫、皮肤过敏或强迫症的表现...',
  '猫咪是夜行动物，夜晚活跃很正常。可以通过白天多互动来调节作息...',
  '训练狗狗不扑人，关键是从小建立规则，用“坐下”代替扑跳行为...',
  '猫咪不吃粮可能是食物不合口、牙齿不适或环境压力大，需逐一排查...',
  '狗狗挑食不要频繁换粮，定时定量，避免零食过多破坏食欲...',
  '换季掉毛正常，但大量脱毛可能与营养、皮肤病或压力有关，注意观察...',
  '耳道潮湿易滋生细菌，定期清洁检查，发现异味及时就医，别乱用滴耳液...',
  '呼噜声不仅是满足，有时疼痛或紧张时也会发出，需结合其他行为判断...',
  '拆家多因精力过剩或分离焦虑，增加运动量和陪伴能有效缓解...',
  '建议每周检查一次猫咪指甲，使用专用剪，避开粉红色的血线...',
  '水温适中，避开耳朵眼睛，使用宠物专用洗护，洗完及时吹干，别着凉...',
  '埋屎是猫咪隐藏踪迹的天性，如果不再埋屎，可能是猫砂盆不干净或有健康问题...',
  '可尝试短途适应、通风、固定位置，严重者可咨询兽医用药...',
  '你就是它最信任的人和最温暖的“充电宝”，这是极大的信任表现...',
  '尾巴高高翘起快速摇是兴奋，低速摇可能是犹豫，夹着尾巴则是害怕...'
];

const AUTHORS = [
  '猫博士说猫',
  '狗医生老汪',
  '铲屎官小王',
  '养狗十年经验谈',
  '爱猫如命的我',
  '宠物行为研究员',
  '每日喵汪记',
  '双宠家庭日记',
  '喵星观察员',
  '汪星翻译官'
];

// 随机工具
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 生成随机图片URL
const generateRandomImageUrl = () => {
  // 使用picsum.photos服务生成随机图片
  return `https://picsum.photos/300/200?random=${randomInt(1, 1000)}`;
};

// 生成一条模拟文章（只返回数据，不包含 JSX）
export function generateMockArticle() {
  return {
    href: 'https://juejin.cn/post/' + randomInt(7000000000000000, 7999999999999999),
    title: randomItem(TITLES),
    desc: randomItem(DESCS),
    img: generateRandomImageUrl(),
    author: randomItem(AUTHORS),          
    timeAgo: `${randomInt(1, 60)}分钟前`, 
    viewCount: randomInt(10, 999),        
    // footer JSX 移除，改为原始数据字段
  };
}

// 生成 n 篇文章
export function generateMockArticles(count = 4) {
  return Array.from({ length: count }, () => generateMockArticle());
}

// 生成 6 个 tab 的数据（每栏 4~6 篇随机文章）
export function generateTabData() {
  return Array.from({ length: 6 }, () =>
    generateMockArticles(randomInt(4, 6))
  );
}