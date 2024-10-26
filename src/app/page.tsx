import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Padding } from '@mui/icons-material';
import { Box, colors } from '@mui/material';
import { red } from '@mui/material/colors';


export default function Home() {
  return (
    <AppBar position="static">

      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ali vahedi
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: "end" }}>
          <Button sx={{borderRadius:"20px" , }} color="inherit">Home</Button>
          <Button sx={{borderRadius:"20px" , }} color="inherit">About Us</Button>
          <Button sx={{borderRadius:"20px" , }} color="inherit">Contact Us</Button>

          <Button sx={{
            ml: "50px",
            borderRadius:"20px",
            bgcolor:"yellow",
            color:"black",
            

          }} color="inherit" >Subscribe</Button>
        </Box>


      </Toolbar>

    </AppBar>
  );
}
