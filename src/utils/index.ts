// 全局工具函数

/**
 * 生成类名
 * @param clsName 类名
 * @param prefix 前缀
 * @returns 前缀-类名
 */
export function getPrefixCls(clsName: string, prefix = 'cus') {
  return [clsName, prefix].join('-');
}

/**
 * 睡眠函数
 * @example
 * ```
 * async function () {
 *    console.log('1');
 *    await sleep(1000);
 *    // 一秒后打印
 *    console.log('2');
 * }
 * ```
 */
export const sleep = (millisecond: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

/**
 * JSON 转 FormData
 */
export function json2FormData(source = {}) {
  const data = new FormData();
  const d = {};
  Object.keys(source).map((key) => {
    const v = source[key];
    const vt = typeof v;
    if (vt === 'object' && v !== null) {
      data.append(key, v);
      d[key] = v;
    } else if (['string', 'number', 'bigint', 'boolean', 'undefined'].indexOf(vt) > -1) {
      data.append(key, v);
      d[key] = v;
    } else {
      console.log('其它类型：', key, v, vt);
    }
  });

  // console.log(d);
  return data;
}

/**
 * 列表转树
 * - TODO: 换成 TS 版本
 * @param {[]} list 源列表
 * @param {object} p
 * @param {string} p.valRootPid 根节点值
 * @param {string} p.propPid pId 字段名
 * @param {string} p.idKey id 字段名
 * @param {string} p.childrenKey children 字段名
 * @param {Function} processItem 处理节点其他属性数据
 * @returns
 */
export function list2tree2(
  list: any[],
  { valRootPid = 'null', propPid = 'parentId', idKey = 'id', childrenKey = 'children' } = {},
  processItem?: any,
) {
  let listTmp = list;
  if (typeof processItem === 'function') {
    listTmp = list.map((item: any) => {
      const itemTmp = processItem({ ...item }) || item;
      return itemTmp;
    });
  }

  const group = {};
  listTmp.forEach((item: any) => {
    const parentId = item[propPid];
    if (!group.hasOwnProperty(parentId)) {
      group[parentId] = [];
    }
    group[parentId].push(item);
  });

  listTmp.forEach(function (item: any) {
    const id = item[idKey];
    if (group.hasOwnProperty(id)) {
      item[childrenKey] = group[id];
    }
  });

  return group[valRootPid];
}
