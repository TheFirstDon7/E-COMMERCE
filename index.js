var MenuItems = document.getElementById("MenuItems")
MenuItems.style.maxHeight = "0px"
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}
//js for product gallery
var Productimg = document.getElementById("Productimg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
    Productimg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    Productimg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    Productimg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    Productimg.src = SmallImg[3].src;
}

// toggle login form
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";

}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";

}
