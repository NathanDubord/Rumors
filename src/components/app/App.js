import React from 'react';

import axios from 'axios';
import Button from '@material-ui/core/Button';

import './App.scss';

function App() {
  axios
    .get('/api/home/')
    .then(response => {
      alert(JSON.stringify(response.data))
    })
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  )
}

export default App;
