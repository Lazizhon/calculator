let clear_btn =      document.getElementById('clear_btn');
let divide_btn =     document.getElementById('divide_btn');
let multiply_btn =   document.getElementById('multiply_btn'); 
let minus_btn =      document.getElementById('minus_btn');
let equal_btn =      document.getElementById('equal_btn');
let plus_btn =       document.getElementById('plus_btn');
let decimal_btn =    document.getElementById('decimal_btn');
let back_btn =       document.getElementById('back_btn');
let answer_display = document.getElementById('answer_display');
let zero_btn =       document.getElementById('zero_btn');
let one_btn =   document.getElementById('one_btn');
let two_btn =   document.getElementById('two_btn');
let three_btn = document.getElementById('three_btn');
let four_btn =  document.getElementById('four_btn');
let five_btn =  document.getElementById('five_btn');
let six_btn =   document.getElementById('six_btn');
let seven_btn = document.getElementById('seven_btn');
let eight_btn = document.getElementById('eight_btn');
let nine_btn =  document.getElementById('nine_btn');
let number_button =     document.querySelectorAll('.number_button');
let operator_button =   document.querySelectorAll('.operator_button');
let button =            document.querySelectorAll('button');
let inputArr = [];

let chosenOperator = "";

//Main Operators
function addNumbers(one, two){
    answer_display.value =  one + two
    inputArr.length = 0;
    inputArr.push(answer_display.value);
}
function minusNumbers(one, two){
    answer_display.value =  one - two
    inputArr.length = 0;
    inputArr.push(answer_display.value);
}
function multiplyNumbers(one, two){
    answer_display.value =  one * two
    inputArr.length = 0;
    inputArr.push(answer_display.value);
}
function divideNumbers(one, two){
    answer_display.value =  one / two
    inputArr.length = 0;
    inputArr.push(answer_display.value);
}



// Number Entry
number_button.forEach(function(el){ 
    el.addEventListener('click', function(){
        answer_display.value += el.innerHTML
    })
})
decimal_btn.addEventListener('click', function(){
    if(answer_display.value.includes(".")){
    }
    else{
        answer_display.value += this.innerHTML
    }
})
// Operator Selection 
operator_button.forEach(function(el){ 
    el.addEventListener('click', function(){
        // empty.push(el.innerHTML);
        if(answer_display.value != inputArr[0]){
            inputArr.push(answer_display.value);
        }
        answer_display.value = "";
        
        chosenOperator = el.innerHTML;
        console.log(chosenOperator);
        console.log(inputArr);
        
    })
})
clear_btn.addEventListener('click', function(){
    answer_display.value = "";
    inputArr.length = 0;
    console.log(inputArr);
})
back_btn.addEventListener('click', function(){
    let deleteLastOne = answer_display.value
    let assignIt = deleteLastOne.slice(0, -1)
    answer_display.value = assignIt
    // console.log(an);
})
equal_btn.addEventListener('click', function(){
    if(answer_display.value != ''){
        inputArr.push(answer_display.value);
    }
    if(chosenOperator == "+"){
        addNumbers(parseInt(inputArr[0]), parseInt(inputArr[1]))
    }
    if(chosenOperator == "-"){
        minusNumbers(parseInt(inputArr[0]), parseInt(inputArr[1]))
    }
    if(chosenOperator == "*"){
        multiplyNumbers(parseInt(inputArr[0]), parseInt(inputArr[1]))
    }
    if(chosenOperator == "/"){
        divideNumbers(parseInt(inputArr[0]), parseInt(inputArr[1]))
    }

    console.log(inputArr);
})



//user inputs number
//number is stored in a variable
//user chooses an operator
//operator is also stored in a variable
//then user inputs anothe number
//number is stored in a variable
// when user clicks = button 
//      first and secon inputs are calculated based on the chosen operator:

    //add everythings to an array
    //perform forech 
    //if char is equal to any +-*/ of these, then
        //take number before this char aand take number after this char, then
        // perform calculation

// resul is diplayed on the display

