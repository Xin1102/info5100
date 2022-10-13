let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

//after we submit a form, the event will occur
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    result.textContent = translate;
    input.value="";
})

function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        return "fizzBuzz";
    } else if (number % 3 === 0){
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number;
    }
}