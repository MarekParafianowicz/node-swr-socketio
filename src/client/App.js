import React, { Component } from 'react';
import styled from 'styled-components';
import Chat from './Chat';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;
// const AppContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   font-size: 40px;
//   background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
// `;

const App = () => {
  return (
    <AppContainer>
      <h1> Chat test </h1>
      <Chat/>
    </AppContainer>
  )
}

export default App;
