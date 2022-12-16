import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const BasicPagination = ( props ) => {
  return (
      <Pagination sx = {{display: 'flex', justifyContent: 'center'}} count={10} color="primary" />
  );
}

export default BasicPagination;