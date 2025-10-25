import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Divider,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              bgcolor: 'primary.main',
              fontSize: '3rem',
            }}
          >
            PS
          </Avatar>
          <Typography variant="h3" component="h1" gutterBottom fontWeight={600}>
            Patrick Schmitt
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Cloud & AI Solution Engineer
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Jacksonville, FL
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Introduction */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <PersonIcon color="primary" />
            <Typography variant="h5" fontWeight={600}>
              Introduction
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Welcome to my work journal! I'm a Cloud & AI Solution Engineer specializing in 
            cloud architecture, AI solutions, and modern application development. This space serves as 
            my digital notebook where I document my professional journey, share insights, and reflect on 
            my experiences building scalable cloud solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            Based in Jacksonville, FL, I work with cutting-edge technologies to help 
            organizations transform their infrastructure and leverage the power of cloud platforms and AI. 
            I believe in continuous learning and sharing knowledge with the community.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Skills & Interests */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <CodeIcon color="primary" />
            <Typography variant="h5" fontWeight={600}>
              Technical Expertise
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Primary Focus
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            <Chip label="Azure" color="primary" variant="filled" />
            <Chip label="AI Development" color="primary" variant="filled" />
            <Chip label="C#" color="primary" variant="filled" />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Additional Skills
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            <Chip label="React" color="primary" variant="outlined" />
            <Chip label="TypeScript" color="primary" variant="outlined" />
            <Chip label="JavaScript" color="primary" variant="outlined" />
            <Chip label="DevOps" color="primary" variant="outlined" />
            <Chip label="Web Development" color="primary" variant="outlined" />
            <Chip label="PHP" color="primary" variant="outlined" />
            <Chip label="Laravel" color="primary" variant="outlined" />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
