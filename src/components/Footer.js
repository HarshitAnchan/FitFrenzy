import React from 'react';
import { Box, Stack, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, Email } from '@mui/icons-material';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" py="40px">
    <Container maxWidth="lg">
      <Box bgcolor="linear-gradient(45deg, #F3E5F5 30%, #E1BEE7 90%)" borderRadius="8px" p="24px">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
          <img src={Logo} alt="logo" style={{ width: '200px', height: '65px' }} />
          <Stack direction="row" spacing={2} mt="20px">
            <Link href="#home" color="inherit" underline="none">Home</Link>
            <Link href="#about" color="inherit" underline="none">About</Link>
            <Link href="#contact" color="inherit" underline="none">Contact</Link>
            <Link href="#exercises" color="inherit" underline="none">Exercises</Link>
          </Stack>
          <Stack direction="row" spacing={1} mt="20px">
            <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="mailto:your-email@example.com" color="inherit">
              <Email />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant="body1" sx={{ fontSize: { lg: '18px', xs: '14px' } }} mt="30px" textAlign="center">
          Made with ❤️ by Harshit
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { lg: '14px', xs: '12px' } }} mt="10px" textAlign="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
