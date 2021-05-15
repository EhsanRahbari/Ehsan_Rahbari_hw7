let title = document.createElement("h1");
title.innerText = "My tasks";
title.style.fontSize = 45;
title.style.color = "red";
//making the list
let list = document.createElement("ol");
list.style.listStyle = "lower-roman";
let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");
listItem1.innerText = "userDashboard";
listItem2.innerText = "admin Dashboard";
listItem3.innerText = "authenctication";
let subList = document.createElement("ul");
let subListItem1 = document.createElement("li");
let subListItem2 = document.createElement("del");
let subListItem3 = document.createElement("li");
subListItem1.innerText = "login";
subListItem2.innerText = "register";
let subListItem2Container = document.createElement("li");
subListItem2Container.append(subListItem2);
subListItem3.innerText = "logout";
subList.append(subListItem1, subListItem2Container, subListItem3);
listItem3.append(subList);
let listItem4 = document.createElement("li");
listItem4.innerText = "about page";
let listItem5 = document.createElement("del");
listItem5.innerText = "content page";
let listItem5Container = document.createElement("li");
listItem5Container.append(listItem5);
list.append(listItem1,listItem2,listItem3,listItem4,listItem5Container);
//End of the making of list !
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "add task";
document.body.append(title, list , input , button );
document.body.style.marginLeft = "600px"
// document.body.style.alignSelf = "center";
// document.body.style.flexDirection = "column";

// let body = document.getElementsByTagName("main");
// console.log(body);
// body.append(title);
// body.append(title);
// document
// document.body.appendChild(list);