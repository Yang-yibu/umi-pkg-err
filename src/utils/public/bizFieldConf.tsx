// 业务字段通用配置
import CusRangePicker from '@/components/cusBasic/datePicker/rangePicker';
import CusInput, { CusSearchLabel } from '@/components/cusBasic/input';
import CusSelect from '@/components/cusBasic/select';

import SvgIcon, { SvgIconProps } from '@/components/SvgIcon';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type {
  ProColumns,
  ProDescriptionsItemProps,
  ProFormColumnsType,
} from '@ant-design/pro-components';
import _ from 'lodash';

type ISearchInput = {
  type?: 'CusInput';
  /** 搜索项的 Icon */
  icon: SvgIconProps['name'];
  /** 自定义 label，默认 title */
  label?: React.ReactNode;
  placeholder?: string;
};
type ISearchSelect = {
  type?: 'CusSelect';
  /** 搜索项的 Icon */
  icon: SvgIconProps['name'];
  /** 自定义 label，默认 title */
  label?: React.ReactNode;
  /** 是否单选 */
  single?: boolean;
  placeholder?: string;
};
type ISearchDate = {
  type?: 'CusRangePicker';
  /** 日期类型默认是 `time` */
  icon?: SvgIconProps['name'];
  /** 自定义 label，默认 title */
  label?: React.ReactNode;
};
type ISearchLabel = {
  // CusSearchLabel
  type: 'CusSearchLabel';
  /** 自定义 label，默认 title */
  label?: React.ReactNode;
  placeholder?: string;
};

export interface IFieldBaseConfig<T> {
  /** 配置项说明，没有实际用处 */
  _conf_remark?: string;
  /** 显示文本 */
  title?: string;
  /**
   * 对应字段
   * - `keyof DataItem`
   */
  field: Extract<keyof T, string>;
  tooltip?: string;
  /**
   * 表单是否禁用
   * - 适用范围：详情表单
   */
  disabled?: boolean;
  /**
   * 表单是否只读，以文本方式显示值
   * - 对应表单项中的 readonly 属性
   * - 适用范围：表单字段
   */
  isView?: boolean;

  /**
   * 表格搜索组件配置
   * - 默认表单的 label 是通过 formItemProps.label 设置
   */
  searchConf?: ISearchInput | ISearchLabel | ISearchSelect | ISearchDate;
}

type IGetFieldReturnExtra = {
  /** 记录原本通用配置 */
  __origin: {
    /** 统一配置里的字段 */
    fieldKey: string;
    [key: string]: any;
  };
};
type IGetFormFieldReturn<R> = ProFormColumnsType<R, 'text'>;
type IGetFormFieldReturnExtra<R> = ProFormColumnsType<R, 'text'> & IGetFieldReturnExtra;
type IGetTableFieldReturn<R> = ProColumns<R, 'text'>;
type IGetTableFieldReturnExtra<R> = ProColumns<R, 'text'> | IGetFieldReturnExtra;
type IGetDescFieldReturn<R> = ProDescriptionsItemProps<R, 'text'>;
type IGetDescFieldReturnExtra<R> = ProDescriptionsItemProps<R, 'text'> & IGetFieldReturnExtra;

type IFieldConf<T extends Record<string, any>> =
  | keyof T
  // 原来是 IFieldBaseConf
  | IFieldBaseConfig<T>
  | [keyof T, Partial<IFieldBaseConfig<T>>]
  | 'useOrigin';

/**
 * 根据业务模块所有字段配置，获取表单、表格的配置信息
 * - T 业务模块所有字段配置信息；如 `type IAllFields = { 字段标识: { title: '显示文字'; field: 'id' } }`
 * - R 业务模块对应记录信息（对应后端实体类）；如 `type DataItem = { id: string }`
 * - U 通用字段配置
 * - - `type IFieldBaseConf = IFieldBaseConfig<{id: string}>`
 * - - `type IFieldBaseConf = IFieldBaseConfig<DataItem>`
 */
export default class FieldConfig<T extends Record<string, U>, R, U extends IFieldBaseConfig<R>> {
  private AllFields?: T;
  constructor(allFields: T) {
    this.setAllFields(allFields);
  }
  setAllFields(allFields: T) {
    this.AllFields = allFields;
  }

  /** 获取字典自定义配置 */
  private buildFieldCusConf = (fieldConf: IFieldConf<T>): [U, keyof T] => {
    let c: U;

    let fcKey: keyof T = '';
    if (typeof fieldConf === 'string') {
      c = (this.AllFields as T)[fieldConf];

      fcKey = fieldConf;
    } else if (Array.isArray(fieldConf)) {
      const oc = (this.AllFields as T)[fieldConf[0]];
      fcKey = fieldConf[0];
      c = _.merge({}, oc, fieldConf[1]);
    } else {
      c = fieldConf as U;
    }
    return [c, fcKey];
  };
  /**
   * 生成表单配置
   * @param fieldConf 字段标识或字段配置
   * @param mergeConfig 表单自定义配置 - 优先使用第二个参数
   * @returns
   */
  getFormField = (
    fieldConf: IFieldConf<T>,
    // mergeConfig?: Omit<IGetFormFieldReturn<R>, '__origin'>,
    mergeConfig?: IGetFormFieldReturn<R>,
  ): IGetFormFieldReturn<R> => {
    if (fieldConf === 'useOrigin' && mergeConfig) {
      // return mergeConfig as IGetFormFieldReturn<R>;
      return mergeConfig;
    }

    const [c, fcKey] = this.buildFieldCusConf(fieldConf);

    // 將通用配置转化为表单支持项
    const c1: IGetFormFieldReturnExtra<R> = {
      __origin: { fieldKey: fcKey as string, ...c },
      title: c.title || c.field,
      dataIndex: c.field,
      tooltip: c.tooltip,
      readonly: c.isView,
      fieldProps: { disabled: c.disabled },
    };

    return _.merge(c1, mergeConfig);
  };

  /**
   * 生成表格配置
   * @param fieldConf 字段标识或字段配置 OR useOrigin 使用本来的参数
   * @param mergeConfig 表单自定义配置 - 优先使用第二个参数
   * @returns
   *
   * @example
   * const config = [
	  // 使用统一配置
	  getFieldRow('数据源名称'),
	  // 在统一配置基础上，覆盖默认配置
	  getFieldRow(['数据源类型', { tooltip: '类型提示信息' }]),
	  // 按统一配置格式，自定义配置
	  getFieldRow({ title: '数据源 IP', field: 'datasourceIp' }),
	  // 使用组件配置格式，自定义配置或覆盖默认配置
	  getFieldRow('数据库名', { renderText: (val: string) => `${val}${'万'}` }),
	  // 完全使用组件配置格式
	  getFieldRow('useOrigin', { title: '提示信息', dataIndex: '' }),
	]
   */
  getTableField = (
    fieldConf: IFieldConf<T>,
    // mergeConfig?: Omit<IGetTableFieldReturn<R>, '__origin'>,
    mergeConfig?: IGetTableFieldReturn<R>,
  ): IGetTableFieldReturn<R> => {
    if (fieldConf === 'useOrigin' && mergeConfig) {
      // return mergeConfig as IGetTableFieldReturn<R>;
      return mergeConfig;
    }

    const [c, fcKey] = this.buildFieldCusConf(fieldConf);

    // 將通用配置转化为表格支持项
    const c1: IGetTableFieldReturnExtra<R> = {
      __origin: { fieldKey: fcKey as string, ...c },
      title: c.title || c.field,
      dataIndex: c.field,
      tooltip: c.tooltip && { icon: <QuestionCircleOutlined />, title: c.tooltip },
    };

    const searchConf = c.searchConf;
    let searchForm: typeof mergeConfig = {};
    if (searchConf) {
      searchForm = {
        formItemProps: { label: false },
        renderFormItem: (schema, config) => {
          const iptLabel = searchConf.label || schema.title;
          if (searchConf.type === 'CusSearchLabel') {
            return (
              <CusSearchLabel
                label={iptLabel as any}
                placeholder={searchConf.placeholder}
                allowClear
              />
            );
          }

          const icon = searchConf.icon ? <SvgIcon name={searchConf.icon} /> : null;
          if (searchConf.type === 'CusSelect' || schema.valueType === 'select') {
            const sc = searchConf as ISearchSelect;
            return (
              <CusSelect
                prefixIcon={icon}
                label={iptLabel}
                placeholder={sc.placeholder}
                mode={sc.single ? undefined : 'multiple'}
                showTagNum
                allowClear
                options={(config as any)?.options}
                style={(config as any).style}
              />
            );
          }
          if (
            searchConf.type === 'CusRangePicker' ||
            schema.valueType === 'dateTime' ||
            schema.valueType === 'date'
          ) {
            const iconDate = <SvgIcon name="time" />;

            // TODO: 设置日期默认 Icon
            return (
              <CusRangePicker
                prefixIcon={searchConf.icon ? icon : iconDate}
                label={iptLabel}
                allowClear
              />
            );
          }
          return (
            <CusInput
              prefixIcon={icon}
              label={iptLabel}
              allowClear
              placeholder={(searchConf as any).placeholder}
            />
          );
        },
      };
    }

    return _.merge(c1, searchForm, mergeConfig);
  };

  getDescField = (
    fieldConf: IFieldConf<T>,
    // mergeConfig?: Omit<IGetDescFieldReturn<R>, '__origin'>,
    mergeConfig?: IGetDescFieldReturn<R>,
  ): IGetDescFieldReturn<R> => {
    if (fieldConf === 'useOrigin' && mergeConfig) {
      // return mergeConfig as IGetDescFieldReturn<R>;
      return mergeConfig;
    }

    const [c, fcKey] = this.buildFieldCusConf(fieldConf);

    // 將通用配置转化为表格支持项
    const c1: IGetDescFieldReturnExtra<R> = {
      __origin: { fieldKey: fcKey as string, ...c },
      title: c.title || c.field,
      dataIndex: c.field,
      tooltip: c.tooltip,
    };

    return _.merge(c1, mergeConfig);
  };
}
