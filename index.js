const allDiv = document.querySelectorAll('.identity')
const button = document.getElementById('btn-submit')
const errorDiv = []
let messageError = [
    'First Name cannot be empty',
    'Last Name cannot be empty',
    'Looks like is not an email',
    'Password cannot be empty'
]

allDiv.forEach((div, index) => {
    const newDiv = document.createElement('div')
    newDiv.className = 'error-message'
    newDiv.innerHTML = `<span>${messageError[index]}</span>`
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'right'
    newDiv.style.color = 'red'
    newDiv.style.fontSize = '11px'
    newDiv.style.fontStyle = 'italic'
    newDiv.style.visibility = 'hidden'
    errorDiv.push(newDiv)
    div.after(newDiv)
})


button.addEventListener('click', () => {

    button.style.backgroundColor = 'hsl(159, 53%, 66%)' 

    setTimeout(() => {
        button.style.backgroundColor = ""
    }, 150)


allDiv.forEach((div, index) => {

    const input = div.querySelector('input')
    const errorIcon = div.querySelector('img')

    if (input && input.value.trim() === '') {
        errorDiv[index].style.visibility = 'visible'
        errorIcon.style.visibility = 'visible'
        div.style.border = '2px solid red'
    } else {
        errorDiv[index].style.visibility = 'hidden'
    }
})

})