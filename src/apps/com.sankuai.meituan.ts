import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
      rules: 'TextView[id="com.sankuai.meituan:id/close_btn"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12749811',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.meituan.android.upgrade.ui.',
        'com.meituan.android.upgrade.UpgradeDialogActivity',
      ],
      rules:
        'TextView[text^="新版本"] - Button[id="com.sankuai.meituan:id/btn_close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12614559',
        'https://gkd-kit.gitee.io/import/12673132',
      ],
    },
    {
      key: 2,
      name: '美团买菜活动弹窗',
      activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
      rules: [
        {
          key: 0,
          matches: 'ViewGroup > ViewGroup +(5) ViewGroup > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12639717',
        },
        {
          key: 1,
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12892626',
        },
      ],
    },
    {
      key: 3,
      name: '小调查弹窗',
      activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
      rules: '[text="小调查"] + ViewGroup > ViewGroup > ImageView',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12639723',
    },
    {
      key: 4,
      name: '首页右侧抽奖小广告',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: 'FrameLayout > @ImageView + ImageView[desc="资质与规则"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12639815',
        'https://gkd-kit.gitee.io/import/12639734',
      ],
    },
    {
      key: 5,
      name: '美团买菜-支付成功后-红包弹窗',
      desc: '美团买菜-支付成功后-关闭红包弹窗',
      activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
      rules: 'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12646768',
    },
    {
      key: 6,
      name: '美团骑行-广告、优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '骑行卡福利大派送弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12739204',
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '请求定位弹窗',
      desc: '首页/外卖界面-【打开位置开关弹窗】-点击右侧x关闭',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
      ],
      rules: [
        '[id ="com.sankuai.meituan:id/location_close"]',
        '[id ="com.sankuai.meituan:id/location_layer_close"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12874657',
        'https://gkd-kit.gitee.io/import/12910210',
        'https://gkd-kit.gitee.io/import/12910211',
      ],
    },
  ],
});
