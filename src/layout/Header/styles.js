import styled from "styled-components";
import colors from "~/utils/colors";
import logo from "~/assets/q2_image.png";

export const StyledContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${colors.LIGHT_BLUE};
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  height: 60%;
`;
