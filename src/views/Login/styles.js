import styled from "styled-components";
import colors from "~/utils/colors";
import background from "~/assets/svg_background.svg";
import logo from "~/assets/q2_image.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 480px;
  padding: 55px 40px 100px 40px;
  border-radius: 20px;
  border: 1px solid ${colors.LIGHT_BLUE};
  background-color: ${colors.WHITE};
`;

export const BlueBackground = styled.div`
  background-color: ${colors.LIGHT_BLUE};
  width: 50%;
  height: 60vh;
  min-height: 200px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const TextureBackground = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 50%;
  height: 50vh;
  min-height: 200px;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  position: absolute;
  top: 37px;
  left: 37px;
`;

export const Error = styled.p`
  font-size: .8rem;
  font-weight: 300;
`;
