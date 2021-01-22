//onclick function
$("#submit").click(function () {
    //debug for grades
    //alert(
        //$("#assignments").val() + '\n' +
        //$("#group").val() + '\n' +
        //$("#quizzes").val() + '\n' +
        //$("#exams").val() + '\n' +
        //$("#intex").val() + '\n'
    //);
    //caluclate grade
    let grade = $("#assignments").val() * .5 + $("#group").val() * .1 + $('#quizzes').val() * .1 + $('#exams').val() * .2 + $('#intex').val() * .1;
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
    alert("Your grade this semester\n" + letter + '\n' + grade + '%');
    
});