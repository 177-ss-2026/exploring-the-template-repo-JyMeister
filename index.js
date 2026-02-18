// Personal Information
const firstName = "Jay";
const lastName = "Braun";
const age = 29;
const isStudent = true;

// Using Template Literals
const introduction = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old.`;
const studentStatus = `Am I a student? ${isStudent}`;

// Print to Console
console.log(introduction);
console.log(studentStatus);

const currentYear = 2026;
const birthYear = currentYear - age;
console.log(`I was born in the year ${birthYear}.`);

// It comes out as 1997, but I was born in 1996 and will turn 30 in 2026. :)
