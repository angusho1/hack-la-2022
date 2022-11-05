import { Button, Card, CardActions, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Assignment } from '../../types/Assignment';

export default function GradeCalculator() {
  const defaultAssignments: Assignment[] = [
    { id: '1', name: 'Assignment 1', pct: 0.7, weight: 0.3, hasGrade: true },
    { id: '2', name: 'Assignment 2', pct: 0.6, weight: 0.2, hasGrade: true },
    { id: '3', name: 'Assignment 3', pct: null, weight: 0.2, hasGrade: false },
    { id: '4', name: 'Assignment 4', pct: null, weight: 0.3, hasGrade: false },
  ];
  const [desiredGrade, setDesiredGrade] = useState<number>(1);
  const [assignments, setAssignments] = useState<Assignment[]>(defaultAssignments);

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
                  defaultValue={desiredGrade}
                  inputProps={{
                    min: 0,
                    max: 1,
                    step: 0.1
                  }}
                />%
              </Grid>
            </Grid>

            <Typography variant="h5">Assignments</Typography>

            <Stack sx={{ mt: 4 }} spacing={3}>
              { assignments.length > 0 && (
                  assignments.map(assignment => (
                    <Grid container>
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
                          defaultValue={assignment.pct}
                          inputProps={{
                            min: 0,
                            max: 1,
                            step: 0.1
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
