const text = document.querySelector('.text')
const input = document.querySelector("#fname")
console.log(text.innerHTML)

input.addEventListener('input', () => {
    text.innerHTML = input.value
})

