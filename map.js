/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()

// Define a fn to pass into the map method:
const multByTwo = function (n) {
  return n * 2;
};
// Now we can pass this into the map method
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const mapResultsSimple = nums.map(function (n) {
  return n * 2;
});
console.log(mapResultsSimple);

// Simplfied w/ map() + arrow function
const mapResultsArrow = nums.map((n) => n * 2);
console.log(mapResultsArrow);

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

// GOAL: iterate thru the array of students and return for each one an array
// containing their name and id:

// let studentsWithIds = [];
// for (let student of students) {
//   // console.log(student);
//   studentsWithIds.push([student.name, student.id]);
// }
// console.log(studentsWithIds);

// Using map():

// We are already addressing the array when we call the .map() method so no
// array param is needed. The 'i' in the function param represents each array
// index (the student objects). We simply push the values required as array
// items.

// Define the function to call on each array item:

// const extractStudentInfo = function (i) {
//   // console.log(i.name, i.id);
//   studentsWithIds.push([i.name, i.id]);
// };

// students.map(extractStudentInfo);
// console.log(studentsWithIds)

// Now try arrow function:

const studentsWithIds = students.map((i) => [i.name, i.id]);
console.log(studentsWithIds);
