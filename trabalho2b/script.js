let numx = document.querySelector("#numx");
let numy = document.querySelector("#numy");
let numz = document.querySelector("#numz");
let botao1 = document.querySelector("#botao1");
let resultado1 = document.querySelector("#resultado1");
 
function calcular1 (){
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
    
botao1.onclick = function (){
    calcular1();
}
//questao 3

let ano = document.querySelector("#ano");
let valor = document.querySelector("#valor");
let botao3 = document.querySelector("#botao3");
let resultado3 = document.querySelector("#resultado3");


function calcular3 (){
    let a = Number(ano.value);
    let v = Number(valor.value);
    let imposto = a < 1990 ? v * 0.01 : v * 0.015;

    if (!a|| !v) {
        alert("Preencha os dois campos.");
        return;
    }
    resultado3.innerHTML = "Imposto: R\$ " + imposto.toFixed(2);
    
}

botao3.onclick = function (){
    calcular3();
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

//questoes 7  
let preco = document.querySelector("#preco");
let pagamento = document.querySelector("#pagamento");
let botao7 = document.querySelector("#botao7");
let resultado7 = document.querySelector("#resultado7");

function calcular7 (){
    let p7 = Number(preco.value);
    if (isNaN(p7)|| p7 <= 0) {
        alert("Por favor, insira um valor!");
        return;
    }
    let condpagamento = pagamento.value;
    let totalpago = 0; 
    let mensagem = "";

    switch(condpagamento) {
        case 'a': 
            let desconto10 = p7 * (10/100);
            totalpago = p7 - desconto10;
            mensagem = `&agrave; vista no dinheiro ou cheque: Desconto 10%.
             O total a pagar &eacute; R$ ${totalpago.toFixed(2)}.`;
             break;
        case 'b':
            let desconto15 = p7 * (15/100); 
            totalPago = p7 - desconto15;
            mensagem = `À vista no cart&atilde;o de cr&eacute;dito: Desconto de 15%. O total a pagar é R$ ${totalPago.toFixed(2)}.`;
            break;
        case 'c':
            totalPago = p7;
            mensagem = `Em duas vezes, sem juros. O total a pagar &eacute; R$ ${totalPago.toFixed(2)}.`;
            break;
        case 'd':
            let juros10 = p7 * (10/100); 
            totalPago = p7 + juros10; 
            mensagem = `Em duas vezes, com juros de 10%. O total a pagar é R$ ${totalPago.toFixed(2)}.`;
            break;
        default:
            mensagem = "Opção inválida.";
            break;
    }

    resultado7.innerHTML = mensagem;
}  
botao7.onclick = function (){
    calcular7();

}  
