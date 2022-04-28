import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Newsletter = () => {
  return (
    <Container>
      <Typography variant='body1' component='p'>
        h1. Heading
      </Typography>
      <Typography variant='subtitle1' component='p'>
        h1. Heading
      </Typography>
      <TextField id='outlined-basic' label='Email' variant='outlined' />
      <Button variant='outlined'>Outlined</Button>
    </Container>
  );
};

export default Newsletter;
