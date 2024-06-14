import React from 'react';
import { Box, Stack, Typography, Link, IconButton, Container, TextField, Button, Grid, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, Email } from '@mui/icons-material';
import Logo from '../assets/images/logo-new.png';

const Footer = () => (
  <>
    <Divider sx={{ mb: '20px' }} />
    <Box bgcolor="#b4b4b8" py="20px">
      <Container maxWidth="xl">
        <Box bgcolor="linear-gradient(45deg, #F3E5F5 30%, #E1BEE7 90%)" borderRadius="8px" p="16px">
          
          {/* Logo */}
          <Stack gap="12px" sx={{ alignItems: 'center' }} flexWrap="wrap">
            <img src={Logo} alt="logo" style={{ width: '100px', height: '90px' }} />
          </Stack>

          {/* Description */}
          <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '12px', px: 2, mt: 1 }}>
            Discover exercises tailored to your needs and achieve your fitness goals with ease.
          </Typography>

          {/* Navigation Links */}
          <Stack direction="row" spacing={1} justifyContent="center" mt="12px">
            <Link href="#home" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Home</Link>
            <Link href="#about" color="inherit" underline="none" sx={{ fontSize: '12px' }}>About</Link>
            <Link href="#contact" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Contact</Link>
            <Link href="#exercises" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Exercises</Link>
          </Stack>

          {/* Email Subscription and Social Links */}
          <Grid container spacing={2} justifyContent="center" alignItems="center" mt="16px">
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Your email"
                  fullWidth
                  sx={{ fontSize: '12px' }}
                  InputProps={{ sx: { fontSize: '12px', padding: '8px 12px' } }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{ fontSize: '12px', padding: '8px 12px', ml: 1, bgcolor: 'primary.main' }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit" size="small">
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit" size="small">
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit" size="small">
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton href="mailto:your-email@example.com" color="inherit" size="small">
                  <Email fontSize="small" />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ mt: '20px', mb: '16px' }} />

          {/* Two Columns: Recent Blog Posts and Customer Testimonials */}
          <Grid container spacing={4}>
            {/* Recent Blog Posts */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center', mb: '8px' }}>
                Recent Blog Posts
              </Typography>
              <Stack sx={{ textAlign: 'center' }} spacing={1}>
                <Link href="#blog-post-1" color="inherit" underline="none" sx={{ fontSize: '12px' }}>How to Start Your Fitness Journey</Link>
                <Link href="#blog-post-2" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Nutrition Tips for Athletes</Link>
                <Link href="#blog-post-3" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Benefits of Yoga for Mind and Body</Link>
              </Stack>
            </Grid>

            {/* Customer Testimonials */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center', mb: '8px' }}>
                Customer Testimonials
              </Typography>
              <Stack sx={{ textAlign: 'center' }} spacing={1}>
                <Typography variant="body2" sx={{ fontSize: '12px' }}>
                  "This platform has helped me stay motivated and achieve my fitness goals faster than ever."
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '12px' }}>
                  "The exercises are well-curated and easy to follow, even for beginners like me."
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ mt: '20px', mb: '16px' }} />

          {/* Legal Links */}
          <Stack direction="row" spacing={1} justifyContent="center" mt="20px">
            <Link href="#terms" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Terms of Service</Link>
            <Link href="#privacy" color="inherit" underline="none" sx={{ fontSize: '12px' }}>Privacy Policy</Link>
          </Stack>

          {/* Copyright and Creator Info */}
          <Typography variant="body1" sx={{ fontSize: { lg: '14px', xs: '10px' }, mt: '16px', textAlign: 'center' }}>
            Made with ❤️ by Harshit
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { lg: '10px', xs: '8px' }, mt: '4px', textAlign: 'center', color: 'textSecondary' }}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  </>
);

export default Footer;
