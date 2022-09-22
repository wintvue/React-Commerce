import { Component } from 'react';
import styled from 'styled-components'

class InfoTable extends Component{
    render(){
        return (
            <Wrapper>
            <InfoContainer>
                <div>New On</div>
                <Items>
                    <a href="/css/">
                        <Item>
                            <Logo>
                                hahaha
                            </Logo>
                            <span></span>
                            <Name>
                                hahaha
                            </Name>
                            <span></span>
                            <Views>
                                view
                            </Views>
                        </Item>
                    </a> 
                    <a href="/css/">
                        <Item>
                            <Logo>
                                hahaha
                            </Logo>
                            <span></span>
                            <Name>
                                hahaha
                            </Name>
                            <span></span>
                            <Views>
                                view
                            </Views>
                        </Item>
                    </a> 
                </Items>
            </InfoContainer>
            <Divider/>
            <InfoContainer>
                <div>New On</div>
                <Items>
                    <a href="/css/">
                        <Item>
                            <Logo>
                                hahaha
                            </Logo>
                            <span></span>
                            <Name>
                                hahaha
                            </Name>
                            <span></span>
                            <Views>
                                view
                            </Views>
                        </Item>
                    </a> 
                    <a href="/css/">
                        <Item>
                            <Logo>
                                hahaha
                            </Logo>
                            <span></span>
                            <Name>
                                hahaha
                            </Name>
                            <span></span>
                            <Views>
                                view
                            </Views>
                        </Item>
                    </a> 
                </Items>
            </InfoContainer>
            </Wrapper>
        )
    }   
}

export default InfoTable;

const Wrapper = styled.div`
  width: 28%;
`

const InfoContainer = styled.div`
  margin-top: 2rem;
  margin-left: 20px;
  ${'' /* flex-direction: column;
  justify-content: left; */}
`

const Items = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`

const Item = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  > div:not(:first-child){
    padding-left: 2rem;
  }
  width: 100%;
`


const Logo = styled.div`
`

const Name = styled.div`
`
const Views = styled.div`
`
const Divider = styled.div`
    margin-top: 2rem;
  border-bottom: 1px solid #eceff1;
`