import React from 'react';
import './App.css';

// Components
import { Title } from './components/Title/index';
import { Banner } from './components/Banner/Banner';
import { Button, ButtonTypeSecondary } from './components/Button/Index';

function App() {
  return (
    <>
      <Title />
      <Banner />
      <Button />
      <ButtonTypeSecondary type="red" />
      <ButtonTypeSecondary type="red" title="aaaaaaa" />
    </>
  );
}

export default App;
