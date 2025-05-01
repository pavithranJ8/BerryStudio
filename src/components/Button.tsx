// import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
       <Button variant="contained" 
       sx={{ 
        backgroundColor: '#171717',
        '&:hover': {
          backgroundColor: '#171717',
        },
        borderRadius: '35px',
      }}>
        Post Payment
      </Button>
  );
}