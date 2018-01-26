function solve(grades){
    correctedGrades = [];
    grades.map(grade => {
        if (grade >= 38) {
            multiplesOfFiveinGrade =  parseInt(grade / 5);
            console.log('multiplesOfFiveinGrade', multiplesOfFiveinGrade);
            difference = Math.abs(grade - ((multiplesOfFiveinGrade + 1) * 5));
            console.log('difference', difference);
            
            if (difference < 3){
                console.log(difference);
                correctedGrades.push((multiplesOfFiveinGrade + 1) * 5)
            } else {
                correctedGrades.push(grade)
            }
        }
        else {
            correctedGrades.push(grade)
        }
    });
    return correctedGrades;
}
console.log(solve([ 73, 67, 38, 33 ]));
