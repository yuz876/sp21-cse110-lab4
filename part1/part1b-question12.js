let student = {
    name: 'Sarah',
    'Grad Year': '2022',
    greeting: function a(){console.log("Hello!");return 1},
    'Favorite Teacher':{
        name: "Thomas Powell",
    },
    courseLoad: ['CSE 110', 'CSE 134']
};

console.log(student.name);

console.log(student['Grad Year']);

console.log(student.greeting() );

console.log(student['Favorite Teacher'].name);

console.log(student.courseLoad[0] );
