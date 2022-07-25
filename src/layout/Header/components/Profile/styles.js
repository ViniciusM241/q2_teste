import styled from "styled-components";
import colors from "~/utils/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 80%;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-bottom: 15px;

  position: relative;

  cursor: default;

  &::after {
    content: '';
    height: 5px;
    width: 100%;
    background-color: ${colors.BLUE};
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
`;

export const MenuContainer = styled.div`
  background-color: ${colors.BLUE};
  color: ${colors.WHITE};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  position: absolute;
  bottom: -80px;
  right: 0;

  width: 200px;
  min-height: 80px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 10px 5px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: ${colors.LIGHT_BLUE};
  }
`;
