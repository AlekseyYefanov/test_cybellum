import { useState } from 'react';

import { Button, CardMedia, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import IconButton from '@mui/material/IconButton';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';


export default function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  
  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <Box sx={{
        color: '#1C1B1F', 
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',

        '@media (max-width: 1110px)': {
          display: 'block',
        },
        }}>
        
        <Box sx={{  
          position: 'relative',
          padding: '198px 20px 0px 182px', 

          '@media (max-width: 1400px)': {
            padding: '80px 20px 0px 80px',
            width: '50%'
          },

          '@media (max-width: 1110px)': {
            width: '100%',
            padding: '15px'
          },

        }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',

          '@media (max-width: 1110px)': {
            maxWidth: '400px',
            margin: '0 auto',
          },

          }}>
          <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 150,  }} />
          <Typography variant="h1" sx={{ 
            mt: 4, 
            maxWidth: 636, 
            fontSize: 56, 
            letterSpacing: "-0.5px",

            '@media (max-width: 1400px)': {
              fontSize: 40, 
            },

            }}>
            Welcome to the
          </Typography>
          <Typography variant="h1" 
          sx={{ 
            fontSize: 56, 
            marginBottom: '33px', 
            letterSpacing: "-0.5px",

            '@media (max-width: 1400px)': {
              fontSize: 40, 
            },

            }}>
            Product Security Platform
          </Typography>
          <Box sx={{
              maxWidth: 400,
            }}>
            <TextField label="Username" 
              inputProps={{
                style: {
                  height: '40px',
                  padding: '4px 15px',
                  border: '1px solid #7B7B7B',
                  borderRadius: '4px'
                },
              }}

              sx={{
                color: '#4D4D4D',
                "& label": {
                  marginLeft: '17px',
                  fontSize: "14px",
                  lineHeight: '20px',
                  letterSpacing: "0.25px"
                },
            }}
            />
            <TextField 
              label="Password" 
              type="password"
              // helperText="The email or password you entered don’t match"
              FormHelperTextProps={{
                sx: {
                  color: '#BA1A1A', 
                  ml: 0
                },
              }}
              inputProps={{
                endAdornment: error && (
                  <IconButton aria-label="error-icon" edge="end">
                    <WarningIcon />
                  </IconButton>
                ),
                style: {
                  height: '40px',
                  padding: '4px 15px',
                  border: '1px solid #7B7B7B',
                  borderRadius: '4px'
                },
              }}

              sx={{ 
                color: '#4D4D4D',
                marginTop: '27px',
                marginBottom: '-3px',
                "& label": {
                  marginLeft: '17px',
                  fontSize: "14px",
                  lineHeight: '20px',
                  letterSpacing: "0.25px"
              }, }} />
              
            <Button sx={{ 
                color: '#4D4D4D', 
                height: '24px',
                padding: '4px',
                "&:hover": {backgroundColor: 'rgba(77, 77, 77, 0.08)'} 
                }}>
                  Forgot your password?
            </Button>

            <Button variant="contained" fullWidth sx={{ 
              mt: 6, mb: 4, 
              clear: 'both',
              color: '#2A2118',
              backgroundColor: '#BAA182',
              boxShadow: 'none',
              height: '40px',
              fontSize: '16px',
              letterSpacing: '0.15px',
              "&:hover": {
                boxShadow: [
                  '0px 1px 3px 1px #1C1B1F26',
                  '0px 1px 2px 0px #1C1B1F4D',
                ],
                backgroundColor: '#BAA182',
                }
                  }}>
              Log in
            </Button>
          </Box>

        </Box>
      </Box>

        <CardMedia component="img" alt="Digital Twins" image={monitor} 
          sx={{ 
            maxWidth: 925,
            marginTop: '120px',
            marginBottom: '9px',
            marginLeft: '54px',
            objectFit: 'contain', 

            '@media (max-width: 1820px)': {
              maxWidth: 700,
            },

            '@media (max-width: 1600px)': {
              width: '500px',
              margin: '20px auto',
            },

            '@media (max-width: 1100px)': {
              maxWidth: '80%',
            },


          }} />

          <Box sx={{ 
              maxWidth: 400, 
              display: 'flex', 
              justifyContent: 'space-between',
              width: '100%',
              position: 'absolute',
              bottom: '-27px',
              left: '182px', 

              '@media (max-width: 1400px)': {
                left: '80px',
                bottom: '0px',
              },
              '@media (max-width: 1110px)': {
                position: 'initial',
                margin: '0 auto'
              },

              '@media (max-width: 500px)': {
                display: 'flex',
                flexDirection: 'column'
              },
              
              }}>
            {Object.keys(bottomLinks).map((link) => (
              <Button key={link} 
              sx={{ 
                color: '#4D4D4D',
                fontSize: '16px',
                height: '32px',
                letterSpacing: '0.15px',
                "&:hover": '#4D4D4D14',
                }}>
                {link}</Button>
                ))}
          </Box>
    </Box>
  );
}
