//Primeiro exercício:
var nome = "Sofia";
var idade = 23;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.\n`);

//Segundo exercício:
var nome = "Mauro";
var cidade = "Natal";
console.log(`${nome} é de ${cidade}\n`);

//Terceiro exercício:
const num1 = 10;
const num2 = 2;
const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}\n`);

//Cálculo de área:
var base = 2;
var altura = 8;
var area = (base * altura) /2;
console.log(`A área do triângulo é: ${area}\n`);

//Cálculo de média:
const n1 = 5;
const n2 = 9;
const n3 = 7;
const media = (n1 + n2 + n3) / 3;
console.log(`A sua média é: ${media}\n`);

//Desconto:
const precoOriginal = 100;
const percentualDesconto = 20;
const desconto = (precoOriginal * percentualDesconto) / 100;
const precoFinal = precoOriginal - desconto;
console.log(`O preço original do produto é R$${precoOriginal}.`);
console.log(`Após um desconto de R$${percentualDesconto}%, o preço final é R$${precoFinal}.\n`);

//Imposto de renda
function calcularImpostoRenda(valorBruto) {
    let imposto = 0;

    // Tabela de alíquotas simplificada
    if (valorBruto <= 22847.76) {
        imposto = 0;
    } else if (valorBruto <= 33919.80) {
        imposto = (valorBruto - 22847.76) * 0.075; 
    } else if (valorBruto <= 45012.60) {
        imposto = (valorBruto - 33919.80) * 0.15 + 825.38; 
    } else if (valorBruto <= 55976.16) {
        imposto = (valorBruto - 45012.60) * 0.225 + 1636.38; 
    } else {
        imposto = (valorBruto - 55976.16) * 0.275 + 2898.38; 
    }

    return imposto.toFixed(2);
}

let valorBruto = 35000;
let impostoCalculado = calcularImpostoRenda(valorBruto);
console.log(`Para um valor bruto de R$ ${valorBruto.toFixed(2)}, o imposto de renda a pagar é R$ ${impostoCalculado}.\n`);

//Conversor de modedas.
function converterMoeda(valor, taxaCambio) {
  return valor * taxaCambio;
}

const taxaDolarParaReal = 5.43; 
const taxaEuroParaReal = 6.7; 
const taxaRealParaDolar = 0.18 / taxaDolarParaReal; 
const taxaRealParaEuro = 0.16 / taxaEuroParaReal; 

let valorMoedaInicial = 100; 
let moedaInicial = "USD"; 
let moedaFinal = "BRL"; 

let valorConvertido;

if (moedaInicial === "USD" && moedaFinal === "BRL") {
  valorConvertido = converterMoeda(valorMoedaInicial, taxaDolarParaReal);
} else if (moedaInicial === "EUR" && moedaFinal === "BRL") {
  valorConvertido = converterMoeda(valorMoedaInicial, taxaEuroParaReal);
} else if (moedaInicial === "BRL" && moedaFinal === "USD") {
  valorConvertido = converterMoeda(valorMoedaInicial, taxaRealParaDolar);
} else if (moedaInicial === "BRL" && moedaFinal === "EUR") {
  valorConvertido = converterMoeda(valorMoedaInicial, taxaRealParaEuro);
} else {
  console.log("Conversão não suportada.");
}

console.log(`O valor de R$ ${valorMoedaInicial.toFixed(2)} ${moedaInicial} é equivalente a R$ ${valorConvertido.toFixed(2)} ${moedaFinal}.\n`);

//Convertendo Ceusius para Fahrenheit.
let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log(`A temperatura de ${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F.\n`)

//Calculadora de IMC.
var peso = 65;
var altura = 1.70;

var imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`)