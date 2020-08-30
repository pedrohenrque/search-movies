import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GolbalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GolbalStyle />
    </BrowserRouter>
  );
};

export default App;
