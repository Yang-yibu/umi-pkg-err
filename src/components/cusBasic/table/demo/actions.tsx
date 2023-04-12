import { message, Table } from 'antd';
import CusTableActions from '../actions';

export default function () {
  return (
    <>
      <Table
        rowKey="f1"
        scroll={{ x: 1000 }}
        dataSource={[
          { f1: 1, f2: '第一行数据' },
          { f1: 2, f2: '第二行数据' },
          { f1: 3, f2: '更多操作', isMore: true },
        ]}
        columns={[
          { dataIndex: 'f1', title: '列 1' },
          { dataIndex: 'f2', title: '列 2' },
          { dataIndex: 'f3', title: '列 3' },
          {
            dataIndex: 'operate',
            title: '操作列',
            width: '100',
            fixed: 'right',
            render: (val, record, index) => {
              let more: any[] = [];
              if (record.isMore) {
                more = [
                  {
                    isMore: true,
                    field: 'del1',
                    label: '删除有确认',
                    theme: 'error',
                    sureTitle: '确认删除此项？',
                  },
                  { isMore: true, field: 'del2', label: '删除无确认' },
                ];
              }
              return (
                <CusTableActions
                  btns={[
                    {
                      field: '1',
                      label: '详情',
                      onClick: () => {
                        // console.log(val, record, index);
                        message.success('列2数据是：' + record.f2);
                      },
                    },
                    {
                      field: '2',
                      label: '编辑',
                      theme: 'primary',
                      onClick: () => {
                        message.success(`index：${index} 数据`);
                      },
                    },
                    { field: '3', label: '删除', theme: 'danger', sureTitle: '确认删除此项？' },

                    ...more,
                  ]}
                />
              );
            },
          },
        ]}
      />
    </>
  );
}
