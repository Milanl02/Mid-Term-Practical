var jeffy = document.body.querySelector(".midterm");
var junior = document.body.querySelector(".marvin");

var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for (var i = 0; i < list.length; i++) {
    var razor = document.createElement("div");
    var nameRazor = document.createElement("h2");
    var ageRazor = document.createElement("h3");
    nameRazor.innerHTML = "Name: " + list[i].name
    ageRazor.innerHTML = "Age: " + list[i].age
    if (list[i].age > 25) {
        ageRazor.style.color = "green"
    }
    razor.appendChild(nameRazor);
    razor.appendChild(ageRazor);
    jeffy.appendChild(razor);
}

var number = 5

junior.innerHTML="Counter: " + number

function counter(){
    number = number + 1;
    junior.innerHTML="Counter: " + number
}

document.body.querySelector(".increaseButton").addEventListener("click", function(){
    counter();
})