// var Mathematics = document.querySelector("#Mathematics");
// var Physcis = document.querySelector ("#Physcis");
// var Chemistry = document.querySelector("#Chemistry")
// var English = document.querySelector("#English");
// var result = document.querySelector('#result');

// var totalMark = 400


// function finalResult(){

//       if (+Mathematics.value > 100 || +Physcis.value > 100 || +Chemistry.value > 100 || +English.value > 100 ){
//         alert('Please Enter Marks Less than 100')
//       }else if (Mathematics.value === "" ||  Physcis.value === "" || Chemistry.value ==="" || English.value === "" )    {
//         alert('Please Enter Your Marks')
//       } else {
//         var ObtainedMarks = +Mathematics.Value +  +Physcis.value + +Chemistry.value +  +English.value 

//         var percentage = obtainedMarksbtainedMarks / totalMark * 100 ;

//         var grade = 'A';
//         if( percentage >= 80 ){
//             grade = 'A+' 
//         } else if ( percentage >=72 ) {
//             grade = 'B+'
//         } else if ( percentage >= 65){
//             garde = 'B-'
//         }else if ( percentage >=60){
//             grade = 'C+'
//         }else if( percentage >=55){
//             grade = 'D'
//         }else if( percentage <50){
//             grade = 'F'
//         }

//         result.innerHTML = "You have obtained " + obtainedMarks + " out of " + totalMarks + " and your percentage is " + percentage + "% with grade " + grade 

//       }
// }













































var chemMarks = document.querySelector('#chem');
var physMarks = document.querySelector('#phys');
var engMarks = document.querySelector('#eng');
var urduMarks = document.querySelector('#urdu');
var result = document.querySelector('#result');

var totalMarks = 400;

function calculatePercentage(){
    if(+chemMarks.value > 100 || +physMarks.value > 100 || +engMarks.value > 100 || urduMarks.value> 100){
        alert('marks should be less than 100')
    } else if(chemMarks.value === "" || physMarks.value === "" || engMarks.value === "" || urduMarks.value=== ""){
        alert('enter marks')
    }
    else{
        var obtainedMarks = +chemMarks.value + +physMarks.value + +engMarks.value + +urduMarks.value

        var percentage = obtainedMarks / totalMarks * 100;

        var grade;
            if (percentage >= 90) {
                grade = 'A+';
            } else if (percentage >= 80) {
                grade = 'A';
            } else if (percentage >= 70) {
                grade = 'B+';
            } else if (percentage >= 60) {
                grade = 'B';
            } else if (percentage >= 50) {
                grade = 'C+';
            } else if (percentage >= 40) {
                grade = 'C';
            } else {
                grade = 'F';
            } 
        
        result.innerHTML = " You have obtained  "  + obtainedMarks + " out of " + totalMarks + " and your percentage is " + percentage + " % with grade " + grade 
    }
}



















































































// var subject1 = parseFloat(document.getElementById('subject1').value);
// var subject2 = parseFloat(document.getElementById('subject2').value);
// var subject3 = parseFloat(document.getElementById('subject3').value);
// var subject4 = parseFloat(document.getElementById('subject4').value);

// function calculateResults() {
//     // Get the marks from input fields
//     // var subject1 = parseFloat(document.getElementById('subject1').value);
//     // var subject2 = parseFloat(document.getElementById('subject2').value);
//     // var subject3 = parseFloat(document.getElementById('subject3').value);
//     // var subject4 = parseFloat(document.getElementById('subject4').value);
     



//     // Calculate total marks
//     var totalMarks = subject1 + subject2 + subject3 + subject4;

//     // Calculate percentage
//     var percentage = (totalMarks / 400) * 100;

//     // Determine grade
//     var grade;
//     if (percentage >= 90) {
//         grade = 'A+';
//     } else if (percentage >= 80) {
//         grade = 'A';
//     } else if (percentage >= 70) {
//         grade = 'B+';
//     } else if (percentage >= 60) {
//         grade = 'B';
//     } else if (percentage >= 50) {
//         grade = 'C+';
//     } else if (percentage >= 40) {
//         grade = 'C';
//     } else {
//         grade = 'F';
//     }

//     // Display the results
//     document.getElementById('result').innerHTML = `
//         <p>Total Marks: ${totalMarks}</p>
//         <p>Percentage: ${percentage.toFixed(2)}%</p>
//         <p>Grade: ${grade}</p>
//     `;
// }  