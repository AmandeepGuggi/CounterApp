let result = document.querySelector('.total > p')
const addBtn = document.querySelector('.plus')
const subBtn = document.querySelector('.minus')
const input = document.querySelector('input')
const reset = document.querySelector('.reset')

let sum = 0;

addBtn.addEventListener('click',()=>{
        const count = parseInt(result.innerText)
        const changeBy = parseInt(input.value)
        result.innerText = count + changeBy
})

subBtn.addEventListener('click',()=>{
    const count = parseInt(result.innerText)
    const changeBy = parseInt(input.value)
        result.innerText = count - changeBy
})

reset.addEventListener('click',()=>{
    result.textContent = 0
})

