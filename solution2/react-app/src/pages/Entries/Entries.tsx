import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { Table } from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Affrair, Council, Councillor } from '../../models';
import { affrairsColumns, councilColumns, councillorsColumns } from './constants';
import { getAllAffrairs, getAllCouncillors, getAllCouncils } from '../../state/selectors';
import { getAffrairsRequest, getCouncillorsRequest, getCouncilRequest } from '../../state/actions';
import css from './Entries.module.scss';

const { TabPane } = Tabs;

export const Entries = () => {
    const dispatch = useDispatch();

    const councillors: Councillor[] = useSelector(getAllCouncillors);
    const councils: Council[] = useSelector(getAllCouncils);
    const affrairs: Affrair[] = useSelector(getAllAffrairs);

    useEffect(() => {
        dispatch(getCouncillorsRequest());
        dispatch(getCouncilRequest());
        dispatch(getAffrairsRequest());
    }, []);

    return (
        <section className={css.wrapper}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Councillors" key="1">
                    <Table columns={councillorsColumns} data={councillors} />
                </TabPane>
                <TabPane tab="Councils" key="2">
                    <Table columns={councilColumns} data={councils} />
                </TabPane>
                <TabPane tab="Affrairs" key="3">
                    <Table columns={affrairsColumns} data={affrairs} />
                </TabPane>
            </Tabs>
        </section>
    )
};

