

/*

pageYOffset, scrollTo, onscroll

*/

let myButton = document.getElementById("back-to-top-btn");

window.onscroll = function () {
        console.log(window.pageYOffset);
        if(window.pageYOffset >= 20){
            myButton.style.display ="block"
    }else{
            myButton.style.display="none"
        }
};

myButton.onclick = function () {
    console.log(window.scrollTo(0,0),{behavior: "smooth"});
    window.scrollTo(0,0)
}