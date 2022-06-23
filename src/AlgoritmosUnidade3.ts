// ---- Algoritmos Unidade 3 ----

// ---- Desafio dos Resistores ----
let resistor1: number = 40;
let resistor2: number = 35;

let resistorEquivalente = Math
  .floor((resistor1 * resistor2) / (resistor1 + resistor2));

console
  .log(`O valor final do Resistor Equivalente: ${resistorEquivalente} volts`);
// ---- ** ----

// ---- Desafio da Alíquota ----

let rendimentoAnual: number = 24000.00;
let porCent: number;

function impostoDeRenda(rendimento: number) {

  if (rendimento <= 22847.76) {

    console
      .log("Seu rendimento está isento de cobrança do imposto de renda");
  }

  if (rendimento >= 22847.77 && rendimento <= 33919.80) {

    porCent = (75 / 100);
    let operation = rendimento * porCent;
    let finalValue = rendimento - operation;

    console
      .log(`O Valor final a ser pago pelo imposto de renda: ${finalValue}`)

  }

  if (rendimento >= 33919.81 && rendimento <= 45012.60) {

    porCent = 150 / 100;
    let operation = rendimento * porCent;
    let finalValue = rendimento - operation;

    console
      .log(`O Valor final a ser pago pelo imposto de renda: ${finalValue}`)
  }

  if (rendimento >= 45012.61 && rendimento <= 55976.16) {

    porCent = 225 / 100;
    let operation = rendimento * porCent;
    let finalValue = rendimento - operation;

    console
      .log(`O Valor final a ser pago pelo imposto de renda: ${finalValue}`)

  }

  if (rendimento >= 55976.16) {

    porCent = 275 / 100;
    let operation = rendimento * porCent;
    let finalValue = rendimento - operation;

    console
      .log(`O Valor final a ser pago pelo imposto de renda: ${finalValue}`)
  }
}

impostoDeRenda(rendimentoAnual);
// ---- ** ----j

// ---- Desafio Números Múltiplos de 15 ----

let allNumbers: number[] = [];

let initCount: number = 15;
let finishCount: number = 500;
let saltCount: number = 15;

let result: number = 0;

while (initCount <= 500) {

  result += initCount;
  console.log(result);

  initCount += 15;

}

for (let indice = initCount; indice <= finishCount; indice = indice + saltCount) {

  const somaDosValores = allNumbers
    .reduce((item, somaParcial) => somaParcial + item, 0);

  const result = somaDosValores + indice;

  console.log(`Somando ${indice}, o valor da soma é: ${result}`);
  allNumbers.push(indice);

}
// ---- ** ----