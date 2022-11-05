import { Button, Card, CardActions, CardContent, Divider, Grid, Stack, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React, { useState } from 'react';
import cherDaBestMusic from '../../Calc/calc';
import { Assignment } from '../../types/Assignment';
import { Course } from '../../types/Course';
import { courses } from '../../data/courses';

const round = (num: number) => Math.round(num * 100) / 100;

export default function GradeCalculator() {
  const [course, setCourse] = useState<Course>(courses[1]);
  const [desiredGrade, setDesiredGrade] = useState<number>(0.9);
  const [assignments, setAssignments] = useState<Assignment[]>(course.assignments);

  const onDesiredGradeChange = (e: any) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const newValue = value / 100;
      setDesiredGrade(newValue);
      console.log('onDesiredGradeChange assigments', assignments);
      const newAssignments = cherDaBestMusic(assignments, newValue);
      setAssignments(newAssignments);
    }
  };

  const changeAssignmentGrade = (id: string, value: number) => {
    const index = assignments.findIndex(a => a.id === id);
    assignments[index].pct = value / 100;

    const newAssignments = cherDaBestMusic(assignments, desiredGrade);
    setAssignments(newAssignments);
  };

  const onCourseChange = (e: any) => {
    const selectedCourse = e.target.value as Course;
    setCourse(selectedCourse as Course);
    setAssignments(selectedCourse.assignments);
  }

  return (
    <Grid container sx={{ p: 10 }}>
      <Grid item>
        <Card sx={{ minWidth: 500, p: 4 }}>
          <CardContent>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={course}
                label="Select Course"
                onChange={onCourseChange}
              >
                {
                  courses.map(c => (
                    <MenuItem key={c.code} value={c as any}>{c.code} - {c.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <Typography sx={{ mb: 3, mt: 3 }} variant="h4">Enter Grades Below</Typography>
            <Grid container alignItems="center" sx={{ mb: 4 }}>
              <Grid item xs={9} sx={{ alignItems: 'left' }}>
                <Typography sx={{ fontSize: '18px' }}>Your Desired Final Grade</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="outlined-number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={round(desiredGrade * 100)}
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: 1
                  }}
                  onChange={onDesiredGradeChange}
                  size="small"
                />
              </Grid>
              <Grid item xs={1}>
                <Typography>%</Typography>
              </Grid>
            </Grid>

            <Divider textAlign="center" sx={{ fontSize: '18px' }}>Assignments</Divider>

            <Stack sx={{ mt: 4 }} spacing={3}>
              { assignments.length > 0 && (
                  assignments.map(assignment => (
                    <Grid container key={assignment.id} alignItems="center">
                      <Grid item xs={9} sx={{ textAlign: 'left' }}>
                        <Typography>{ assignment.name }</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          id="outlined-number"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e: any) => {
                            const value = e.target.value;
                            if (!isNaN(value)) {
                              changeAssignmentGrade(assignment.id, value);
                            }
                          }}
                          value={assignment.pct ? round(assignment.pct * 100) : 0}
                          inputProps={{
                            min: 0,
                            max: 100,
                            step: 1,
                          }}
                          size="small"
                          />
                      </Grid>
                      <Grid item xs={1}>
                        <Typography>%</Typography>
                      </Grid>
                    </Grid>
                  ))
                )
              }
            </Stack>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
