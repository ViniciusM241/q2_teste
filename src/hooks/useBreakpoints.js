import { useEffect, useState, useCallback } from 'react';
import breakpointsSet from '~/utils/breakpoints';
import useWindowSize from './useWindowSize';

function useBreakpoints() {
  const windowSize = useWindowSize();

  const getBreakpointsObject = useCallback(() => {
    return {
      xs: windowSize.width <= breakpointsSet.sm,
      sm: windowSize.width >= breakpointsSet.sm && windowSize.width < breakpointsSet.md,
      md: windowSize.width >= breakpointsSet.md && windowSize.width < breakpointsSet.lg,
      lg: windowSize.width >= breakpointsSet.lg && windowSize.width < breakpointsSet.xlg,
      xlg: windowSize.width >= breakpointsSet.xlg,
    };
  }, [breakpointsSet, windowSize.width]);

  const [breakpoints, setBreakpoints] = useState(getBreakpointsObject());

  useEffect(() => {
    setBreakpoints(getBreakpointsObject());
  }, [windowSize, getBreakpointsObject]);

  return breakpoints;
}

export default useBreakpoints;
