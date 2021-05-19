let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

let arr3 = personData.map((item) => {
  let arr4 = additionalPersonData.find((item2) => item.uid === item2.uid);
  return { ...item, ...arr4 };
});

let table = document.createElement("table");

let tableHeaders = ["Row", ...Object.keys(arr3[0])];
let tableHeaderTags = [];
let tablerows = [];
let tableDatas = [];

for (let index = 0; index <= arr3.length; index++) {
  const element = document.createElement("tr");
  tablerows.push(element);
}

for (let index = 0; index < tableHeaders.length; index++) {
  const element = document.createElement("th");
  // element.style.border = "4px solid"
  element.innerText = tableHeaders[index];
  tableHeaderTags.push(element);
}
for (let index = 0; index < tableHeaderTags.length; index++) {
  tablerows[0].appendChild(tableHeaderTags[index]);
}

for (let index = 0; index < arr3.length; index++) {
  const element = Object.values(arr3[index]);
  tableDatas.push(element);
}

for (let index = 1; index < tablerows.length; index++) {
  let rowNumber = document.createElement("td");
  // rowNumber.style.border = "4px solid"
  rowNumber.innerText = `${index}`;
  tablerows[index].appendChild(rowNumber);
  const tbdata = tableDatas[index - 1];
  for (let j = 0; j < tableDatas[index - 1].length; j++) {
    const element = document.createElement("td");
    element.innerText = tbdata[j];
    tablerows[index].appendChild(element);
  }
}

for (let index = 0; index < tablerows.length; index++) {
  table.appendChild(tablerows[index]);
}








//appending the table to the html
document.body.appendChild(table);
