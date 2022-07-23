import React from 'react';
import { useSelector } from 'react-redux';
import colors from '~/utils/colors';
import {
  T3,
} from '~/components';
import { ProfileContainer } from './styles';

function Profile() {
  const user = useSelector(state => state.login.user);

  return (
    <ProfileContainer>
      <T3 style={{ color: colors.WHITE }}> {user.name} </T3>
    </ProfileContainer>
  );
}

export default Profile;
