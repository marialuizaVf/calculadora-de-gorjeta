let conta=0
let peassoas=0
let porcentagem=0

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
    botao.addEventListener("click", recerberPorcentagemBotao)
})
function recerberPorcentagemBotao(evento){
    botoesGorjetas.forEach(botao=>{
        botao.classList.remove("botao-ativo")
        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        }
    })
    porcentagem=parseFloat(evento.target.value) /100
}