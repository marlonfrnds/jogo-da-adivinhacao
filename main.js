const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()       
        screenTwo.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`
    }
    
    inputNumber.value = ''
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}