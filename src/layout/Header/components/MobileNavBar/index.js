import React from "react";
import { MobileNavBarContainer, Container, StyledLink, Item } from './styles';
import { CloseOutlined } from '@ant-design/icons';
import { Inline } from "~/components";
import colors from "~/utils/colors";
import menus from "../../menus";
import { useSelector } from 'react-redux';
import { removeToken } from '~/boot/auth';
import { useNavigate } from 'react-router-dom';

function MobileNavBar({
  opened,
  toggle,
}) {
  const navigate = useNavigate();

  const user = useSelector(state => state.login.user);

  return (
    <Container onClick={() => toggle(!opened)}>
      <MobileNavBarContainer>
        <Inline right>
          <div style={{ width: '100%' }}>
            <h3 style={{ color: colors.WHITE }}>{user.name}</h3>
          </div>
          <CloseOutlined
            style={{
              color: colors.WHITE,
              fontSize: '1.5rem',
            }}
            onClick={() => toggle(!opened)}
          />
        </Inline>
        {
          menus.map((menu, index) => (
            <Inline className="mt-40" key={index}>
              <StyledLink to={menu.to}>
                {menu.name}
              </StyledLink>
            </Inline>
          ))
        }
        <Item
          className="mt-40"
          onClick={() => {
            removeToken();
            navigate('/login');
          }}
        >
          Sair
        </Item>
      </MobileNavBarContainer>
    </Container>
  );
}

export default MobileNavBar;
