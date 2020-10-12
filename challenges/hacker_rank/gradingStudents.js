// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade

function gradingStudents(grades) {
    // if grade >= 40 and within 2 of a multiple of 5 round up
    const newGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if ((grades[i] + 1) % 5 === 0) {
                newGrades.push(grades[i] + 1);
            } else if ((grades[i] + 2) % 5 === 0) {
                newGrades.push(grades[i] + 2);
            } else {
                newGrades.push(grades[i]);
            }
        } else {
            newGrades.push(grades[i]);
        }
    }
    return newGrades;
}
