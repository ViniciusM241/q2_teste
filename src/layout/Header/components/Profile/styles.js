import styled from "styled-components";
import colors from "~/utils/colors";

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
