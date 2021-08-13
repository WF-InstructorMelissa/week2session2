var element1 = document.getElementsByTagName('header')
console.log(element1)

function bgChange(element) {
    console.log("You clicked the header")
    if(element.style.backgroundColor = '#ffe4c48a') {
        element.style.backgroundColor = '#ffe4c4'
    }
}

// function name() { 
// }
// declare a function give the name of name it requires no outside information { instructions start here}
// if (x) {
// }
// if (the following is true) {follow these instructions}

// for(let i= 0; i < 10; i++) {
// }
// for loops (where to start; where to end; how to proceed) {follow these instructions}

function hideProfile(element) {
    console.log('You clicked the Profile Picture')
    element.style.zIndex = '0'
}

function octoClick() {
    console.log("You clicked the Octocat")
    alert("You clicked the BookWorm Octocat")
    console.log("You closed the alert box")
}