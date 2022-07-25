import styled from "styled-components";

export const StyledInline = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: ${props => {
    if (props.right) return 'flex-end';
    if (props.center) return 'center';
    return 'flex-start'
  }};
`;
