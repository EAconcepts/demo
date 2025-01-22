

const greet = document.createElement('h3')

greet.textContent = "Welcome home!"
console.log(greet)

document.body.appendChild(greet)


const box = document.createElement('div')
box.style.background= 'purple'
box.style.height='40px'
box.style.width='40px'

document.body.appendChild(box)


const list1 = document.createElement('p')
const list2 = document.createElement('p')
list1.textContent ="Changing Content"
list2.textContent ="Changing Attributes"

const listParent = document.querySelector('.lists')

listParent.appendChild(list1)
listParent.appendChild(list2)


const html = `
   
        <h3>Samsung Galaxy S23</h3>
        <p>Price: $1000</p>
        <p>Storage: 128GB</p>
        <p>Battery: 5000mAh</p>
   
`
const samsung = document.createElement('div')
samsung.innerHTML =html

document.body.appendChild(samsung)



const newP = document.createElement('p')
newP.textContent = "I am the new guy"

const ref = document.querySelector('.ref')

ref.insertBefore(newP, ref.firstChild)




// DATE OBJECT
const currentDate = new  Date()
console.log(currentDate.toLocaleString())

// let count = 0
// const timeEl = document.createElement('h3')
// document.body.appendChild(timeEl)

// const greetInterval = setInterval(() => {
//     console.log('hi')
//     const time = new Date()
//     // console.log(time.toLocaleString())
//     document.body.innerHTML = time
// }, 1000);

// console.log(count)
// if(count == 5) {
//     clearInterval(greetInterval)
//     console.log('I am suppose to clear the greeting interval')
// }

// setTimeout(() => {
//     console.log("I am delayed for 3 secs because I am asynchronous")
//     clearInterval(greetInterval)
// }, 1000);

// console.log("This is a synchronous message")



// LocalStorage
const name = "John Doe"

