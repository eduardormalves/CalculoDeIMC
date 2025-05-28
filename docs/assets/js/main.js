const form = document.querySelector('#form') //capturando o formulario

form.addEventListener('submit', function (e) {
    e.preventDefault(); //previniu ser enviado
    const inputPeso = e.target.querySelector('#peso')
    const inputALtura = e.target.querySelector('#altura')
    //capturando dados dos inputs

    const peso = Number(inputPeso.value)
    const altura = Number(inputALtura.value)
    //convertendo os inputs para apenas numeros

    if(!peso) {
        setResultado ('Peso inválido', false);
        return;
    }
    //se peso retornar um NaN, já encerra e mostra peso invalido

    if(!altura) {
        setResultado ('Altura inválida', false);
        return;
    }
    //se altura retornar um NaN, já encerra e mostra altura invalido


    const imc = getImc(peso, altura) //calculo do IMC na funcao getImc e setada na variavel imc
    const nivelImc = getNivelImc(imc) //pegar texto correspondendo ao imc na variavel getNivelImc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`//mensagem escrita na div no HTML

    setResultado(msg, true) //setando resultado com o true, para colocar a classe verdadeira
});
//funcao criada para escutar o evento de enviar

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //array de niveis

    if(imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
    //ifs criados para verificar o valor do imc e qual nivel deve ser retornado, não foi necessário as {} em cada if, pois era muito curto

}
//funcao criada para verificar nivel correspondente ao IMC

function getImc(peso, altura){
    const imc = peso / altura ** 2; //calculo
    return imc.toFixed(2) //retornando valor e fixando em 2 casas decimais
}
//Funcao criada para calcular o imc

function criaP () {
    const p = document.createElement('p'); //Criando o elemento 'p'
    return p;
}
//Funcao criada para criar um paragrafo 

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    //seleciona o id resultado e zera o HTML

    const p = criaP();
    //variavel p criada para pegar a criação do P na funcao

    if(isValid) {
        p.classList.add('paragrafo-resultado')
        //se for verdadeiro, retorna a classe com fundo verde
    } else {
        p.classList.add('bad')
        //se for falso, retorna a classe com fundo vermelho
    }
    //if valida se é valido os valores

    p.innerHTML = msg;
    resultado.appendChild(p)

}
//Funcao criada para setar o resultado, recebe uma mensagem e se resultado é valido