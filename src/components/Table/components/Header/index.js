import React, { useState } from "react";
import { Thead, Tr, Th, StyledP } from './styles';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

function Header({ columns, setFilters }) {
  const [order, setOrder] = useState({
    accessor: columns[0].accessor,
    asc: true,
  });

  const handleChangeOrder = (accessor) => {
    let newOrder = {
      accessor: '',
      asc: false,
    };

    if (accessor === order.accessor) {
      if (order.asc) {
        newOrder = {
          ...order,
          asc: !order.asc,
        };
      }
    }
    else {
      newOrder = {
        accessor,
        asc: true,
      };
    }

    setOrder(newOrder);

    return setFilters(state => ({
      ...state,
      order: newOrder,
    }));
  };

  return (
    <Thead>
      <Tr>
        {
          columns.map((column, index) => (
            <Th
              key={index}
            >
              <StyledP
                onClick={() => handleChangeOrder(column.accessor)}
              >
                {column.label}
                {
                  order.accessor === column.accessor ?
                    !order.asc ?
                      <DownOutlined
                        className="ml-10"
                        style={{ fontSize: '.8rem' }}
                      />
                    :
                      <UpOutlined
                        className="ml-10"
                        style={{ fontSize: '.8rem' }}
                      />
                  : null
                }
              </StyledP>
            </Th>
          ))
        }
      </Tr>
    </Thead>
  );
}

export default Header;
