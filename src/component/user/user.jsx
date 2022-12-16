import styled from 'styled-components'
import Chart from '../charts/charts.jsx'

const User = ( props ) => {
  console.log(props)
  const {user} = props
  return (
    <Wrapper>
      <div>
        <div>{user.id.videoId}</div>
        <div>Subscribers</div>
        <div>Views (30d)</div>
        <div style={{width: 70, display: 'flex', justifyContent: 'center'}}><Chart  /></div>
        <div>Total Views</div>
        <div>Category</div>
        <div>Link</div>
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
    margin-right: 3rem;
  }
`
