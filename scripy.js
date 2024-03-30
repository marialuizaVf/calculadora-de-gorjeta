let conta=0
let peassoas=0
let posrcentagem=0

const contaInput=document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta=Number(evento.target.value)
}

const pessoasInput=document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadedePessoas)

function receberQuantidadedePessoas(evento){
    const paragrafoErro= document.querySelector(".pessoas #erro")
    const divErro= document.querySelector(".pessoas .input-box")

    if(evento.target.value ==="0"){
        paragrafoErro.style.display="block"
        divErro.setAttribute("id","erro-div")
    } else {
        paragrafoErro.style.display="none"
        divErro.setAttribute("id","")
        pessoas= Number(evento.target.value)
    }
}

const botoesGorjetas= document.querySelectorAll(".gorjetas input[type='button']")
botoesGorjetas.forEach(botao => {
    botao.addEventListener("click", recerberPorcentagem)
})
function recerberPorcentagem(evento){
    posrcentagem=Number(evento.target.value)/100
}