import React, { useMemo } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Table as AntdTable, Input, Button, Space } from 'antd';

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    width?: string;
    filter?: boolean;
}

interface TableProps {
    data: any[],
    columns: TableColumn[];
}

const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={confirm}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: string, record: Record<string, string | number>) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });


export const Table = ({ data, columns }: TableProps) => {

    const rowData = useMemo(() => {
        return data.map((el, ind) => ({
            ...el,
            key: el.id || ind
        }))
    }, [data])

    const tableColumns = useMemo(() => {
        return columns.map(el => {
            if (el.filter) {
                return {
                    ...el,
                    ...getColumnSearchProps(el.dataIndex),
                    sorter: (a: any, b: any) => isNaN(a[el.dataIndex]) 
                        ? a[el.dataIndex].toString().localeCompare(b[el.dataIndex]) 
                        : a[el.dataIndex] - b[el.dataIndex],
                    sortDirections: ['descend', 'ascend'],
                }
            }
            return {
                ...el,
                sortDirections: [],
            };
        })
    }, [columns]);

      return <AntdTable columns={tableColumns as any} dataSource={rowData} />;

}
