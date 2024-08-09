import {useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Button, ButtonGroup, Container, Card, Chip, Typography, Stack, Divider, Skeleton, Grid } from '@mui/material'

function App() {
  return (
    <div> 
      <Navbar> 

      </Navbar>
      <Skeleton /> 

      <Grid
      container
      direction="column-reverse"
      justifyContent="space-evenly"
      alignItems="stretch"
      >
        <Skeleton display ="flex" variant="rectangular" height={100
        }  
        p={2}
          />
      </Grid>

    </div>


  );
}

export default App;
