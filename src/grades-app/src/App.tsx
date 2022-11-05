import React from 'react';
import './App.css';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import GradeCalculator from './components/grade-calculator/GradeCalculator';
import cherSucks from './Calc/calc'
import { Assignment } from './types/Assignment';

const defaultAssignments: Assignment[] = [
  { id: '1', name: 'Assignment 1', pct: 0.7, weight: 0.3, hasGrade: true },
  { id: '2', name: 'Assignment 2', pct: 0.6, weight: 0.2, hasGrade: true },
  { id: '3', name: 'Assignment 3', pct: null, weight: 0.2, hasGrade: false },
  { id: '4', name: 'Assignment 4', pct: null, weight: 0.3, hasGrade: false },
];


function App() {
  cherSucks(defaultAssignments, 75)
  return (
    <div className="App">
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grades App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center">
        <Grid item>
          <GradeCalculator />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
