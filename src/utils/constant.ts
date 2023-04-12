/**
 * 完善请求接口，添加服务器网管前缀
 * @param url
 * @param moduleStr
 * - 默认 `public` 公共接口
 * - chuzu 资产出租
 * - jcyj 监测预警
 * - gcgl 公车管理
 * - chuzhi 资产处置
 * - qggc 全国公车
 * - tjfx 统计分析，分析展示
 */
export function buildReqUrl(
  url: string,
  moduleStr: 'public' | 'chuzu' | 'jcyj' | 'gcgl' | 'chuzhi' | 'qggc' | 'tjfx' = 'public',
) {
  if (moduleStr === 'public') {
    return '/wisdom-city-business-public' + url;
  }
  if (moduleStr === 'chuzu') {
    return '/wisdom-city-business-fwcz' + url;
  }
  if (moduleStr === 'chuzhi') {
    return '/wisdom-city-business-zccz' + url;
  }
  if (moduleStr === 'gcgl') {
    return '/wisdom-city-business-gcgl' + url;
  }
  if (moduleStr === 'jcyj') {
    return '/wisdom-city-business-jcyj' + url;
  }
  if (moduleStr === 'qggc') {
    return '/wisdom-city-business-qggc' + url;
  }
  if (moduleStr === 'tjfx') {
    return '/wisdom-city-business-tjfx' + url;
  }
  return url;
}
