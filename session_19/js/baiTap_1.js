//bai 1
let hideButton = document.getElementById("hide-button");
let showButton = document.getElementById("show-button");
let text = document.getElementById("hidden-text");

hideButton.onclick = function () {
    text.style.display = "none";
};

showButton.onclick = function () {
    text.style.display = "block";
};

//bai 2
let showBtn = document.getElementById("show_btn");
let boxHide = document.querySelector(".div1")
let bodyBgr = document.querySelector(".div1_brg")
let icon = document.getElementById("hide_box")
showBtn.onclick = function () {
    boxHide.style.visibility = "visible";
    bodyBgr.style.background = "rgba(117, 117, 117, 0.49)"
}
icon.onclick = function () {
    boxHide.style.visibility = "hidden";
    bodyBgr.style.background = "none"
}
//bai3
let box1 = document.querySelector("._one")
let box2 = document.querySelector("._two")
let box3 = document.querySelector("._three")
let brg = document.querySelector(".div3")
box1.addEventListener("mouseover", function () {
    brg.style.background = "#ea0000"
})
box1.addEventListener("mouseout", function () {
    brg.style.background = "none"
})
box2.addEventListener("mouseover", function () {
    brg.style.background = "#002cff"
})
box2.addEventListener("mouseout", function () {
    brg.style.background = "none"
})
box3.addEventListener("mouseover", function () {
    brg.style.background = "#ffe800"
})
box3.addEventListener("mouseout", function () {
    brg.style.background = "none"
})

//bai 4
let showText = document.querySelector(".div4");
let textHide = document.querySelector(".text_hide");
showText.addEventListener("mouseover", function () {
    textHide.style.visibility = "visible"
})
showText.addEventListener("mouseout", function () {
    textHide.style.visibility = "hidden"
})

//bai 5

let darkModeButton = document.getElementById("dark_mode");
let isDarkMode = false;

darkModeButton.addEventListener("click", function() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
let brgDiv5= document.querySelector(".div5")
function enableDarkMode() {
    brgDiv5.style.backgroundColor = "#000";
    brgDiv5.style.color = "#fff";
}

function disableDarkMode() {
    brgDiv5.style.backgroundColor = "#fff";
    brgDiv5.style.color = "#000";
}