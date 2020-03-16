import React from 'react';

// import axios from 'axios';
import Container from '@material-ui/core/Container';

import Header from './header/Header';

function Landing() {
  // axios
  //   .get('/api/home/')
  //   .then(response => {
  //     alert(JSON.stringify(response.data))
  //   })
  return (
    <Container disableGutters maxWidth='false'>
      <Header />
    </Container>
  )
}

export default Landing;
