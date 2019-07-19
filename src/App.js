import React from 'react';

import Header from './components/Header';

import Routes from './routes/routes';
import GlobalStyles from './styles/global';

const App = () => (
  <>
    <Header />
    <GlobalStyles />
    <Routes />
  </>
);

export default App;
