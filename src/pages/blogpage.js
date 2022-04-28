import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Article from '../components/Article';
import Newsletter from '../components/Newsletter';
import { Container } from '@mui/material';

const Blogpage = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Article />
        </Grid>
        <Grid item xs={3}>
          <Newsletter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blogpage;
