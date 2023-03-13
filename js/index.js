// const x =15,
// y = 4,
// z = 100;


// console.log(Math.min(x,y,z))


// const numbers = [10,20,1,3,100,34,4542,2321,322];
// let minNum = numbers[0];
// let maxNum = numbers[0];

// for  ( let i = 0;i < numbers.length;i++){
//     mathMin = Math.min(Math.min, numbers[i]);
//     mathMax = Math.max(Math.max, numbers[i]);

// }
// console.log(mathMin , mathMax);



// const me ={
//     firstName: 'Samandar',
//     lastName : 'Turdiyev',
//     myAge: 17,
//     myJob: 'devoloper',
//     myInfo: function (){
//         return `men ${me.firstName} ${me.lastName} yoshim ${me.myAge} mening kasbim ${me.myJob}`
//     }
// };
// console.log(me.myInfo());



const form = document.querySelector('.form'),
 name = document.querySelector('.name'),
    relation =document.querySelector('.relation'),
    number =document.querySelector('.number'),
btn = document.querySelector('.btn'),
result =document.querySelectorAll('.resuld');

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    const result = document.querySelector('.resuld');
    result.classList.add('contact');

   let nameSpan = document.createElement('span')
    nameSpan.textContent = name.value;
    result.appendChild(nameSpan);

   let relatSpan = document.createElement('span')
    relatSpan.textContent = relation.value;
    result.appendChild(relatSpan);

   let numberSpan = document.createElement('span')
    numberSpan.textContent = number.value;
    result.appendChild(numberSpan);

   let removeBtn =document.createElement('button')
    removeBtn.textContent = 'delete';
    result.appendChild(removeBtn);
   
    removeBtn.addEventListener('click', () => {
        result.removeChild(nameSpan)
    })
    removeBtn.addEventListener('click', () => {
        result.removeChild(relatSpan)
    })
    removeBtn.addEventListener('click', () => {
        result.removeChild(numberSpan)
    })
    removeBtn.addEventListener('click', () => {
        result.removeChild(removeBtn)
    })

    form.reset();
})

btn.addEventListener("click", () => {
    

})



