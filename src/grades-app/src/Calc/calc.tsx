import { Assignment } from '../types/Assignment';

function cherDaBestMusic(Assignments: Assignment[], desired_grades: number){

    const defaultAssignments = Assignments.slice();

    const missing_percentages = [];

    let obtained_percentages = 0

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


    var xq = (desired_grades - obtained_percentages) / sumWithInitial

    const defaultAssignments2:any = []

    for (let i=0; i < defaultAssignments.length; i++) {
        if (defaultAssignments[i]['hasGrade'] === false) {
            const x = defaultAssignments[i];
            x['pct'] = Math.min(1, Math.max(xq, 0))
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


export default cherDaBestMusic;