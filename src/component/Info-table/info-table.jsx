import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { categoriesId } from '../../utils/constants';
import { fetchSearchAPI } from '../../utils/fetchSearchAPI';

const InfoTable = () => {
        const[items, setItems] = useState([]);
        async function fetchData()  {
            let data;
            data = await fetchSearchAPI(`videos?part=contentDetails,id,snippet,statistics&chart=mostPopular&order=viewCount&videoCategoryId=28&maxResults=10`)
            const videos = data.items;
            setItems(videos)
        }
        useEffect(() => {
            fetchData();
        },[])
        
        return (
            <Wrapper>
            <InfoContainer>
                <Title>Trending Channels</Title>
                <Items>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Latest Video Views</th>
                </tr>
                
                {
                items.slice(0,10).map(item => {
                    const snippet = item.snippet
                    const statistics  = item.statistics
                    const { thumbnails, channelTitle, categoryId, channelId } = snippet
                    const { viewCount } = statistics
                    const obj = categoriesId.find(o => o.id === String(categoryId));
                    const channelUrl = `https://www.youtube.com/channel/${channelId}`;
                    const category = obj.snippet.title
                    return (
                    <tr onClick={()=> {window.open(channelUrl, "_blank")}}>
                        <td style = {{maxWidth: 160}}>
                            <div className='box'>
                                <img className='channelIcon' src={ thumbnails.default.url } alt="icon"></img> 
                                <span className='span-box'>{ channelTitle }</span>
                            </div>
                        </td>
                        <td style = {{maxWidth: 100}}>{ category }</td>
                        <td style = {{maxWidth: 70}}>{ numberWithCommas(viewCount)}</td>
                    </tr>
                )})
                }
                </Items>
            </InfoContainer>
            <Divider/>
            </Wrapper>
        )
    }   

export default InfoTable;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Wrapper = styled.div`
`

const InfoContainer = styled.div`
  margin-top: 1.5rem;
  margin-left: 40px;
  margin-bottom: 30px;
`
const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`

const Items = styled.table`
  padding-top: 0.5rem;
  width: 100%;
  border-collapse: collapse;
  & > tr th:not(:first-child){
      padding: 10px 10px;
  },
  & > tr th{
      text-align: left;
  },
  & > tr td:not(:first-child){
      padding: 15px 10px;
      font-size: 1rem;
    },
  & > tr:hover {
        cursor: pointer;
  }
`
const Divider = styled.div`
    margin-top: 2rem;
`