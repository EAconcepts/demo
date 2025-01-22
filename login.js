const loginForm = document.querySelector("#login-form");

// console.log(loginForm)
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  if (password == "password") {
    document.querySelector("h4").textContent = `Login Successful!`;
    document.querySelector("h4").textContent += `\n Welcome ${email}`;
  } else {
    document.querySelector("h4").textContent = `Invalid email or password!`;
  }
  // console.log("form Submitted successfully")
});

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

// document.querySelector('h4').textContent =   `Welcome ${email}`


// Error Handling

// 10 + "5"
const a =10
const b = 5
try{
if(typeof a!= 'number' || typeof b!= 'number'){
    throw "You can only add numbers not strings"
}else{
    console.log(a + b)
}
}catch(e){
    console.log(e)
}


// try{
//     console.log(ade)
// }catch(error){
//     console.log(error.name)
// }

// console.log(tolu)




document.querySelector('#add-form').addEventListener('submit', (e)=>{
    e.preventDefault()

    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value

try{
const answer = parseInt(num1) + parseInt(num2)
console.log(answer)
if(isNaN(answer)){
    throw "You have entered and invalid number"
}else{
    document.getElementById('answer').textContent = `The sum of ${num1} and ${num2} is ${answer}`}
}catch(error){
    document.getElementById('answer').textContent = error
    console.log(error)
}
    
})


const supposedArray = {name:'tope'}
try{
supposedArray.forEach((item)=>console.log(item))
}catch(error){
    console.log("An array expected but got " + typeof supposedArray)
}