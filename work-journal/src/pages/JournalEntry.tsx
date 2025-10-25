import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { getEntryById } from '../content/entries';

export default function JournalEntry() {
  const { id } = useParams<{ id: string }>();
  const entry = id ? getEntryById(id) : undefined;

  if (!entry) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          component={Link}
          to="/entries"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to Entries
        </Button>
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Entry Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The journal entry you're looking for doesn't exist.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        component={Link}
        to="/entries"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Entries
      </Button>

      <Paper elevation={2} sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <CalendarTodayIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {new Date(entry.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
          </Box>
          <Typography variant="h3" component="h1" gutterBottom fontWeight={600}>
            {entry.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {entry.tags.map((tag) => (
              <Chip key={tag} label={tag} color="primary" />
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Content */}
        <Box
          sx={{
            '& h1': { fontSize: '2rem', fontWeight: 600, mt: 3, mb: 2 },
            '& h2': { fontSize: '1.5rem', fontWeight: 600, mt: 3, mb: 2 },
            '& h3': { fontSize: '1.25rem', fontWeight: 600, mt: 2, mb: 1 },
            '& p': { mb: 2, lineHeight: 1.7 },
            '& ul, & ol': { mb: 2, pl: 3 },
            '& li': { mb: 1 },
            '& code': {
              bgcolor: 'grey.100',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontFamily: 'monospace',
            },
          }}
        >
          {entry.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return (
                <Typography key={index} variant="h1" component="h1">
                  {line.substring(2)}
                </Typography>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <Typography key={index} variant="h2" component="h2">
                  {line.substring(3)}
                </Typography>
              );
            }
            if (line.startsWith('- ')) {
              return (
                <Typography key={index} component="li" variant="body1">
                  {line.substring(2)}
                </Typography>
              );
            }
            if (line.trim()) {
              return (
                <Typography key={index} variant="body1" paragraph>
                  {line}
                </Typography>
              );
            }
            return null;
          })}
        </Box>
      </Paper>
    </Container>
  );
}
