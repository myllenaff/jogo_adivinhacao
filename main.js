// variáveis
const input= document.querySelector("#inputNumber")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 0

//Eventos
input.focus()
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

// função callback
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão


  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ||
  (!Number(inputNumber.value)&& Number(inputNumber.value)!=0)){
    alert("Por favor, insira um número de 0 a 10!") 
}

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` 
  }

  inputNumber.value = ""
  xAttempts++

}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  input.focus()
}



