//th = tipo de hamburguesa
//tp = tipo de pago
//pagtot = pago total
let th = +prompt("Que Hamburguesa Desea: 1.SIMPLE - 2.DOBLE - 3.TRIPLE");
let simple = 0;
let doble = 0;
let triple = 0;
let tp = 0;
let pagtot = 0;

switch(th){
    //HAMBURGUESA SIMPLE
    case 1:
        simple = +prompt("Ingrese la Cantidad de Hamburguesa Simple");
        tp = +prompt("TIPO PAGO:  1.CONTADO  - 2.CREDITO");
        if (tp === 1){
            pagtot = simple * 20;
        }else{
            pagtot = (simple * 20) * 1.05;
        }
    break;
  //HAMBURGUESA DOBLE
    case 2:
        //doble
        doble = +prompt("Ingrese cantidad de Hamburguesa Doble");
        tp = +prompt("TIPO PAGO:  1.CONTADO  - 2.CREDITO");
        if (tp === 1){
            pagtot = doble * 25;
        }else{
            pagtot = (doble * 25) * 1.05;
        }
    break;
  //HAMBURGUESA TRIPLE
    case 3:
        //triple
        triple = +prompt("Ingrese cantidad de Hamburguesa Triple");
        tp = +prompt("TIPO PAGO:  1.CONTADO  - 2.CREDITO");
        if (tp === 1){
            pagtot = triple * 28;
        }else{
            pagtot = (triple * 28) * 1.05;
        }
    break;
    default:
}
alert(`Total a Pagar es ${pagtot.toFixed(2)}`);
