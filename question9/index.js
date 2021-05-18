let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami" 
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani" 
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri" 
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand" 
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"  
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan" 
    }
]


let arr3 = personData.map((item)=> {
  let arr4 = additionalPersonData.find((item2)=>  item.uid === item2.uid)
    return {...item , ...arr4};
    
});
// console.log(arr3.length)

let table = document.createElement("table");

let tableHeaders = ["Row",...Object.keys(arr3[0])];
let tableHeaderTags = [];
let tablerows = [];
let tableDatas = [];
// let tdTags = [];

for (let index = 0; index <= arr3.length; index++) {
    const element = document.createElement("tr");
    tablerows.push(element);
}

for (let index = 0; index < tableHeaders.length; index++) {
    const element = document.createElement("th");
    element.innerText = tableHeaders[index];
    tableHeaderTags.push(element);
    
}

for (let index = 0; index < arr3.length; index++) {
    const element = Object.values(arr3[index]);
    tableDatas.push(element);
}

for (let index = 0; index < tablerows.length -1; index++) {
    // const tbrow = tablerows[index];
    let rowNumber = document.createElement("td");
    rowNumber.innerText = `${index + 1}`;
    tablerows[index].appendChild(rowNumber);
    const tbdata = tableDatas[index];
    for (let j = 0; j < tableDatas[index].length; j++) {
        // const tdTag = document.createElement("td");
        for (let i = 0; i < tbdata[j].length; i++) {
            const element = document.createElement("td"); 
            element.innerText = tbdata[j][i];
            tablerows[index].appendChild(element);
        }
    }
}
console.log(tableHeaderTags);
console.log(tablerows);