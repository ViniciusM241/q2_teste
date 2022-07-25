import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getToken } from "~/boot/auth";
import { getUserByToken } from "~/views/Login/store/actions";
import useBreakpoints from "~/hooks/useBreakpoints";
import {
  Container,
  Col,
  Inline,
} from "~/components";
import {
  StyledContainer,
  Logo,
} from './styles';
import { BarsOutlined } from '@ant-design/icons';
import NavigationBar from './components/NavigationBar';
import MobileNavBar from './components/MobileNavBar';
import Profile from './components/Profile';
import colors from "~/utils/colors";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const breakpoints = useBreakpoints();

  const [navBarOpened, setNavBarOpened] = useState(false);

  useEffect(() => {
    const token = getToken();
    dispatch(getUserByToken(token));
  }, [getToken]);

  if (location.pathname !== '/login') {
    return (
      <StyledContainer className="mb-40">
        <Container>
          <Col cols={2}>
            <Logo />
          </Col>
          {
            !breakpoints.xs && (
              <>
                <Col cols={8}>
                  <NavigationBar />
                </Col>
                <Col cols={2}>
                  <Profile />
                </Col>
              </>
            )
          }
          {
            breakpoints.xs && (
              <Col cols={10}>
                <Inline right>
                  <BarsOutlined
                    style={{
                      color: colors.WHITE,
                      fontSize: '2rem',
                    }}
                    onClick={() => setNavBarOpened(!navBarOpened)}
                  />
                </Inline>
              </Col>
            )
          }
        </Container>
        {
          breakpoints.xs && navBarOpened && (
            <MobileNavBar opened={navBarOpened} toggle={setNavBarOpened} />
          )
        }
      </StyledContainer>
    );
  }
  else {
    return null;
  }
}

export default Header;
