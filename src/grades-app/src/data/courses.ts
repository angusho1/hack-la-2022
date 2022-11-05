import { Course } from "../types/Course";

export const courses: Course[] = [
    {
        name: 'Calculus III',
        code: 'CPSC 200',
        assignments: [
            { id: '1', name: 'WeBWorK Assignments', pct: 0.92, weight: 0.1, hasGrade: true },
            { id: '2', name: 'Midterm #1', pct: 0.64, weight: 0.25, hasGrade: true },
            { id: '3', name: 'Midterm #2', pct: null, weight: 0.25, hasGrade: false },
            { id: '4', name: 'Final', pct: null, weight: 0.4, hasGrade: false },
        ]
    },
    {
        name: 'Computation, Programs, and Programming',
        code: 'CPSC 110',
        assignments: [
            { id: '1', name: 'Lab 1', pct: 1.0, weight: 0.05, hasGrade: true },
            { id: '2', name: 'PSET 1', pct: 0.92, weight: 0.05, hasGrade: true },
            { id: '3', name: 'Lab 2', pct: 1.0, weight: 0.05, hasGrade: true },
            { id: '4', name: 'PSET 2', pct: 0.62, weight: 0.05, hasGrade: true },
            { id: '5', name: 'Lab 3', pct: 0.42, weight: 0.05, hasGrade: true },
            { id: '6', name: 'PSET 3', pct: 1.0, weight: 0.05, hasGrade: true },
            { id: '7', name: 'Lab 4', pct: 0.97, weight: 0.05, hasGrade: true },
            { id: '8', name: 'Midterm 1', pct: 0.82, weight: 0.05, hasGrade: true },
            { id: '9', name: 'PSET 4', pct: 0.72, weight: 0.05, hasGrade: true },
            { id: '10', name: 'Lab 5', pct: 0.68, weight: 0.05, hasGrade: true },
            { id: '11', name: 'PSET 5', pct: null, weight: 0.05, hasGrade: false },
            { id: '12', name: 'Lab 6', pct: null, weight: 0.05, hasGrade: false },
            { id: '13', name: 'PSET 6', pct: null, weight: 0.05, hasGrade: false },
            { id: '14', name: 'Lab 7', pct: null, weight: 0.05, hasGrade: false },
            { id: '15', name: 'PSET 7', pct: null, weight: 0.05, hasGrade: false },
            { id: '16', name: 'PSET 8', pct: null, weight: 0.05, hasGrade: false },
            { id: '17', name: 'PSET 9', pct: null, weight: 0.05, hasGrade: false },
            { id: '18', name: 'PSET 10', pct: null, weight: 0.05, hasGrade: false },
            { id: '19', name: 'Midterm 2', pct: null, weight: 0.05, hasGrade: false },
            { id: '20', name: 'Final', pct: null, weight: 0.05, hasGrade: false },
        ]
    },
]