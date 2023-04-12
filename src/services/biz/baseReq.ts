import { buildReqUrl } from '@/utils/constant';
import { request } from 'umi';

/** 基础请求 */
class BaseReqCurd<
  DataItemSource extends object,
  idField extends keyof DataItemSource,
  DataItem = BusinessCommonItem<DataItemSource, idField>,
  RequireId = PartialRequired<DataItem, 'id'>,
> {
  /** 模块简称 */
  shorterName: string = '模块';
  /** 主键字段 */
  fieldId: idField = 'id' as idField;
  /** title 字段 */
  fieldTitle = 'title';

  /** 处理数据项：到页面消费 */
  // format2page = (row: DataItemSource): DataItem => {
  format2page = (row: any) => {
    return { ...row, id: row[this.fieldId], title: row[this.fieldTitle] };
  };
  /** 处理数据项：到服务器消费 */
  // format2service = function (row: DataItem): DataItemSource {
  format2service = (row: any): any => {
    row[this.fieldId] = row.id;

    return row;
  };

  /**
   * 数据新增
   * @param params 待提交表单数据
   * @param originRow 数据库原始数据
   * @returns
   */
  add = async (
    params: Partial<DataItem>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    originRow: any,
  ): Promise<Res.InsertUpdate<DataItem>> => {
    return request(buildReqUrl('/public/datasource/insert'), {
      method: 'POST',
      data: {
        ...params,
      },
    });
  };

  remove = async (params: RequireId[] | RequireId): Promise<Res.Del<DataItem>> => {
    let url = '';

    if (Array.isArray(params)) {
      const ids = params
        .map((item) => {
          return item.id;
        })
        .join(',');
      url = buildReqUrl(`/public/datasource/deleteByIds/${ids}`);
    } else {
      url = buildReqUrl(`/public/datasource/deleteById/${params.id}`);
    }

    return request(url, { method: 'POST' });
  };

  /**
   * 数据更新
   * @param params 待提交表单数据
   * @param originRow 数据库原始数据
   * @returns
   */
  update = async (
    params: PartialRequired<DataItem, 'id'>,
    originRow: any,
  ): Promise<Res.InsertUpdate<DataItem>> => {
    // params.datasourceId = originRow.id;
    this.format2service(params);

    return request(buildReqUrl('/public/datasource/update'), {
      method: 'POST',
      data: {
        ...params,
      },
    });
  };

  /** 分页查询 */
  queryPagination = async (
    params: Req.PageParams<Partial<DataItem>> & Record<string, any>,
  ): Promise<Res.ProTableData<DataItem>> => {
    return request<Res.DataListPage<DataItem>>(
      buildReqUrl(`/public/datasource/pagequery/${params.current}/${params.pageSize}`),
      {
        method: 'POST',
        data: params,
      },
    ).then((res) => {
      const newRes = {
        success: true,
        data: res.data?.records.map((item) => {
          return this.format2page(item);
        }),
        total: res.data.total,
      };

      return newRes;
    });
  };

  queryOne = async (params: RequireId): Promise<Res.DataOne<DataItem>> => {
    return request(buildReqUrl(`/public/datasource/queryById/${params.id}`), {
      params,
    });
  };
}

export default BaseReqCurd;
