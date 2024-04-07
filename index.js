// alert("JavaScipt linked!!");
// document.querySelectorAll("button").addEventListener("click",handleClick);

var arr=document.querySelectorAll(".drum");
var n=arr.length;
for( var i=0;i<n;i++){
    arr[i].addEventListener("click",function(){
        // console.log(this.innerHTML);
        // this.style.color="black";
        var letter=this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
    });
}

document.addEventListener("keydown",function(event){
    // alert("Key Pressed!!");
    var letter=event.key;
    makeSound(letter);
    buttonAnimation(letter);
    // console.log(event);
});

function makeSound(key){
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
            console.log("wrong input");
        break;
    }
}

function buttonAnimation(currKey){
    var activeButton=document.querySelector("."+currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// function handleClick(){
//     alert("I got clicked.");
// }

//Higher Order Functions
/* 
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}

*/