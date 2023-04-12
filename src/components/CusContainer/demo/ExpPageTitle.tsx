import { Link } from 'umi';
import CusContainer from '..';
import CusPageTitle from '../PageTitle';

export default function () {
  return (
    <div>
      <CusContainer title={<CusPageTitle />}>默认使用当前页面路由配置</CusContainer>

      <br />
      <CusContainer title={<CusPageTitle title="自定义的标题" />}>自定义标题</CusContainer>

      <br />
      <CusContainer title={<CusPageTitle breadcrumb title="自定义的标题" />}>
        使用面包屑显示路由
      </CusContainer>

      <br />
      <CusContainer
        title={
          <CusPageTitle
            breadcrumb
            breadcrumbProps={{
              routes: [
                { breadcrumbName: '组件页', path: '/example' },
                { breadcrumbName: '数据源', path: '/example/curd' },
              ],
            }}
            title="自定义的标题"
          />
        }
      >
        自定义显示路由
      </CusContainer>

      <br />
      <CusContainer
        style={{ height: 200 }}
        title={
          <CusPageTitle
            breadcrumbProps={{
              routes: [
                { breadcrumbName: '组件页', path: '/example' },
                { breadcrumbName: '数据源', path: '/example/curd' },
              ],
              // 自定义渲染函数
              itemRender(route, params, routes, paths) {
                const last = routes.indexOf(route) === routes.length - 1;
                return last ? (
                  <span>{route.breadcrumbName}</span>
                ) : (
                  <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
                );
              },
            }}
            title="自定义的标题"
          />
        }
      >
        自定义路由内容
        <br />
        在最后边扩展一个菜单
        <CusPageTitle
          breadcrumbProps={{
            routes: [
              { breadcrumbName: '组件页', path: '/example' },
              { breadcrumbName: '数据源', path: '/example/curd' },
              { breadcrumbName: '详情', path: 'no' },
            ],
            // 自定义渲染函数
            itemRender(route, params, routes, paths) {
              return route.path === 'no' ? (
                <span>{route.breadcrumbName}</span>
              ) : (
                <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
              );
            },
          }}
          title="自定义的标题"
        />
      </CusContainer>
    </div>
  );
}
