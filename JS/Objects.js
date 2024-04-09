const employe = [
  { name: "latha", occupation: "employee", salary: 2000 },

  { name: "preethi", occupation: "tailer", salary: 1000 },
  { name: "madhu", occupation: "driver", salary: 3000 },
];

console.table(employe.filter((e) => e.name.startsWith("p")));
console.table(employe.map((e) => e.salary + 100));
