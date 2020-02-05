import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1:0,
      num2:0,
      result:0
    }
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
  
}
export default App;
