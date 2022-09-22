import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function BasicPagination() {
  return (
      <Pagination sx = {{display: 'flex', justifyContent: 'center'}} count={10} color="primary" />
  );
}

export default BasicPagination;