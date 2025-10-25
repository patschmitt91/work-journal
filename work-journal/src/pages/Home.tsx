import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getRecentEntries } from '../content/entries';

export default function Home() {
  const recentEntries = getRecentEntries();
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)',
          color: 'white',
          py: 8,
          mb: 6,
          borderRadius: 0,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
            Patrick Schmitt
          </Typography>
          <Typography variant="h5" sx={{ mb: 1, opacity: 0.95 }}>
            Cloud & AI Solution Engineer
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.85 }}>
            Documenting my journey in cloud architecture, AI development, and modern solutions
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              About Me
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Recent Entries Section */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {recentEntries.length > 0 ? (
          <>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h4" component="h2" fontWeight={600}>
                Recent Entries
              </Typography>
              <Button
                component={Link}
                to="/entries"
                endIcon={<ArrowForwardIcon />}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                View All
              </Button>
            </Box>

            <Grid container spacing={3}>
              {recentEntries.map((entry) => (
                <Grid size={{ xs: 12, sm: 6, md: 6 }} key={entry.id}>
                  <Card>
                    <CardActionArea component={Link} to={`/entry/${entry.id}`}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <CalendarTodayIcon fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            {new Date(entry.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </Typography>
                        </Box>
                        <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
                          {entry.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {entry.excerpt}
                        </Typography>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {entry.tags.map((tag) => (
                            <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
                          ))}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', mt: 4 }}>
              <Button
                component={Link}
                to="/entries"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                fullWidth
              >
                View All Entries
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No journal entries yet
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Start documenting your journey by adding your first entry!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
