import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import TaskManagerPage from 'pages/TaskManagerPage';
import AppLayout from 'layout/AppLayout';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <TaskManagerPage />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;