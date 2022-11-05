import './App.css';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import GradeCalculator from './components/grade-calculator/GradeCalculator';

function App() {
  return (
    <div className="App">
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plan Your Grades
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
