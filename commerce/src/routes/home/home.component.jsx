import {Component} from 'react';
import React from 'react';
import './App.css';
import UserTable from '../../component/user-table/user-table.jsx'; 
import Asynchronous from '../../component/search-box/search';
import styled from 'styled-components'
import Navbar from '../../component/navbar/navbar.jsx';


class App extends Component {
  render(){
    const { users } = this.props;
    return (
      <div>
      <Navbar/>
        <Wrapper>
          <div>
            <h3>Explore Youtube Channels</h3>
          </div>
          <Asynchronous/>
        </Wrapper>
        <UserTable users  = {users}/>
      </div>
    );
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