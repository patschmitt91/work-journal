import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={600}>
        Get in Touch
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Have a question or want to connect? Feel free to reach out!
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
          Connect With Me
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:patschmitt91@gmail.com"
            size="large"
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            patschmitt91@gmail.com
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/patrick-schmitt-a2888616a/"
            target="_blank"
            size="large"
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            LinkedIn Profile
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/patschmitt91"
            target="_blank"
            size="large"
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            GitHub Profile
          </Button>
          <Button
            variant="outlined"
            startIcon={<FaDiscord />}
            href="https://discord.com/users/218133560903729152"
            target="_blank"
            size="large"
            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
          >
            Discord: pat08560
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
