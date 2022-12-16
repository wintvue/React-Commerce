import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createStyles, makeStyles } from '@mui/styles';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchSearchAPI } from '../../utils/fetchSearchAPI';
import ButtonTable from '../button-table/button-table.jsx';
import Chart from '../charts/charts.jsx';
import { Dropdown } from '../dropdown/dropdown.jsx';
import InfoTable from '../Info-table/info-table.jsx';
import { SearchContext } from '../search-box/search-context.jsx';
import './user-table.styles.css';

const UserTable = () => {
      const [items, setItems] = useState([]); 
      const [page, setPage] = useState(1);
      const [token, setToken] = useState("");
      const [selectedCategory, setSelectedCategory] = useState('Coding');
      const [sortValue, setSortValue] = useState(10);
      const [itemsDefault, setItemsDefault] = useState([]); 
      const { searchValue ,setSearchValue } = useContext(SearchContext);

      const options = {
            10 : "Default",
            20 : "videoCount",
            30 : "viewCount",
            40 : "subscriberCount",
            50 : "title",
      }
      useEffect(() => {
        if( searchValue !== "") {
          if(selectedCategory === "1") {
            setSelectedCategory("0");
          } else {
            setSelectedCategory("1");
          }
        } 
      },[searchValue]);

      useEffect(() => {
        setPage(1);
        setToken("");
        
        let ids = "";
        var idsObj = {};

        async function fetchData2(searchValue)  {
          let data;

          if( searchValue !== "") {
            data = await fetchSearchAPI(`search?part=snippet&order=viewCount&regionCode=US&type=channel&q=${searchValue}&maxResults=10`)
            setSearchValue("");
          } else {
            data = await fetchSearchAPI(`search?part=snippet&order=viewCount&regionCode=US&type=video&q=${selectedCategory}&pageToken=${token}&maxResults=50`)
          }
          const videos = data.items;
          videos.forEach( v => {
            if(!(v.snippet.channelId in idsObj)) {
              idsObj[v.snippet.channelId] = 1;
              ids = ids.concat(`,${v.snippet.channelId}`);
            } 
          });
          ids = ids.substring(1, ids.length);
          const users = await fetchSearchAPI(`channels?part=brandingSettings,snippet,id,statistics,status,contentDetails&order=viewCount&id=${ids}`)
          return users
        }

        async function fetchDatas(){         
          const users = await fetchData2(searchValue);
          setItems([...users.items]);
          setItemsDefault([...items]);
        }
        fetchDatas();
      }, [selectedCategory]);

      useEffect(() => {
        const key = options[sortValue];  
        
        if (key === "title") {
          setItems([...items.sort((a,b) => (a.snippet[key] > b.snippet[key]) ? 1 : ((b.snippet[key] > a.snippet[key]) ? -1 : 0))]);
        } else if (key === "Default") {
          setItems([...itemsDefault])
        } else {
          setItems([...items.sort((a,b) => b.statistics[key] - a.statistics[key])]);
        }
        setPage(1);
      }, [sortValue]);
      
      const handleChange = (event, value) => {
        setPage(value);
      };
      const classes = useStyles();

      return(
      <>
      <Wrapper>
        <ContentWrapper>
          <FilterButton>
            <ButtonTable selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
          </FilterButton>
          <PortfolioTable>
            <TableItem>
              <Title>List Channels</Title>
              <Dropdown setSortValue = {setSortValue}/>
            </TableItem>
            <div>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Channel Name</th>
                      <th>Subscribers</th>
                      <th>Video Count</th>
                      <th>Chart</th>
                      <th>Total Views</th>
                      <th>Category</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    
                      items.slice(10 * (page - 1), 10 * page).map(item => {
                        const snip = item.snippet;
                        const stats = item.statistics;
                        const channelUrl = `https://www.youtube.com/channel/${item.id}`;
                        
                        return (
                          <tr key = {item.id}>
                            <td style = {{maxWidth: 150}}> 
                              <div className='box'>
                                <img className='channelIcon' src={ snip.thumbnails.default.url } alt="icon"></img> 
                                <span className='span-box'>{ snip.title }</span>
                              </div>
                            </td>
                            <td>{ numberWithCommas(stats.subscriberCount)  }</td>
                            <td>{ numberWithCommas(stats.videoCount) }</td>
                            <td style = {{height:7, display: 'flex', justifyContent: 'left'}}><Chart  /></td>
                            <td>{ numberWithCommas(stats.viewCount) }</td>
                            {
                              (selectedCategory === "1" || selectedCategory === "0" ) ? 
                              <td> 
                              </td>
                              : 
                              <td> 
                              {selectedCategory}
                              </td>
                            } 
                            <td>
                              <Button onClick={() => {window.open(channelUrl, "_blank")}} variant="contained" className = {classes.root}>Link</Button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </StyledTable>
            </div>
            <PaginationWrapper>
              <Pagination page = {page} onChange={ handleChange } sx = {{display: 'flex', justifyContent: 'center'}} count={Math.ceil(items.length / 10)} color="primary" />
            </PaginationWrapper>
          </PortfolioTable>
      </ContentWrapper>
      <InfoTable />
    </Wrapper>
    <div style ={{ color: 'white'}}> - </div>
    </>
    )
  } 
  
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default UserTable;

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  font-family:Roboto, Arial, sans-serif;
  border-top: 1px solid #eceff1;
  border-bottom: 1px solid #eceff1;
  max-width:80%
  @media (max-width: 800px) {
    flex-direction: column-reverse;
}
`

const ContentWrapper = styled.div`
  border-right: 1px solid #eceff1;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
`

const TableItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem ;
  padding-bottom: 1rem ;
  margin-right: 3rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`
const FilterButton = styled.div`
  margin-top: 2rem;
`
const PaginationWrapper = styled(Stack)({
  marginTop : 10,
  marginBottom : 20
});

const StyledTable = styled.table`
    border-collapse: collapse;
    font-family:Roboto, Arial, sans-serif;
    table-layout: fixed;
    word-break: break-word;
    & > thead tr{
      border-top: 1px solid;
      text-align: left;
      font-weight: bold;
      font-size: 1.0rem;
      font-family:Roboto, Arial, sans-serif;
      border-bottom: 1px solid;
    },
    & > thead tr th:not(:first-child){
      padding: 20px 35px;
    },
    & > tbody tr td:not(:first-child){
      padding: 20px 35px;
      font-size: 1rem;
    },
`

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            background: 'linear-gradient(45deg, #f81d1d 0%, #f81d1d 100%)',
        }
    })
    );
