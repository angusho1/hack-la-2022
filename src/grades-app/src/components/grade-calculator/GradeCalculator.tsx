import { Button, Card, CardActions, CardContent, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cherDaBestMusic from '../../Calc/calc';
import { Assignment } from '../../types/Assignment';

const round = (num: number) => Math.round(num * 100) / 100;

export default function GradeCalculator() {
  const defaultAssignments: Assignment[] = [
    { id: '1', name: 'Assignment 1', pct: 0.72, weight: 0.3, hasGrade: true },
    { id: '2', name: 'Assignment 2', pct: 0.64, weight: 0.2, hasGrade: true },
    { id: '3', name: 'Assignment 3', pct: null, weight: 0.2, hasGrade: false },
    { id: '4', name: 'Assignment 4', pct: null, weight: 0.3, hasGrade: false },
  ];
  const [desiredGrade, setDesiredGrade] = useState<number>(0.9);
  const [assignments, setAssignments] = useState<Assignment[]>(defaultAssignments);

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

  return (
    <Grid container sx={{ p: 10 }}>
        <Grid item>
          <Card sx={{ minWidth: 500, p: 4 }}>
            <CardContent>
              <Typography sx={{ mb: 3 }} variant="h4">Enter Grades Below</Typography>
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
