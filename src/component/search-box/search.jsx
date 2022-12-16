import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material';
import { useContext } from 'react';
import { SearchContext } from './search-context';

export default function Asynchronous() {
    const [value, setValue] = React.useState("");
    const [options] = React.useState([]);
    const { setSearchValue } = useContext(SearchContext);

    const handleChange = async () => {
      setSearchValue(value)
    }
    
    return (
      <Autocomplete
        id="free-solo-demo"
        freeSolo={true}
        sx={{ width: 400, height: 50 }}
        options={options.map((option) => option.title)}
        renderOption={(props, option) => (
        <div {...props}>
        <img alt="logo" src={process.env.PUBLIC_URL + "2018_social_media.png"} 
        style={{ height: "20px", width: "20px", marginRight: "10px" }}/>
        {option.title}
        </div>
    )}
        renderInput={(params) => (
        <Search ref={params.InputProps.ref} >
           <InputBase sx={{ width: 400, height: 50 }} 
           inputProps={params.inputProps}
             />
           <SearchIcon sx = {{color: "black", '&:hover': {
          cursor: 'pointer'
          }}} 
          onClick= {handleChange}
          />
        </Search> 
        )}
        onChange= {handleChange}
        onInputChange = {(event) => setValue(event.target.value)}
      />
    );
  }

  const Search = styled("div")(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "0 13px",
    width: "100%",
    height: "100%",
    border: "1px solid gray",
}));