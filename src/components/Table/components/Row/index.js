import React from "react";
import { Tr, Td } from './styles';

function Row({
  data,
  row,
  columns,
  onClickRow,
}) {
  return (
    <Tr>
      {
        columns.map((column, index) => (
          <Td
            key={index}
            onClick={() => onClickRow(data, row)}
          >
            {
              column.value && typeof column.value === 'function' ?
                column.value(data, row[column.accessor])
              :
                row[column.accessor] || ''
            }
          </Td>
        ))
      }
    </Tr>
  );
}

export default Row;
