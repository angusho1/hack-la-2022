import React from 'react';
import './App.css';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import GradeCalculator from './components/grade-calculator/GradeCalculator';
import cherSucks from './Calc/calc'

function App() {
  cherSucks()
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{  flexGrow: 1 }}>
            Grades App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item>
          <GradeCalculator />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
