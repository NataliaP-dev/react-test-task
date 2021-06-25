import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { Table } from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getCouncillorsRequest } from '../../state/actions/councillors';
import { getAllCouncillors } from '../../state/selectors/councillors';
import { Councillor } from '../../models';
const { TabPane } = Tabs;

const councillorsColumns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: '30%',
        filter: true,
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        width: '20%',
        filter: true,
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: '20%',
        filter: true,
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        width: '20%',
        filter: false,
    }
  ];

export const Entries = () => {
    const dispatch = useDispatch();

    const councillors: Councillor[] = useSelector(getAllCouncillors);

    useEffect(() => {
        dispatch(getCouncillorsRequest())
    }, []);

    return (
        <Tabs defaultActiveKey="1">
        <TabPane tab="Councillors" key="1">
            <Table columns={councillorsColumns} data={councillors} />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
        </TabPane>
        </Tabs>
    )
};

