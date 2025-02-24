import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid2, Card, CardContent, Alert, AlertTitle } from '@mui/material';
import { BarChart2, Calendar } from 'lucide-react';
import Chip from '@mui/joy/Chip';



function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <Box sx={{ minHeight: '100vh', minWidth: '100vh' }}>
      {/* <Box component="header" sx={{ borderTop: '1px solid', borderColor: 'grey.200', py: 4 }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          &copy; 2025 BluPulse. All rights reserved.
        </Typography>
      </Box> */}
      {/* <Navbar /> */}
      {/* Main Hero Section */}
      <Box sx={{ mx: 'auto', px: 3, pt: 8 }} className="hero">
        <Box textAlign="center">
          <Chip className="badge">
            LAUNCHING SOON
          </Chip>
          <Typography variant="h3" fontWeight="bold" color="text.primary">
            Elevate your Bluesky presence
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Join the waitlist to get early access to powerful analytics and scheduling tools for Bluesky. Start growing
            your audience today.
          </Typography>

          {/* Waitlist Form */}
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }} className="form-container">
            {submitted ? (
              <Alert severity="success">
                <AlertTitle>You're on the list!</AlertTitle>
                We'll notify you when BluPulse launches.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid2 display="inline-flex" gap={3}>
                  <Grid2 lg={3} xl={3} sm={3}>
                    <TextField
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid2>
                  <Grid2 lg={3} xl={3} sm={3}>
                    <Button type="submit" variant="contained" color="primary" size="medium">Join now</Button>
                  </Grid2>
                </Grid2>
              </form>
            )}
          </Box>

          <Typography variant="body2" color="text.secondary">
            163+ creators have already joined
          </Typography>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mx: 'auto', px: 3, py: 6 }}>
        <Grid2 container spacing={3}>
          {[{ title: "Analytics", icon: BarChart2 }, { title: "Content Scheduling", icon: Calendar }].map((feature, index) => (
            <Grid2 item xs={12} sm={6} key={index}>
              <Card variant="outlined" sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>{React.createElement(feature.icon, { size: 32, color: '#1E88E5' })}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Visually plan and schedule your content delivery with click, drag and drop and automation. It's as easy as that.
                </Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Blog Section */}
      <Box sx={{ py: 6 }} className='insights'>
        <Grid2>
          <Grid2 xs={12} md={12} lg={12} py={3}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" color='text.primary'>
              Latest Insights
            </Typography>
          </Grid2>
          <Grid2 container spacing={3} xs={12} md={12} lg={12} sx={{ justifyContent: "center", alignItems: "center"}}>
            {[
              {
                title: "Growing Your Bluesky Audience",
                excerpt: "Learn effective strategies for building an engaged following.",
                date: "Feb 19, 2025",
              },
              {
                title: "Content Strategy Guide",
                excerpt: "Master the art of creating engaging content for Bluesky.",
                date: "Feb 18, 2025",
              },
              {
                title: "Analytics Deep Dive",
                excerpt: "Understanding the metrics that matter for growth.",
                date: "Feb 17, 2025",
              },
            ].map((post, index) => (
              <Grid2 item xs={12} md={4} key={index}>
                <Card elevation={1} sx={{ p: 3 }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'grey.200', py: 4 }}>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          &copy; 2025 BluPulse. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
