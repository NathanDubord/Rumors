import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './Header.scss';
import logo from '../../../assets/images/logo.png';

function Header() {
  return (
    <Toolbar className="header-toolbar">
			<img src={logo} className="header-toolbar-logo" alt="logo" />
      <Button variant="outlined">
				Sign up
			</Button>
    </Toolbar>
  )
}

export default Header;
