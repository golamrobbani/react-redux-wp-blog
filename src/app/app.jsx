import React, { Fragment } from 'react';

import { Router, Link } from '@reach/router'

/* import FCounter from '../features/counter'
<FCounter/> */

const Home = () => {
  return (
    <h1>i am home</h1>
  )
}

function App() {
  return (
    <Fragment>

      <Router>
        <Home path="/" />
      </Router>
      
    </Fragment>
  );
}

export default App;
