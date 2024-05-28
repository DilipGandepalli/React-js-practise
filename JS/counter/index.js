let increasebtn = document.getElementById('increase');
let decreasebtn = document.getElementById('decrease');
let counterValues = document.getElementById('countLabel')
let resetbtn = document.getElementById('reset')

let count = 0;

increasebtn.onclick = function(){
    count ++;
    counterValues.textContent = count;
}
 
decreasebtn.onclick =  function(){
    count --;
    counterValues.textContent =  count;
}

resetbtn.onclick = function(){
    counterValues.textContent = 0;
}

const date =  new Date();

console.log(date.getMinutes())
// console.log(Math.PI)
// console.log(Math.ceil(3.21)) //it will give the next number. ans: 4
// console.log(Math.round(3.49)) //if it was less then 3.5 it will give 3 otherwise it will give 4. ans:3
// console.log(Math.floor(3.6)) // it will down to the nearest number.
// console.log(Math.pow(2,3)) //its 2**3
// console.log(Math.trunc(4.8)) //it will down to the nearest number.
// console.log(Math.sqrt(4))





