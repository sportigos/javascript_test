const monday = [
  {
    task: "Write a tutorial",
    duration: 180,
  },
  {
    task: "Some web development",
    duration: 120,
  },
];

const tuesday = [
  {
    task: "Keep writing that tutorial",
    duration: 240,
  },
  {
    task: "Some more web development",
    duration: 180,
  },
  {
    task: "A whole lot of nothing",
    duration: 240,
  },
];

const tasks = [monday, tuesday];
const hourly_rate = 50;

let result = tasks
  .reduce((acc, current) => acc.concat(current), []) // combine two arrays into one
  .map((task) => task.duration / 60) // get array with hours value
  .filter((duration) => duration >= 3) // filter array which hours value is more than 3 hours
  .reduce((acc, current) => acc + current); // sum up all hours

result *= hourly_rate;

console.log(result);
