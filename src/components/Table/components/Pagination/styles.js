import styled from "styled-components";
import colors from "~/utils/colors";

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  border: 3px solid ${props => props.active ? colors.LIGHT_BLUE : colors.LIGHT_BLUE_30};

  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  background-color: ${props => props.active ? colors.LIGHT_BLUE : 'transparent'};
  color: ${props => props.active ? colors.WHITE : colors.TEXT};
  transition: all .2s ease;

  &:hover {
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    border-color: ${colors.LIGHT_BLUE_30};
  }
`;
