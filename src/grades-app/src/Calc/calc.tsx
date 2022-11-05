import { Assignment } from '../types/Assignment';

function cherSucks(Assignments: Assignment[], desired_grades: number){

    const defaultAssignments = Assignments
    

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