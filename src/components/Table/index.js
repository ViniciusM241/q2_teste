import React, { useEffect, useState } from "react";
import { Container, StyledTable, Rows } from './styles';

import Header from './components/Header';
import Row from './components/Row';
import Pagination from './components/Pagination';

function Table({
  data,
  columns,
  onClickRow,
  onFetchData,
  maxPage=5,
  total,
}) {
  const [filters, setFilters] = useState({
    pageIndex: 0,
    maxPage,
    order: {
      accessor: columns[0].accessor,
      asc: true,
    }
  });

  useEffect(() => {
    onFetchData(filters);
  }, [filters]);

  return (
    <>
      <Container>
        <StyledTable>
          <Header
            columns={columns}
            setFilters={setFilters}
          />
          {
            !!data.length && (
              <Rows>
                {
                  data.slice(0, maxPage).map((row, index) => (
                    <Row
                      key={index}
                      data={data}
                      row={row}
                      columns={columns}
                      onClickRow={onClickRow}
                    />
                  ))
                }
              </Rows>
            )
          }
        </StyledTable>
      </Container>
      {
        !!total && (
          <Pagination
            maxPage={maxPage}
            setFilters={setFilters}
            pageIndex={filters.pageIndex}
            total={total}
          />
        )
      }
    </>
  );
}

export default Table;
