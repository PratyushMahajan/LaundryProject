import React, { useState } from 'react'; 
import { Box, Select, MenuItem, Typography, Container } from '@mui/material';
import Cards from "../FrontCards/Cards";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(''); 

  const handleChange = (event) => {
    setSelectedCity(event.target.value); 
  };

  return (
    <div>
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

        <Container sx={{ textAlign: 'left', ml: 8, mt: -10 }}>
          <Typography sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Poppins, sans-serif', fontSize: '80px' }}>
            The Smartest Way<br />to Do Laundry
          </Typography>
          <Typography sx={{ fontWeight: 'bold', mb: 4, fontFamily: 'Poppins, sans-serif', fontSize: '20px', letterSpacing: 0.9 }}>
            Rinse picks up, cleans, and delivers<br />your laundry and dry cleaning.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'left', gap: 2 }}>
            <Select
              value={selectedCity}
              onChange={handleChange}
              displayEmpty 
              variant="outlined"
              sx={{
                bgcolor: '#fff',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                color: selectedCity ? 'black' : 'gray', 
                '& .MuiSelect-select': {
                  color: selectedCity ? 'black' : 'gray',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
            >

              <MenuItem value="" disabled>
                Select your Location
              </MenuItem>
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>

            </Select>

          </Box>
         
          <Typography sx={{ mt: 2, color: 'white', fontFamily: 'Poppins, sans-serif' }}>
            
          </Typography>
        </Container>
      </Box>
      <hr></hr>
      <div>
      <div class="flex items-center justify-center " >
    <h1 class="text-4xl font-bold text-orange-500">OUR SERVICES</h1>
</div>
        
        <div>
        <Cards />

        </div>
      </div>
      
    </div>
  );
};

export default Home;
