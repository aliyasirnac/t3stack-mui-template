import { Container, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    
    <Container sx={{ backgroundColor: "tomato", padding: 1, width: { xs: "100%", md: "50%" }, }}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component="h1"
        color="white"
      >
        Hello World
      </Typography>
    </Container>
  );
}

export default Home