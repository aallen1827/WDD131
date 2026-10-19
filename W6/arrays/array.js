let courses = ["wdd131", "itm220", "wdd231", "cse212"];

console.log(courses[0]);

//wrong
console.log(courses[4]);

//dont do this
let coursesAndGrades = ["wdd131", 3.7, "itm231", 4];

console.log(coursesAndGrades[1]);
//js object
let courseGPA = [
    {
    courseName: "wdd131",
    courseGPA: 3.7,
    teacher: "warner",
    assignments: [
        {
            assignmentName: 'w01 prove',
            assignmentGrade: 89
        }
    ]
    },
    {
        courseName: "wdd231",
        courseGPA: 4,
        teacher: "warner"
    }
];

console.log(courseGPA[0]);
console.log(courseGPA[0].courseName);

console.log(courseGPA[1].courseName);

console.log(courseGPA[0].assignments[0].assignmentGrade);

//loops

for(let i = 0; i < courseGPA.length; i++) {
    console.log(courseGPA[i].courseName);
    console.log(courseGPA[i].courseGPA);
}

//foreach
courseGPA.forEach(item => console.log(item.courseName));

/* or 
courseGPA.foEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});
*/


//template literals

let body = document.querySelector("body");



courseGPA.forEach(course => {
    let dynamicHTML = `
    <div>
        <h1> ${course.courseName} </h1>
        <h2> ${course.courseGPA} </h2>
    <div>
    `;

    body.innerHTML += dynamicHTML;
})