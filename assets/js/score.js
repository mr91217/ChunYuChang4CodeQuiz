var scoreshitname = localStorage.getItem("name")
var scoreshit = localStorage.getItem("Highscore")
var h3 = document.createElement(h3);
h3.textContent = "1." + scoreshitname + "---" + scoreshit;
scoreName.appendChild(h3);