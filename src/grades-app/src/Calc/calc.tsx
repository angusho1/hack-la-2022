import { Assignment } from '../types/Assignment';

function cherSucks(){
    const desired_grades = 75

    const defaultAssignments: Assignment[] = [
        { id: '1', name: 'Assignment 1', pct: 0.7, weight: 0.3, hasGrade: true },
        { id: '2', name: 'Assignment 2', pct: 0.6, weight: 0.2, hasGrade: true },
        { id: '3', name: 'Assignment 3', pct: null, weight: 0.2, hasGrade: false },
        { id: '4', name: 'Assignment 4', pct: null, weight: 0.3, hasGrade: false },
      ];
      console.log(defaultAssignments[0]['hasGrade'])

    var missing_percentages = [];

    var obtained_percentages = 0

    for (let i=0; i < defaultAssignments.length; i++) {
        if (defaultAssignments[i]['hasGrade'] === false) {
            missing_percentages.push(defaultAssignments[i]['weight'])
            console.log(missing_percentages);
        }
        else {
            obtained_percentages += defaultAssignments[i]['weight'] * (defaultAssignments as any)[i].pct
        }

    }

    const initialValue = 0;
    const sumWithInitial = (missing_percentages as any).reduce(
        (previousValue:any, currentValue:any) => previousValue + currentValue,
        initialValue
      );


    var xq = (desired_grades/100 - obtained_percentages) / sumWithInitial

    console.log(xq)



    const defaultAssignments2:any = []

    for (let i=0; i < defaultAssignments.length; i++) {
        if (defaultAssignments[i]['hasGrade'] === false) {
            const x = defaultAssignments[i];
            x['pct'] = xq
            defaultAssignments2.push(x)
        }
        else {
            defaultAssignments2.push(defaultAssignments[i]) 
        }

    }

    console.log(defaultAssignments2)

    return (
        defaultAssignments2
    )

}


export default cherSucks;