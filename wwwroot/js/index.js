//onclick function
function calculateGrade() {
    //debug for grades
    console.log(document.getElementById('assignments').value);
    console.log(document.getElementById('group').value);
    console.log(document.getElementById('quizzes').value);
    console.log(document.getElementById('exams').value);
    console.log(document.getElementById('intex').value);
    //caluclate grade
    let grade = document.getElementById('assignments').value * .5 + document.getElementById('group').value * .1 + document.getElementById('quizzes').value * .1 + document.getElementById('exams').value * .2 + document.getElementById('intex').value * .1;
    let letter;
    //determine letter grade
    if (grade >= 94) {
        letter = 'A+';
    }
    else if (grade >= 90) {
        letter = 'A-'
    }
    else if (grade >= 87) {
        letter = 'B+'
    }
    else if (grade >= 84) {
        letter = 'B'
    }
    else if (grade >= 80) {
        letter = 'B-'
    }
    else if (grade >= 77) {
        letter = 'C+'
    }
    else if (grade >= 74) {
        letter = 'C'
    }
    else if (grade >= 70) {
        letter = 'C-'
    }
    else if (grade >= 67) {
        letter = 'D+'
    }
    else if (grade >= 64) {
        letter = 'D'
    }
    else if (grade >= 60) {
        letter = 'D-'
    }
    else {
        letter = E
    }
    //output letter grade
    document.getElementById('letterOutput').innerHTML = letter;
    //output numeric grade
    document.getElementById('gradeOutput').innerHTML =grade + '%';
}
