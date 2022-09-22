import {Component} from 'react';
import React from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './routes/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    const users = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
      }]
    this.state = {
      users : users,
      searchString: ''
    }
  }

  componentDidMount(){
    this.setState(
      () => {
        return { };
      }
    )
  }

  render(){
    const filteredusers = this.state.users;
    return (
      <Routes>
        <Route path='/' element={<Home users = {filteredusers} />}/> 
      </Routes>
    )
  };
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`