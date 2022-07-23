import React, { useState, useEffect } from "react";
import { StyledCol } from './styles';
import useBreakpoints from "~/hooks/useBreakpoints";

function Col({ children, cols }) {
  const [columns, setColumns] = useState(cols);
  const breakpoints = useBreakpoints();

  useEffect(() => {
    let columnsQty = 12;

    if (breakpoints.xs) {
      columnsQty = 4;
    }

    if (breakpoints.sm) {
      columnsQty = 8;
    }

    const percent = cols / 12;
    const newColumns = Math.ceil(percent * columnsQty) || 0;

    setColumns(newColumns);
  }, [setColumns, cols, breakpoints]);

  return (
    <StyledCol
      cols={columns}
      breakpoints={breakpoints}
    >
      {children}
    </StyledCol>
  );
}

export default Col;
