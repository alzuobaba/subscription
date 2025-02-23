import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dmzjsq.manhua',
  name: '动漫之家社区',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12885087',
        },
        {
          key: 1,
          activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
          matches:
            'ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12893731',
        },
      ],
    },
  ],
});
