
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '情人节 - 王聪的抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '小王聪~', },
    { key: 's', wording: '这是你的抽奖哦~', },
    { key: 'd', wording: '只能抽一次，抽到啥就给你啥哦~', },
  ],
  // 最终解释权归属人
  owner: 'zhuli',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 4,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '520红包', alias: '520', image: '/images/1.png',  description: '「520块人民币！！」' },
  { key: 'w', name: '腾讯视频年VIP', alias: 'VIP', image: '/images/2.png',  description: '“为你承包VIP”' },
  { key: 'e', name: '999红包', alias: '999', image: '/images/3.png',  description: '「999块人民币！！！」' },
  { key: 'r', name: '199红包', alias: '199', image: '/images/6.png',  description: '199块人民币！' },
  { key: 't', name: '299红包', alias: '299', image: '/images/5.png',  description: '299块人民币！' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '99', alias: '99', image: '/images/7.png',  description: '小小心意~' },
  { key: 'i', name: '谢谢惠顾！嘿嘿', alias: '谢谢惠顾！', image: '/images/8.png',  description: '5555555555' },
];
