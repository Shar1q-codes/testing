// 27 - What is the difference between filter and find
// 28 - Explain for Each loop
// 29 - What is Prototype  and Prototype Chaining ?
// 30 - What is Call apply bind method 
// 31 - Real DOM VS Virtual DOM
// 32 - Implement code to check a number is palindrome or not ? 
// 34 - Difference between Splice and slice 
// 35 - What is Execution Conext



function changeName(){
    var x= document.getElementById('change')
    if(x.innerText === "Saad"){
   x.innerText="Shariq"
    }
    else if(x.innerText === "Shariq"){
        x.innerText="Khaleel"
    }
    else{
        x.innerText="Saad"
    }
}

function transform(){
    var y = document.getElementById('change')
    y.classList.toggle('transform')
}


