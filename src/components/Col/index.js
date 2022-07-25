import React, { useEffect, useState } from "react";
import { StyledCol } from './styles';
import useBreakpoints from "~/hooks/useBreakpoints";

function Col({ children, cols, xs, ...props }) {
  const breakpoints = useBreakpoints();

  const [columns, setColumns] = useState(cols);

  useEffect(() => {
    if (breakpoints.xs && xs)
      return setColumns(xs);

    setColumns(cols);
  }, [cols, setColumns, breakpoints])

  return (
    <StyledCol
      cols={columns}
      {...props}
    >
      {children}
    </StyledCol>
  );
}

export default Col;
