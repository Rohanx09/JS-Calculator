
let string = ""; // initial string
let buttons = document.getElementsByClassName("btn");

//Array.form breaks the arr components into each string and all operations are possible on strings in js
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click" , (e) =>{
        if(e.target.innerHTML == "="){ 
            try {
                let result = eval(string);//  ebals use to evaluate mathematical expressions written as strings.
                string = result.toString(); // convert result to string and store it
                document.querySelector("input").value = string;
            } catch (error) {
                document.querySelector("input").value = "Error";
            }
         } else if(e.target.innerHTML == "Ac"){
                string = "";
                document.querySelector('input').value = string;

            }
         else {
            console.log(e.target);
            string = string + e.target.innerHTML; // append clicked button's value to string
            document.querySelector('input').value = string;
        }
    });
});
// let string = ""; // intitail 
// let buttons = document.getElementsByClassName("btn");


// //Array.form breaks the arr components into each string and all operations are possible on strings in js 
// Array.from(buttons).forEach((btn)=>{
//     btn.addEventListener("click" , (e) =>{
//         if(e.target.innerHTML == "="){ 
//             string = eval(string); // eval saves value to local storage
//             document.querySelector("input").value=string;
//         }
//         else{
//             console.log(e.target)
//             string = string + e.target.innerHTML; // string is being change sto click item by innerHTML prop
//             document.querySelector('input').value = string;// puting changed value to input string 
//         }
//         try {
//             e.target.value === string;
//         } catch (error) {
//             document.querySelector("input").value="Error";
            
//         }
//     })
// })