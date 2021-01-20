//onclick function
var submit = $("submit");

submit.addEventListener("click", function () {
    //debug for grades
    console.log($('assignments').value);
    console.log($('group').value);
    console.log($('quizzes').value);
    console.log($('exams').value);
    console.log($('intex').value);
    //caluclate grade
    let grade = $('assignments').value * .5 + $('group').value * .1 + $('quizzes').value * .1 + $('exams').value * .2 + $('intex').value * .1;
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
        letter = 'E'
    }
    //output letter grade
    document.getElementById('letterOutput').innerHTML = letter;
    //output numeric grade
    document.getElementById('gradeOutput').innerHTML = parseInt(grade).toFixed(2) + '%';
});