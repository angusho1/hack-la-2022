import { Button, Card, CardActions, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cherDaBestMusic from '../../Calc/calc';
import { Assignment } from '../../types/Assignment';

const round = (num: number) => Math.round(num * 100) / 100;

export default function GradeCalculator() {
  const defaultAssignments: Assignment[] = [
    { id: '1', name: 'Assignment 1', pct: 72, weight: 0.3, hasGrade: true },
    { id: '2', name: 'Assignment 2', pct: 64, weight: 0.2, hasGrade: true },
    { id: '3', name: 'Assignment 3', pct: null, weight: 0.2, hasGrade: false },
    { id: '4', name: 'Assignment 4', pct: null, weight: 0.3, hasGrade: false },
  ];
  const [desiredGrade, setDesiredGrade] = useState<number>(1);
  const [assignments, setAssignments] = useState<Assignment[]>(defaultAssignments);

  const onDesiredGradeChange = (e: any) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setDesiredGrade(value);
      console.log('onDesiredGradeChange assigments', assignments);
      const newAssignments = cherDaBestMusic(assignments, value);
      setAssignments(newAssignments);
    }
  };

  const changeAssignmentGrade = (id: string, value: number) => {
    const index = assignments.findIndex(a => a.id === id);
    let newAssignments = assignments.slice();
    newAssignments[index].pct = value;
    newAssignments = cherDaBestMusic(newAssignments, value);
    setAssignments(newAssignments);
  };

  return (
    <Grid container sx={{ p: 10 }}>
        <Grid item>
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography variant="h4">Enter Grades Below</Typography>
              <Grid container>
              <Grid item xs={9} sx={{ alignItems: 'left' }}>
                <Typography>Desired Final Grade</Typography>
                </Grid>
                <Grid item xs={3}>
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
                  />%
                </Grid>
              </Grid>

              <Typography variant="h5">Assignments</Typography>

              <Stack sx={{ mt: 4 }} spacing={3}>
                { assignments.length > 0 && (
                    assignments.map(assignment => (
                      <Grid container key={assignment.id}>
                        <Grid item xs={9} sx={{ alignItems: 'left' }}>
                          <Typography>{ assignment.name }</Typography>
                        </Grid>
                        <Grid item xs={3}>
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
                            value={assignment.pct ? round(assignment.pct) : 0}
                            inputProps={{
                              min: 0,
                              max: 100,
                              step: 1,
                            }}
                            />%
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
