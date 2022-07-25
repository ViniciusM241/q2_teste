import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const MobileNavBarContainer = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${colors.LIGHT_BLUE};
  padding: 30px 20px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.WHITE};
  font-weight: 400;
  text-decoration: none;
`;

export const Item = styled.div`
  font-weight: 700;
  text-decoration: underline;

  color: ${colors.WHITE};
`;
