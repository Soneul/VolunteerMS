import * as React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper } from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      {/* AppBar with navigation links */}
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hack4Good
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/about" passHref>
              <Button href="#" color="primary" variant="outlined">
                Log in
              </Button>
            </Link>
            <Button href="#" color="primary" variant="contained">
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main image section */}
      <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hack 4 Good's Home Page
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Slogan.
        </Typography>
      </Container>

      {/* Action buttons */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Donate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" size="large">
              Volunteer
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Explore Opportunities section */}
      <Container maxWidth="md" component="section" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Explore Opportunities
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Temporary items mapped here */}
        {[...Array(3)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={0} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {`Opportunity ${index + 1}`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Description for opportunity {index + 1}. Summarize the details here.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: 'auto' }}>
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
