import { IRoutePro } from '@/typings/route';
import { SetPro } from '../defaultSettings';

const isDev = process.env.NODE_ENV === 'development';

/** 示例组件路由 */
let routes: IRoutePro[] = [];

if (isDev) {
  routes = [
    // 框架自带示例
    // { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
    // {
    //   path: '/admin',
    //   name: '示例：管理页',
    //   icon: 'crown',
    //   access: 'canAdmin',
    //   routes: [
    //     {
    //       path: '/admin/sub-page',
    //       name: '二级管理页',
    //       icon: 'smile',
    //       component: '@/pages/Admin',
    //     },
    //     { component: './404' },
    //   ],
    // },

    {
      name: '组件页',
      icon: 'table',
      path: '/example',
      routes: [
        { path: '/example', redirect: '/example/index' },
        {
          path: 'expPages',
          name: '页面容器示例',
          routes: [
            {
              path: 'exp1',
              name: '左树右表',
              component: '@/pages/Example/ExpPages/index1.tsx',
            },
            {
              path: 'exp2',
              name: '工作台样式',
              component: '@/pages/Example/ExpPages/overview.tsx',
            },
            {
              path: 'expDetail',
              name: '详情内容区',
              component: '@/pages/Example/ExpPages/pageContent.tsx',
            },
            {
              path: 'expDetail1',
              name: '详情页一',
              component: '@/pages/Example/ExpPages/pageDetail.tsx',
            },
            {
              path: 'expTab',
              name: '示例 hasTab',
              component: '@/pages/Example/ExpPages/indexTab.tsx',
            },
            {
              path: 'expTab2',
              name: '示例 hasTab2',
              component: '@/pages/Example/ExpPages/indexTab2.tsx',
            },
            {
              path: 'expPageSheet',
              name: '报表页面填报',
              component: '@/pages/Example/ExpPages/PageSheet.tsx',
            },
          ],
        },
        {
          path: '/example/bizCmp',
          name: '业务组件',
          component: '@/pages/Example/BizCmp/index.tsx',
          // routes: [
          //   { name: '业务组件', path: 'biz', component: '@/pages/Example/BizCmp/index.tsx' },
          // ],
        },
        {
          path: '/example/basic-cmp',
          name: '基础组件&设计稿',
          routes: [
            {
              name: '其他类型',
              path: '/example/basic-cmp/other',
              component: '@/pages/Example/BasicCmp/Other',
            },
            {
              name: '消息提示',
              path: '/example/basic-cmp/msg',
              component: '@/pages/Example/BasicCmp/Msg',
            },
            {
              name: '表格类型',
              path: '/example/basic-cmp/table',
              component: '@/pages/Example/BasicCmp/Table',
            },
            {
              name: '数据展示',
              path: '/example/basic-cmp/data',
              component: '@/pages/Example/BasicCmp/Data',
            },
            {
              name: '数据录入 Form',
              path: '/example/basic-cmp/Form',
              component: '@/pages/Example/BasicCmp/Form',
            },
          ],
        },
      ],
    },
    { path: '/', redirect: '/example' },
  ].map((item) => {
    if (item.name) {
      item.name = '示 · ' + item.name;
    }
    return item;
  });
}

export default routes;
