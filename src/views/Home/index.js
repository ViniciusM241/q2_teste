import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers, getTotalCustomers } from './store/actions';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import {
  Col,
  Container,
  Row,
  T1,
  Table,
} from '~/components';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector(state => state.customers.customers);
  const totalCustomers = useSelector(state => state.customers.total);
  console.log(totalCustomers)
  const [filters, setFilters] = useState('');

  const columns = useMemo(() => [
    {
      label: 'Data',
      accessor: 'createdAt',
      value: (original, row) => {
        const formatted = moment(row).format('DD/MM/yyyy');
        return formatted;
      },
    },
    {
      label: 'Nome',
      accessor: 'name',
    },
    {
      label: 'Documento',
      accessor: 'document',
    },
  ], [moment]);

  const onClickRow = useCallback((original, row) => {
    const id = row.id;
    const url = `/home/clientes/${id}/dados`;

    return navigate(url);
  }, [navigate]);

  const onFetchData = ({ order, pageIndex, maxPage }) => {
    const query = [];

    query.push(`_start=${pageIndex * maxPage}&_limit=${maxPage}`);

    if (order)
      query.push(`_sort=${order.accessor}&_order=${order.asc ? 'asc' : 'desc'}`);

    setFilters(query.join('&'));
  };

  useEffect(() => {
    dispatch(getTotalCustomers());
  }, []);

  useEffect(() => {
    dispatch(getCustomers(filters));
  }, [filters]);

  return (
    <Container>
      <Row>
        <Col cols={12}>
          <T1> Contas bancárias </T1>
        </Col>
      </Row>
      <Row>
        <p
          className='mt-20 mb-10'
          style={{
            fontWeight: 300,
            fontSize: '.8rem',
          }}
        >
          {totalCustomers}
          {` registro${totalCustomers > 1 || !totalCustomers ? 's' : ''}`}
        </p>
      </Row>
      <Row>
        <Table
          data={customers}
          columns={columns}
          onClickRow={onClickRow}
          onFetchData={onFetchData}
          maxPage={5}
          total={totalCustomers}
        />
      </Row>
    </Container>
  );
}

export default Home;
