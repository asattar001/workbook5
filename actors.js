let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV","A Bob"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",

    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

let findMemberID = academyMembers.find((member) => member.memID == "187");
console.log(findMemberID.name)

academyMembers.filter((member) => member.films.length >= 3).forEach((member) => console.log(member.name));

academyMembers.filter((member) => member.name.slice(0, 3) == "Bob").forEach((member) => console.log(member.name));


academyMembers.filter((member) => member.films.find((film) => film[0] == "A")).forEach((member) => console.log(member.name));
