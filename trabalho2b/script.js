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


