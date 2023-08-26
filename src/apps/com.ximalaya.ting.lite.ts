import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ximalaya.ting.lite',
  groups: [
    {
      key: 0,
      name: '喜马拉雅极速版-首页-推荐-卡片广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: "[id='com.ximalaya.ting.lite:id/main_ad_top_home_iv_close']",
    },
    {
      key: 1,
      name: `喜马拉雅极速版-开屏广告`,
      activityIds: `com.ximalaya.ting.android.host.activity.WelComeActivity`,
      rules: [
        `[id="com.ximalaya.ting.lite:id/host_common_time_countdown_text_view"]`,
      ],
    },
  ],
};
