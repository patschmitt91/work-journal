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
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { getAllEntries } from '../content/entries';

export default function JournalEntries() {
  const allEntries = getAllEntries();
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={600}>
        Journal Entries
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A chronological collection of my work experiences, learnings, and reflections
      </Typography>

      {/* Search Bar */}
      <Paper elevation={0} sx={{ mb: 4, p: 2, bgcolor: 'background.default' }}>
        <TextField
          fullWidth
          placeholder="Search entries..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Entries Grid */}
      {allEntries.length > 0 ? (
        <Grid container spacing={3}>
          {allEntries.map((entry) => (
            <Grid size={{ xs: 12, md: 6 }} key={entry.id}>
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
  );
}
