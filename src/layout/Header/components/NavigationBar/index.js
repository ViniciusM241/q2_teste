import React from "react";
import { Inline } from "~/components";
import { NavigationBarContainer, MenuContainer, StyledLink } from './styles';
import { useLocation } from 'react-router-dom';
import menus from "../../menus";

function Menu(props) {
  const location = useLocation();

  return (
    <MenuContainer active={props.path === location.pathname}>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </MenuContainer>
  );
}

function NavigationBar() {
  return (
    <Inline style={{ height: '100%' }}>
      <NavigationBarContainer>
        {
          menus.map((menu, index) => (
            <Menu key={index} {...menu}>{menu.name}</Menu>
          ))
        }
      </NavigationBarContainer>
    </Inline>
  );
}

export default NavigationBar;
