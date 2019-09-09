import React from 'react';
import styled , { createGlobalStyle } from "styled-components"

import './App.css';

createGlobalStyle`
  body{
    padding:0;
    margi:0;
  }
`

function App() {
  return (
    <div className="App">
      <Button color="blue">hello world!</Button>
      <ErrorButton>error</ErrorButton>
    </div>
  );
}


const Button = styled.button`
  all:unset;
  border-radius : 10px;
  width:100px;
  height:30px;
  border:1px solid black;
  text-align : center;
  background-color:${props => props.color};
`

const ErrorButton = styled(Button)`
  background-color:red;
  font-weight:600;
`

export default App;
