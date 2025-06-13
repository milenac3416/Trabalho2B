let numx = document.querySelector("#numx");
let numy = document.querySelector("#numy");
let numz = document.querySelector("#numz");
let botao1 = document.querySelector("#botao1");
let resultado1 = document.querySelector("#resultado1");

function calcular1() {
    let x = Number(numx.value);
    let y = Number(numy.value);
    let z = Number(numz.value);
    // resposta 
    let r1 = "";

    if (x === y && y === z) {
        r1 = "Equil&aacute;tero: os tr&ecirc;s lados s&atilde;o iguais.";
    } else if (x === y || x === z || y === z) {
        r1 = "Is&oacute;sceles: dois lados s&atilde;o iguais.";
    } else {
        r1 = "Escaleno: todos os lados s&atilde;o diferentes.";
    }
    resultado1.innerHTML = r1;
}

botao1.onclick = function () {
    calcular1();
}

//questao 2

let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let botao2 = document.querySelector("#botao2");
let resultado2 = document.querySelector("#resultado2");

function calcular2() {
    let ps = Number(peso.value);
    let altr = Number(altura.value);

    let imc = (ps / (altr * altr));

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado2.innerHTML = "Valor IMC: " + imc + "<br>" + "<br>" +
        "Classificacao: " + classificacao;
}

botao2.onclick = function () {
    calcular2();
}

//questao 3

let ano = document.querySelector("#ano");
let valor = document.querySelector("#valor");
let botao3 = document.querySelector("#botao3");
let resultado3 = document.querySelector("#resultado3");


function calcular3() {
    let a = Number(ano.value);
    let v = Number(valor.value);
    let imposto = a < 1990 ? v * 0.01 : v * 0.015;

    if (!a || !v) {
        alert("Preencha os dois campos.");
        return;
    }
    resultado3.innerHTML = "Imposto: R\$ " + imposto.toFixed(2);

}

botao3.onclick = function () {
    calcular3();
}

//questao 4

let cargo = document.querySelector("#cargo");
let salario = document.querySelector("#salario");
let botao4 = document.querySelector("#botao4");
let resultado4 = document.querySelector("#resultado4");

function calcular4() {
    let crg = Number(cargo.value);
    let slr = Number(salario.value);
    let percentual = "";

    if (crg = 101) {
        percentual = 10;
    } else if (cargo = 102) {
        percentual = 20;
    } else if (cargo = 103) {
        percentual = 30;
    } else {
        percentual = 40;
    }

    let aumento = slr * (percentual / 100);
    let novoSalario = slr + aumento;
    let diferenca = novoSalario - slr;

    resultado4.innerHTML = "Salário antigo: R$" + slr + "<br>" + "<br>" +
        "Novo salário: R$" + novoSalario + "<br>" + "<br>" +
        "Diferença salarial: R$" + diferenca;
}

botao4.onclick = function () {
    calcular4();
}

//questao 5

let saldo = document.querySelector("#saldo");
let botao5 = document.querySelector("#botao5");
let resultado5 = document.querySelector("#resultado5");

function calcular5() {
    let s5 = Number(saldo.value);


    if (isNaN(s5) || s5 < 0) {
        saldo.classList.add('invalid');
        resultado5.textContent = '';
        return alert('Invalid');
    }

    saldo.classList.remove('invalid');


    let percentual = s5 <= 200 ? 0 : s5 <= 400 ? 0.2 : s5 <= 600 ? 0.3 : 0.4;
    let valorCredito = s5 * percentual;


    resultado5.innerHTML = `Saldo M&eacute;dio: R$ ${s5.toFixed(2)} - ${valorCredito > 0 ? `Cr&eacute;dito concedido: R$ ${valorCredito.toFixed(2)}` : 'Nenhum cr&eacute;dito dispon&iacute;vel.'}`;
}


botao5.onclick = function () {
    calcular5();
}

//questao 6

let codigo = document.querySelector("#codigo");
let quantidade = document.querySelector("#quantidade");
let botao6 = document.querySelector("#botao6");
let resultado6 = document.querySelector("#resultado6");

function calcular6() {
    let cdg = Number(codigo.value);
    let qntd = Number(quantidade.value);
    let preco = "";

    if (cdg = 1) {
        preco = 11.00
    } else if (cdg = 2) {
        preco = 8.50
    } else if (cdg = 3) {
        preco = 8.00
    } else if (cdg = 4) {
        preco = 9.00
    } else if (cdg = 5) {
        preco = 10.00
    } else if (cdg = 6) {
        preco = 4.50
    } else {
        preco = "código invalido";
    }

    let valorSerPago = preco * qntd;

    resultado6.innerHTML = "Valor total a ser pago pelo lanche: R$" + valorSerPago;

}

botao6.onclick = function () {
    calcular6();
}

//questoes 7  
let preco = document.querySelector("#preco");
let pagamento = document.querySelector("#pagamento");
let botao7 = document.querySelector("#botao7");
let resultado7 = document.querySelector("#resultado7");

function calcular7() {
    let p7 = Number(preco.value);
    if (isNaN(p7) || p7 <= 0) {
        alert("Por favor, insira um valor!");
        return;
    }
    let condpagamento = pagamento.value;
    let totalpago = 0;
    let mensagem = "";

    switch (condpagamento) {
        case 'a':
            let desconto10 = p7 * (10 / 100);
            totalpago = p7 - desconto10;
            mensagem = `&agrave; vista no dinheiro ou cheque: Desconto 10%.
             O total a pagar &eacute; R$ ${totalpago.toFixed(2)}.`;
            break;
        case 'b':
            let desconto15 = p7 * (15 / 100);
            totalPago = p7 - desconto15;
            mensagem = `À vista no cart&atilde;o de cr&eacute;dito: Desconto de 15%. O total a pagar é R$ ${totalPago.toFixed(2)}.`;
            break;
        case 'c':
            totalPago = p7;
            mensagem = `Em duas vezes, sem juros. O total a pagar &eacute; R$ ${totalPago.toFixed(2)}.`;
            break;
        case 'd':
            let juros10 = p7 * (10 / 100);
            totalPago = p7 + juros10;
            mensagem = `Em duas vezes, com juros de 10%. O total a pagar é R$ ${totalPago.toFixed(2)}.`;
            break;
        default:
            mensagem = "Opção inválida.";
            break;
    }

    resultado7.innerHTML = mensagem;
}
botao7.onclick = function () {
    calcular7();
}

//questao 8

let nivel = document.querySelector("#nivel");
let quantidadeaulas = document.querySelector("#quantidadeaulas");
let botao8 = document.querySelector("#botao8");
let resultado8 = document.querySelector("#resultado8");

function calcular8() {
    let nvl = Number(nivel.value);
    let qda = Number(quantidadeaulas.value);
    let valorHoraAula = "";

    if (nvl = 1){
        valorHoraAula = 12.00
    } else if (nvl = 2) {
        valorHoraAula = 17.00
    } else if (nvl = 3) {
        valorHoraAula = 25.00
    }

    let salario = valorHoraAula * qda * 4.5;

    resultado8.innerHTML = "Valor do salário do professor: R$" + salario + ",00";

}

botao8.onclick = function () {
    calcular8();
}  

 
