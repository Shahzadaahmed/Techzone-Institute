// var doc = document;
// console.log(doc);


// var h1 = document.getElementsByTagName("h1");
// console.log(h1);

// for (var i = 0; i < h1.length; i++) {
//     // console.log(h1[i]);
//     h1[i].style.color = "red";
// };

// var dom = document.childNodes[1].childNodes[2];
// console.log(dom);





// var p = document.getElementById("para");
// var parentEl = p.parentNode;
// console.log(parentEl);



// var h2 = document.getElementById("h2");
// var parentEl = h2.parentNode;
// parentEl.style.backgroundColor = "blue";
// console.log(h2);

// var h3 = document.getElementById("h3");
// h3.setAttribute("class", "ahmed");
// console.log(h3);

// var attributesList = h3.attributes;
// console.log(attributesList);

// var propertyAttr = h3.hasAttribute("title");
// console.log(propertyAttr);

// var data = {
//     myName: "ahmed",
//     title: "Software Engr"
// };

// console.log(data.hasOwnProperty("myNameee"));

// var propertyExist = "myNameee" in data;
// console.log(propertyExist);



// var parentContainer = document.getElementById("container");
// // console.log(parentContainer);

// var h1Tag = document.createElement("h1");
// var h1Text = document.createTextNode("Welocme to JS");
// h1Tag.appendChild(h1Text);
// // console.log(h1Tag);

// parentContainer.appendChild(h1Tag);

// var arr = [1, 3, 5];
// console.log(arr);
// console.log(typeof arr);




// var data = {
//     myName: "ahmed",
//     title: "Software Engr",
//     picnic: true
// };

// data.myName = "muhammad ahmed";
// delete data.picnic;
// data.myLocation = "nzaimabad";
// console.log(data);

var val1 = 12;
var val2 = 3;
var calculateValues = eval(val1 + "+" + val2);
console.log(calculateValues);