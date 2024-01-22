// let titulo = document.querySelector("h1"); 
// titulo.innerHTML = "Jogo número secreto";

// let paragrafo = document.querySelector("p")
// paragrafo.innerHTML = "Escolha um número entre 1 e 10 " ; 

//variaveis 
let listaDeNumerosSorteados = [];
let numeroLimite = 10 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ; 

//criar função exibir texto 
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
   
    exibirTextoNaTela("h1", "Jogo do número secreto ")
    exibirTextoNaTela("p","Escolha um número entre 1 e 10")
}
 //chamar a função
exibirMensagemInicial();


// criar função verificar chute 
function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute==numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto! em ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // pra pegar o botão por id , deicar o botão ativo 
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor ');
    
        }else{
            exibirTextoNaTela('p','O numero secreto é maior ');
        }
        tentativas ++;
        limparCampo();
    }

    
}
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 ) ; // para retornar o valor 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados=[]}
    //pra verificar se o numero ja foi escolhido e jogar na lista   
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1 ;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true)

}
