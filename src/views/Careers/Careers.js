import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';

import { Hero, Jobs, Newsletter } from './components';

const Careers = () => {
  const theme = useTheme();
  return (
    <Main>
      
      
      <Box background={theme.palette.background.white}>
        <Hero />
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
            bgcolor:theme.palette.background.paper,
          }}
        >
          <path
            fill={theme.palette.background.white}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            
          ></path>
        </Box>
      </Box>




      <Box bgcolor={theme.palette.background.white}>
        
        <Container maxWidth={1000}> 
          <Jobs />
        </Container>
        
        <Container paddingTop={'0 !important'}>
          <Newsletter />
        </Container>
        
        
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>



      </Box>


    </Main>
  );
};

export { Careers };
