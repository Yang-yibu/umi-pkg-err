import CusInput, { CusSearchLabel } from '@/components/cusBasic/input';
import SvgIcon from '@/components/SvgIcon';
import { Form, Space, Switch } from 'antd';
import React, { useState } from 'react';

const IptCtn: React.FC<{ title: string; children: React.ReactNode }> = function (props) {
  return (
    <Space>
      <div style={{ width: 150 }}>{props.title}</div>
      <Space wrap>{props.children}</Space>
    </Space>
  );
};

/**
 * 所有搜索项表单的 Icon
 */
const IptIcons = function () {
  const [debug, setDebug] = useState<boolean>(false);

  return (
    <Form>
      <Space size={16} direction="vertical" className={debug ? 'debugColor' : ''}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Switch checked={debug} onClick={() => setDebug(!debug)} />
          <span>查看 Icon 颜色是否正确</span>
        </div>
        <IptCtn title="搜索类">
          <CusSearchLabel label="单位名称" />
          <CusInput label="单位名称" prefixIcon={<SvgIcon name="search" />} allowClear />
        </IptCtn>
        <IptCtn title="类型类">
          <CusInput label="公告类型" prefixIcon={<SvgIcon name="typeGg" />} allowClear />
          <CusInput label="任务类型" prefixIcon={<SvgIcon name="typeRw" />} allowClear />
          <CusInput label="操作类型" prefixIcon={<SvgIcon name="typeCz" />} allowClear />
          <CusInput label="单据类型" prefixIcon={<SvgIcon name="typeDj" />} allowClear />
          <CusInput label="业务类型" prefixIcon={<SvgIcon name="typeYw" />} allowClear />
          <CusInput label="字典类型" prefixIcon={<SvgIcon name="typeZd" />} allowClear />
          <CusInput label="数据类型" prefixIcon={<SvgIcon name="typeSj" />} allowClear />
          <CusInput label="资产类型" prefixIcon={<SvgIcon name="typeZc" />} allowClear />
        </IptCtn>
        <IptCtn title="单位类">
          <CusInput label="单位类型" prefixIcon={<SvgIcon name="unit" />} allowClear />
        </IptCtn>
        <IptCtn title="状态类">
          <CusInput label="状态类型" prefixIcon={<SvgIcon name="status" />} allowClear />
        </IptCtn>
        <IptCtn title="时间类">
          <CusInput label="开始时间类型" prefixIcon={<SvgIcon name="time" />} allowClear />
          <CusInput label="结束时间类型" prefixIcon={<SvgIcon name="time" />} allowClear />
        </IptCtn>
        <IptCtn title="判断类">
          <CusInput label="判断类型" prefixIcon={<SvgIcon name="xz" />} allowClear />
        </IptCtn>
        <IptCtn title="用户类">
          <CusInput label="用户账号" prefixIcon={<SvgIcon name="userZh" />} allowClear />
          <CusInput label="用户角色" prefixIcon={<SvgIcon name="userJs" />} allowClear />
          <CusInput label="登录人" prefixIcon={<SvgIcon name="user" />} allowClear />
        </IptCtn>
        <IptCtn title="其他">
          <CusInput label="取得方式" prefixIcon={<SvgIcon name="otherQd" />} allowClear />
          <CusInput label="新旧程度" prefixIcon={<SvgIcon name="otherXj" />} allowClear />
          <CusInput label="出租方式" prefixIcon={<SvgIcon name="otherCz" />} allowClear />
          <CusInput label="风险等级" prefixIcon={<SvgIcon name="otherFx" />} allowClear />
          <CusInput label="单位会计科目" prefixIcon={<SvgIcon name="otherKm" />} allowClear />
          <CusInput label="资产用途" prefixIcon={<SvgIcon name="otherZcyt" />} allowClear />
          <CusInput label="资产原值" prefixIcon={<SvgIcon name="otherZcyz" />} allowClear />
          <CusInput label="系统模块" prefixIcon={<SvgIcon name="otherXt" />} allowClear />
          <CusInput label="月活" prefixIcon={<SvgIcon name="otherYh" />} allowClear />
          <CusInput label="单位" prefixIcon={<SvgIcon name="otherDw" />} allowClear />
          <CusInput label="物流公司" prefixIcon={<SvgIcon name="otherWl" />} allowClear />
          <CusInput label="规格型号" prefixIcon={<SvgIcon name="otherGg" />} allowClear />
          <CusInput label="所属仓库" prefixIcon={<SvgIcon name="otherCk" />} allowClear />
          <CusInput label="资产数量" prefixIcon={<SvgIcon name="otherZcsl" />} allowClear />
        </IptCtn>
      </Space>
    </Form>
  );
};

export default IptIcons;
