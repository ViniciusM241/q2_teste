import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import colors from '~/utils/colors';
import {
  T3,
} from '~/components';
import { ProfileContainer, MenuContainer, Wrapper, MenuItem } from './styles';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '~/boot/auth';
import useOutsideClick from '~/hooks/useOutsideClick';

function Profile() {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpened(false));

  const user = useSelector(state => state.login.user);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Wrapper ref={wrapperRef}>
      <ProfileContainer onClick={() => setIsOpened(!isOpened)}>
        <T3 style={{ color: colors.WHITE }}> {user.name} </T3>
      </ProfileContainer>
      {
        isOpened && (
          <MenuContainer>
            <MenuItem
              onClick={() => {
                removeToken();
                navigate('/login');
              }}
            >
              <LogoutOutlined className="mr-10" />
              Sair
            </MenuItem>
          </MenuContainer>
        )
      }
    </Wrapper>
  );
}

export default Profile;
