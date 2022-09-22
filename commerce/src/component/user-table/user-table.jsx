import React, { Component } from 'react';
import styled from 'styled-components'
import ButtonTable from '../button-table/button-table.jsx'; 
import User from '../user/user.jsx';
import InfoTable from '../Info-table/info-table.jsx';
import BasicPagination from '../pagination/pagination.jsx';

class UserTable extends Component{
    render(){
        const { users } =  this.props
        return(
        <Wrapper>
        <ContentWrapper>
          <Button>
            <ButtonTable/>
          </Button>
          <PortfolioTable>
            <TableItem>
              <Title>List Channels</Title>
            </TableItem>
            <Divider />
            <Table>
              <TableItem>
                <TableRow>
                  <div style={{ flex: 3 }}>Channel Name</div>
                  <div style={{ flex: 2 }}>Subscribers</div>
                  <div style={{ flex: 2 }}>Views (30d)</div>
                  <div style={{ flex: 3 }}>Average Video Views</div>
                  <div style={{ flex: 2 }}>Total Views</div>
                  <div style={{ flex: 2 }}>Category</div>
                  <div style={{ flex: 1 }}>Link</div>
                  {/* <div style={{ flex: 1, color: '#0a0b0d' }}> */}
                    {/* <BsThreeDotsVertical /> */}
                  {/* </div> */}
                </TableRow>
              </TableItem>
              <Divider />
              <div>
                {users.map(user => (
                  <div key={user.name}>
                    <User user = {user}/>
                  </div>
                ))}
              </div>
            </Table>
            <BasicPagination/>
          </PortfolioTable>
        </ContentWrapper>
          <InfoTable />
      </Wrapper>
      )
    }   
}

export default UserTable;

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  height: 100%;
  flex-direction: row;
  padding-left: 1rem;
  font-family:Roboto, Arial, sans-serif;
  border-top: 1px solid #eceff1;
  border-bottom: 1px solid #eceff1;
`
const ContentWrapper = styled.div`
  width: 70%;
  ${'' /* max-width: 1150px; */}
  border-right: 1px solid #eceff1;
  margin-left: 20px;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  flex-direction: column;
  justify-content: left;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const TableItem = styled.div`
  padding-top: 1rem ;
  padding-bottom: 1rem ;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`
const Button = styled.div`
  margin-top: 2rem;
`