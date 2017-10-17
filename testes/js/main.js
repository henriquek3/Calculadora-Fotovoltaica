/**
 * Created by henri on 16/10/2017.
 */

calc = function calculosTirVpl(fvalorTarifa,
                               cenergiaGeradaAnual,
                               cprecoMinOrcamento
) {
    /**
     * @var premissas
     */
    let reajusteAnualTarifa = 0.08;
    let taxaInflacaoAnual = 1.000007;
    let taxaDescontoEnergiaGerada = 0.10;
    let taxaAnualOeM = 0.0025;
    let perdaRendimentoAnualA = 0.005;
    let perdaRendimentoAnualB = 0.995;
    let anoTrocaInversor = 15;
    let custoInversor = 3000;

    /**
     * @var temps
     */
    let receitaAnual = 0;
    let custoOeM = 0;
    let receitaLiquidaAnual = 0;
    let resultadoFinal = 0;//cprecoMinOrcamento;
    let eneGerAnualA = 0;
    let eneGerAnualB = 0;
    let eneGerAnualC = 0;
    let resultEneGerAual = 0;

    custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );

    /**
     * @todo calcular energia gerada
     */
    for (let ano = 0; ano < 1; ano++) {
        eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
        eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;
        eneGerAnualC = eneGerAnualB - eneGerAnualA;
        console.log(ano,resultadoFinal.toPrecision(6),eneGerAnualC.toPrecision(5));
        if (ano < 1){
            resultadoFinal -= fvalorTarifa * eneGerAnualC;
        }

        if (resultEneGerAual > 0) {
            eneGerAnualC = resultEneGerAual;
        }
        resultEneGerAual = eneGerAnualC * perdaRendimentoAnualB;
        fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
        custoOeM = custoOeM + (0.07 * custoOeM);
        resultadoFinal -= fvalorTarifa * resultEneGerAual;
        console.log(ano,resultadoFinal.toPrecision(6));
        /**
         * @todo terminar de calcular a tarifa
         */
         if(ano === 22) {
             for (let anox = 0; anox < 1; anox++) {
                 fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                 custoOeM = custoOeM + (0.07 * custoOeM);
                 resultadoFinal -= fvalorTarifa * resultEneGerAual;
                 console.log(anox,ano,resultadoFinal.toPrecision(6));
             }
         }
    }
    console.log({
        a: fvalorTarifa.toPrecision(3),
        b: parseInt(resultEneGerAual.toPrecision(5)),
        c: fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5)),
        d: custoOeM,
        e: (fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5))) - custoOeM
    });
};
console.log(calc(0.75,11424,43651.65));
/*

a:"4.76"
b:10078
c:47929.81460242933
d:553.5468421026877
e:47376.26776032664

 */