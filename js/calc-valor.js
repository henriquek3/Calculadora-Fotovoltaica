let kwp = prompt('Qual é a potencia kwp?');
let valor = 1.1;
let temps = "O valor é caro de mais :D";
console.log('O kwp é: ' + kwp);

if (kwp < 1.31 ) {
    valor = 8578.89;
} else if (kwp < 1.96 ) {
    valor = 13056.39;
} else if (kwp < 2.28 ) {
    valor = 14130.99;
} else if (kwp <= 2.60 ) {
    valor = 17175.69;
} else if (kwp <= 3.25 ) {
    valor = 19862.19;
} else if (kwp <= 3.90 ) {
    valor = 22011.39;
} else if (kwp <= 4.55 ) {
    valor = 26130.69;
} else if (kwp <= 5.20 ) {
    valor = 28905.75;
} else if (kwp <= 5.85 ) {
    valor = 33442.95;
} else if (kwp <= 6.50 ) {
    valor = 35150.00;
} else if (kwp <= 7.15 ) {
    valor = 39114.45;
} else if (kwp <= 7.80 ) {
    valor = 43651.65;
} else if (kwp <= 8.45 ) {
    valor = 46487.40;
} else if (kwp <= 9.10 ) {
    valor = 48566.95;
} else if (kwp <= 9.75 ) {
    valor = 51213.65;
} else if (kwp <= 10.40 ) {
    valor = 53143.45;
}else if (kwp <= 11.70 ) {
    valor = 68641.57;
} else if (kwp <= 13.00 ) {
    valor = 75979.20;
} else if (kwp <= 14.08 ) {
    valor = 80974.59;
} else if (kwp <= 14.30 ) {
    valor = 78765.69;
} else if (kwp <= 15.60 ) {
    valor = 83352.15;
} else if (kwp <= 16.90 ) {
    valor = 90978.32;
} else if (kwp <= 17.92 ) {
    valor = 94575.10;
} else if (kwp <= 19.20 ) {
    valor = 102813.85;
} 

console.log('O valor é: ' + valor);
