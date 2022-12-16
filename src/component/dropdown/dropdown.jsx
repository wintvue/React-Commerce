import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const Dropdown = ({ setSortValue }) => {
  return (
    <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Sort By 
        </InputLabel>
        <NativeSelect
            defaultValue={10}
            inputProps={{
            name: 'sort',
            id: 'uncontrolled-native',
            }}
            sx={{height:30,
                fontFamily: 'Roboto, Arial, sans-serif',
            }}
            onChange = { async (event) => {setSortValue(event.target.value)}}
        >
            <option value={10}>Default</option>
            <option value={20}>Video Count</option>
            <option value={30}>Views</option>
            <option value={40}>Subcribers</option>
            <option value={50}>Name</option>
            
        </NativeSelect>
    </FormControl>
  )
}
