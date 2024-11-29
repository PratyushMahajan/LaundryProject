import React from 'react'
import { Box, Button, Typography, Container } from '@mui/material';
import Cards from "../FrontCards/Cards"

const Home = () => {
  return (
    <div >
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, 
          }}
        >
          <source src="https://video.rinse.com/assets/rebrand/video/landing_2023.mp4" type="video/mp4" />
        </video>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.4)', 
            zIndex: -1,
          }}
        />

        <Container sx={{ textAlign: 'left', ml: 8, mt: -10}}>
          <Typography sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Poppins, sans-serif', fontSize: '80px'}}>
            The Smartest Way<br></br>to Do Laundry
          </Typography>
          <Typography sx={{ fontWeight: 'bold', mb: 4, fontFamily: 'Poppins, sans-serif', fontSize: '20px', letterSpacing: 0.9}}>
            Rinse picks up, cleans, and delivers<br></br>your laundry and dry cleaning.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'left', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
            Pickup Tomorrow
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#black',
                borderColor: '#fff',
                '&:hover': { borderColor: '#ccc', color: '#ccc' },
              }}
            >
              Add Address
            </Button>
          </Box>
        </Container>
      </Box>    
      <Cards/>
    </div>
  );
};

export default Home