import styled from "styled-components";
import colors from "~/utils/colors";
import { Link } from "react-router-dom";

export const NavigationBarContainer = styled.div`
  width: 100%;
  height: 80%;
  align-self: end;
  display: flex;

  position: relative;

  &::after {
    content: '';
    height: 5px;
    width: 100%;
    background-color: ${colors.BLUE};
    border-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`;

export const MenuContainer = styled.div`
  width: fit-content;
  min-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 20px 15px;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background-color: ${props => props.active ? colors.BLUE : 'transparent'};
`;

export const StyledLink = styled(Link)`
  color: ${colors.WHITE};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
