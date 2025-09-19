import sleep from "./segurity.js"; 

window.clearDiv = (id) => {let div = document .querySelector (id); div .innerHTML = '';}
//1
window.positiveOrNegative = (number) => {
    let num = document .getElementById("ex-1").value;
    let result = document .getElementById("result-ex1");
    if (num.trim() === "") 
        {alert("digite um número no ex-1");
            return;
        }
        num = Number(num);
        if (isNaN(num)) 
             {result.innerText = "Por favor digite um número"; return;}

        if(num > 0) {result.innerText= "O número é positivo";}

         else if (num < 0) {result.innerText = "O número é negativo";}

       else {result.innerText = "O número é igual a zero";return;}

    }
window.checkMajority = () => {
    let idade = document.getElementById("ex-2").value;
    if (idade === "") {
        alert("Por favor digite algo no ex-2");
        return;
    }

    let result = "";
    if (idade >= 18) {
        result = "<p>Maior de idade</p>";
        document.getElementById("resultIdade").innerHTML = result;
        return;
    }
    result = "<p>Menor de idade</p>";
    document.getElementById("resultIdade").innerHTML = result;
    return;
}
window.ContagemProgressiva = () => {
    let div = document.getElementById("resultcontagem");
    div.innerHTML = "";
let contador = 0;
div.innerText = contador;
let intervalo = setInterval(() => {
    contador++;
    div.innerText = contador;
    if (contador >= 10) {
        clearInterval(intervalo);
        div.innerText = "Fim!";
    }
}, 1000);
}

window.tabuada = () => {
    let num = document.getElementById("ex-4").value;
     let div = document.getElementById("resultabu");
     div.innerHTML = "";
     if (num.trim() === "")
     {div.innerText = "digite um número!";
        return;
     }

num = Number(num);
if (isNaN(num)) {
    div.innerText = "Por favor, digite um número válido!";
    return;
}
let resultado = "<ul>";
for (let i = 1; i <= 10; i++) {resultado +=`<li>${num} x ${i} = ${num * i}</li>`;}
resultado += "</ul>";
div.innerHTML = resultado;}

window.ContagemRegressiva = () => {
    let div = document.getElementById("ContagemRegressiva");
    div.innerHTML = "";
let contador = 10;
div.innerText = contador;
let intervalo = setInterval(() => {
    contador--;
    div.innerText = contador;
    if (contador <= 0) {
        clearInterval(intervalo);
        div.innerText = "Fim!";
    }
}, 1000);
}
window.SenhaCorreta = () => {
    const senhaCorreta = "1234"; // Defina aqui a senha correta
    let resultado = document.getElementById("result");
    let tentativa = prompt("Digite a senha:");

    if (tentativa === null) {
        resultado.innerText = "Operação cancelada.";
        return;
    }

    if (tentativa === senhaCorreta) {
        resultado.innerText = "Senha correta! Acesso permitido.";
    } else {
        resultado.innerText = "Senha incorreta! Tente novamente.";
    }
}
window.Soma = () => {
    let resultado = document.getElementById("resultSoma");
    let n1 = prompt("Digite o primeiro número:");
    let n2 = prompt("Digite o segundo número:");

    if (n1 === null || n2 === null) {
        resultado.innerText = "Operação cancelada.";
        return;
    }

    n1 = Number(n1);
    n2 = Number(n2);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.innerText = "Por favor, digite números válidos!";
        return;
    }

    resultado.innerText = `A soma é: ${n1 + n2}`;
}

window.ehPar = () => {
    let num = prompt("Digite um número:");
    let resultado = document.getElementById("resultPar");

    if (num === null) {
        resultado.innerText = "Operação cancelada.";
        return;
    }

    num = Number(num);

    if (isNaN(num)) {
        resultado.innerText = "Por favor, digite um número válido!";
        return;
    }

    if (num % 2 === 0) {
        resultado.innerText = `O número ${num} é par.`;
    } else {
        resultado.innerText = `O número ${num} é ímpar.`;
    }
}
window.somarAteLimite = () => {
    let limite = prompt("Digite o número limite:");
    let resultado = document.getElementById("resultSomaLimite");

    if (limite === null) {
        resultado.innerText = "Operação cancelada.";
        return;
    }

    limite = Number(limite);

    if (isNaN(limite) || limite < 1) {
        resultado.innerText = "Por favor, digite um número inteiro maior que zero!";
        return;
    }

    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        soma += i;
    }
    resultado.innerText = `A soma dos números de 1 até ${limite} é: ${soma}`;
}
window.primo = () => {
    let num = document.getElementById("ex-10").value;
    let resultado = document.getElementById("resultPrimo");

    if (num.trim() === "") {
        resultado.innerText = "Digite um número!";
        return;
    }

    num = Number(num);

    if (isNaN(num) || num < 2) {
        resultado.innerText = "Digite um número inteiro maior ou igual a 2!";
        return;
    }

    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) 
        {
resultado.innerText = `O número ${num} é primo.`;
    } else {
        resultado.innerText = `O número ${num} não é primo.`;
    }
}