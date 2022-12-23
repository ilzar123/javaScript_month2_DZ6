const plus = document.querySelector('.increment')
const minus = document.querySelector('.decrement')
const input = document.querySelector('#input')

let num = 0;


plus.addEventListener('click', () => {
    num++
    input.value = num
})
minus.addEventListener('click', () => {
    num--
    input.value = num
})
