import { app } from './app';

import { calcDelta } from './ResoluçãoEquaçãoDoSegundoGrau';

const PORT = 2006;

app.listen(PORT, () => {

  console
    .log("O Server já está rodando --- ✅");

  let a: number = 5;
  let b: number = -6;
  let c: number = -12;

  calcDelta(a, b, c);
});