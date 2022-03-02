let pvlvm = 0;
document.addEventListener("click", sdsd);
document.getElementById("cwcyW").addEventListener("click", musicOff);
document.getElementById("YyfJm").addEventListener("click", musicOn);
var secCounter = 0;
var x = setInterval(musCounter, 1000);
function musCounter() {
    secCounter++;
    var secSound = document.getElementById("secSound");
    if(secCounter > 67) {
        secSound.play();
        clearInterval(x);
    }
}
function beans() {
    console.log('%c TheHigherUps Classified 2022', 'color:red; font-size: 30px; background-color: white;');
    console.log('%c WARNING!', 'background-color: #cc3300; color: white; padding-right: 25px; font-size: 50px;');
    console.log('%c Pasting or Entering Anything Into The Console May Put Your Account At Risk', 'color: white; background-color: #cc3300; font-size: 20px;');
}
function musicOn() {
    audio = document.getElementById("auii");
    buttonOff = document.getElementById("cwcyW");
    buttonOn = document.getElementById("YyfJm");
    buttonOn.style.display = "none";
    buttonOff.style.display = "grid";
    audio.muted = false;
    document.cookie = "musicStatus = on"
}
function musicOff() {
    audio = document.getElementById("auii");
    buttonOff = document.getElementById("cwcyW");
    buttonOn = document.getElementById("YyfJm");
    buttonOn.style.display = "grid";
    buttonOff.style.display = "none";
    audio.muted = true;
    document.cookie = "musicStatus = off"
}
// function CCMoJ() {
//     var aud = document.getElementById("auii");
//     var btn = document.getElementById("jyFfS");
//     aud.pause();
//     btn.remove();
// }
function sdsd() {
    var btn = document.querySelector("div.EaLpb");
    var aud = document.getElementById("auii");
    btn.style.display = "grid";
    aud.play();
}
function cdNl() {
    document.getElementById("ZzNmm").style.display = "none";
}
function uiTx() {
    window.location = 'account';
}
function KtYs() {
    pvlvm++
    if (pvlvm >= 7) {
        window.location = "/checkout"
    }
}
function Hknt() {
    window.location = 'you_suck_you_fucking_whore_ass_bitch_suck_my_fat_dick'
}
function ayZu() {
    var el = document.getElementById("ZILb").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    var adsDisplay = document.querySelector("ins.adsbygoogle")
    if(el == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
function vKacI() {
    var bb = document.getElementById("bmPpJ").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    if(bb == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
function plgSG() {
    var bb = document.getElementById("xgGWr").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    if(bb == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
// Redirection to Products
function raYk() {
    window.location = 'lethal_beans';
}
function toShop() {
    window.location = 'https://www.thehigherups.org/products/assault-bench/order-assault-bench';
}
