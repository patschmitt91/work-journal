import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import JournalEntries from './pages/JournalEntries';
import JournalEntry from './pages/JournalEntry';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entries" element={<JournalEntries />} />
              <Route path="/entry/:id" element={<JournalEntry />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
