import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
// import Icon from 'react-crypto-icons'

const User = ({ user }) => {
  return (
    <Wrapper>
      <div>
        {/* <div style={{ flex: 3 }}>
           {user.name}
        </div>
        <div style={{ flex: 2 }}>
          <h6>adfafds</h6>
        </div>
        <div style={{ flex: 1 }}>
          <h6>adfafds</h6>
        </div>
        <div style={{ flex: 1 }}>
         <h6>adfafds</h6>
        </div>
        <div style={{ flex: 0 }}>
        <h6>adfafds</h6>
        </div> */}
        <div style={{ flex: 3 }}>Channel Name</div>
        <div style={{ flex: 2 }}>Subscribers</div>
        <div style={{ flex: 2 }}>Views (30d)</div>
        <div style={{ flex: 3 }}>Average Video Views</div>
        <div style={{ flex: 2 }}>Total Views</div>
        <div style={{ flex: 2 }}>Category</div>
        <div style={{ flex: 1 }}>Link</div>
      </div>
    </Wrapper>
  )
}

export default User

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem ;
    padding-bottom: 1rem ;
  }
`
