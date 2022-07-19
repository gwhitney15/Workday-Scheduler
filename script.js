var currentDay = document.querySelector("#currentDay")
var button = document.querySelectorAll(".saveBtn");
var today = moment();
var textArea = document.querySelector("#textArea")
var textArea2 = document.querySelector("#textArea2")
var textArea3 = document.querySelector("#textArea3")
var textArea4 = document.querySelector("#textArea4")
var textArea5 = document.querySelector("#textArea5")
var textArea6 = document.querySelector("#textArea6")
var textArea7 = document.querySelector("#textArea7")
var textArea8 = document.querySelector("#textArea8")
var textArea9 = document.querySelector("#textArea9")
var textArea10 = document.querySelector("#textArea10")
var scheduleHour = document.querySelectorAll(".time-block")
var hours = document.querySelectorAll(".row");
currentDay.textContent = today.format("MMM Do YY");
var present = moment().hour();
console.log(present)
//var textToSave = localStorage.getItem(textArea);

//textArea.textContent = textToSave;
textArea.textContent = localStorage.getItem("textArea");
textArea2.textContent = localStorage.getItem("textArea2");
textArea3.textContent = localStorage.getItem("textArea3");
textArea4.textContent = localStorage.getItem("textArea4");
textArea5.textContent = localStorage.getItem("textArea5");
textArea6.textContent = localStorage.getItem("textArea6");
textArea7.textContent = localStorage.getItem("textArea7");
textArea8.textContent = localStorage.getItem("textArea8");
textArea9.textContent = localStorage.getItem("textArea9");
textArea10.textContent = localStorage.getItem("textArea10");


//saves when clicked and sets the text string in local storage.
button.forEach(save => {
    save.addEventListener("click", function () {
        var enteredText = document.getElementById("textArea").value;
        localStorage.setItem("textArea", enteredText);

        var enteredText2 = document.getElementById("textArea2").value;
        localStorage.setItem("textArea2", enteredText2);

        var enteredText3 = document.getElementById("textArea3").value;
        localStorage.setItem("textArea3", enteredText3);

        var enteredText4 = document.getElementById("textArea4").value;
        localStorage.setItem("textArea4", enteredText4);

        var enteredText5 = document.getElementById("textArea5").value;
        localStorage.setItem("textArea5", enteredText5);

        var enteredText6 = document.getElementById("textArea6").value;
        localStorage.setItem("textArea6", enteredText6);

        var enteredText7 = document.getElementById("textArea7").value;
        localStorage.setItem("textArea7", enteredText7);

        var enteredText8 = document.getElementById("textArea8").value;
        localStorage.setItem("textArea8", enteredText8);

        var enteredText9 = document.getElementById("textArea9").value;
        localStorage.setItem("textArea9", enteredText9);

        var enteredText10 = document.getElementById("textArea10").value;
        localStorage.setItem("textArea10", enteredText10);
    }

    )
})




//getting text content from nodes
var times = scheduleHour[0].firstChild.data
var times1 = scheduleHour[1].firstChild.data
var times2 = scheduleHour[2].firstChild.data
var times3 = scheduleHour[3].firstChild.data
var times4 = scheduleHour[4].firstChild.data
var times5 = scheduleHour[5].firstChild.data
var times6 = scheduleHour[6].firstChild.data
var times7 = scheduleHour[7].firstChild.data
var times8 = scheduleHour[8].firstChild.data
var times9 = scheduleHour[9].firstChild.data
//var times = JSON.stringify(scheduleHour);

console.log(times)

//compares to each row's time then adds the appropriate class
if (times < present) {
    textArea.classList.add('past');
} else if (times == present) {
    textArea.classList.add('present');
} else if (times > present) {
    textArea.classList.add('future');
}
if (times1 < present) {
    textArea2.classList.add('past');
} else if (times1 == present) {
    textArea2.classList.add('present');
} else if (times1 > present) {
    textArea2.classList.add('future');
}
if (times2 < present) {
    textArea3.classList.add('past');
} else if (times2 == present) {
    textArea3.classList.add('present');
} else if (times2 > present) {
    textArea3.classList.add('future');
}
if (times3 < present) {
    textArea4.classList.add('past');
} else if (times3 == present) {
    textArea4.classList.add('present');
} else if (times3 > present) {
    textArea4.classList.add('future');
}
if (times4 < present) {
    textArea5.classList.add('past');
} else if (times4 == present) {
    textArea5.classList.add('present');
} else if (times4 > present) {
    textArea5.classList.add('future');
}
if (times5 < present) {
    textArea6.classList.add('past');
} else if (times5 == present) {
    textArea6.classList.add('present');
} else if (times5 > present) {
    textArea6.classList.add('future');
}
if (times6 < present) {
    textArea7.classList.add('past');
} else if (times6 == present) {
    textArea7.classList.add('present');
} else if (times6 > present) {
    textArea7.classList.add('future');
}
if (times7 < present) {
    textArea8.classList.add('past');
} else if (times7 == present) {
    textArea8.classList.add('present');
} else if (times7 > present) {
    textArea8.classList.add('future');
}
if (times8 < present) {
    textArea9.classList.add('past');
} else if (times8 == present) {
    textArea9.classList.add('present');
} else if (times8 > present) {
    textArea9.classList.add('future');
}
if (times9 < present) {
    textArea10.classList.add('past');
} else if (times9 == present) {
    textArea10.classList.add('present');
} else if (times9 > present) {
    textArea10.classList.add('future');
}
