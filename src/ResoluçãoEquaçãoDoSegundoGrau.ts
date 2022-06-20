export async function calcDelta(a: number, b: number, c: number): Promise<number> {

  const delta = ((b) * (b) - 4 * (a) * (c));

  console
    .log(`Este é o valor de Delta: ${delta}`);

  console
    .log(await calcRoots(a, b, delta));

  return delta;

}


export async function
  calcRoots(a: number, b: number, delta: number)
  : Promise<{ x1: number, x2: number } | undefined> {

  const squareRoot = Math.sqrt(delta);
  console.log(squareRoot);

  if (delta > 0) {

    let x1: number = (-(b) + squareRoot) / (2 * a);
    let x2: number = (-(b) - squareRoot) / (2 * a);

    console
      .log(`As Raizes são iguais, e x1: ${x1}, e x2 : ${x2}`);

    const result = {

      x1: x1,
      x2: x2
    }

    return result;
  }

  else if (delta === 0) {

    console
      .log("A equação não admite raízes reais");
  }
}