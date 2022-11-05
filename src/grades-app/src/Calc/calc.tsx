import { ReactElement, useState } from "react";

function CherSucks(): ReactElement {
    const [desired_grades, setDGrade] = useState(0);
    const assign_weights = [0.2, 0.3, 0.3, 0.2]

    const assign_real_grades = [null, null, null, null]

    var missing_percentages = [];

    var obtained_percentages = 0

    for (let i=0; i < assign_weights.length; i++) {
        if (assign_real_grades[i] === null) {
            missing_percentages.push(assign_real_grades[i])
            console.log(missing_percentages);
        }
        else if (assign_real_grades[i] != null) {
            obtained_percentages = obtained_percentages + assign_weights[i] * assign_real_grades[i];
        }
    }
    console.log(obtained_percentages)

    return (
        <div>Hello</div>
    )

}


export default CherSucks;