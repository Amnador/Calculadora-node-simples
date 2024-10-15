const prompt = require('prompt-sync')();

const soma = require('./soma');
const subtracao = require('./subtracao');
const divisao = require('./divisao');
const multiplicacao = require('./multiplicacao');

console.log("Calculadora Básica");

const num1 = readline.question("Digite o primeiro número: "));
const operacao = prompt("Escolha a operação (+, -, /, *): ");
const num2 = readline.question("Digite o segundo número: "));

let resultado;

switch (operacao) {
    case '+':
        resultado = soma(num1, num2);
        break;
    case '-':
        resultado = subtracao(num1, num2);
        break;
    case '/':
        resultado = divisao(num1, num2);
        break;
    case '*':
        resultado = multiplicacao(num1, num2);
        break;
    default:
        console.log("Operação inválida!");
        process.exit();
}

console.log(`Resultado: ${resultado}`);