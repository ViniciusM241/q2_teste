import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledInput = styled.input`
  display: block;
  padding: 10px 7px;
  width: 100%;
  margin-top: 5px;

  border-radius: 5px;
  border: 3px solid ${colors.LIGHT_BLUE_30};
  outline: none;

  &:focus {
    border: 3px solid ${colors.LIGHT_BLUE};
  }
`;

export const StyledLabel = styled.label`
`;
