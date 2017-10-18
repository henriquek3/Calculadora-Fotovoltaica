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
    let taxaAnualOeM = 0.0025;
    let perdaRendimentoAnualA = 0.005;
    let perdaRendimentoAnualB = 0.995;
    let custoInversor = 3000;

    /**
     * @var temps
     */
    let resultadoFinal = 0;
    let eneGerAnualA = 0;
    let eneGerAnualB = 0;
    let eneGerAnualC = 0;
    let resultEneGerAual = 0;
    let resultFinalInvest = 3000;

    custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );

    /**
     * @todo calcular energia gerada
     */
    for (let ano = 0; ano < 23; ano++) {
        eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
        eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;
        eneGerAnualC = eneGerAnualB - eneGerAnualA;
        if (ano < 1){
            resultFinalInvest = fvalorTarifa * eneGerAnualC;
        }

        if (resultEneGerAual > 0) {
            eneGerAnualC = resultEneGerAual;
        }
        resultEneGerAual = eneGerAnualC * perdaRendimentoAnualB;
        fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
        custoOeM = custoOeM + (0.07 * custoOeM);
        /**
         * @todo terminar de calcular a tarifa
         */
         if(ano === 22) {
             for (let anox = 0; anox < 1; anox++) {
                 fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                 custoOeM = custoOeM + (0.07 * custoOeM);
             }
         }
        resultadoFinal = fvalorTarifa * eneGerAnualC;
        resultFinalInvest -= resultadoFinal;
    }
    resultFinalInvest = (resultFinalInvest * -1) - custoInversor;
    receitaAnualFv = fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5));
    receitaLiquidaAnual = (fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5))) - custoOeM;
    console.log({
        fvalorTarifa: fvalorTarifa.toPrecision(3),
        resultEneGerAual: parseInt(resultEneGerAual.toPrecision(5)),
        receitaAnualFv: receitaAnualFv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
        custoOeM: custoOeM.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
        receitaLiquidaAnual: receitaLiquidaAnual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
        resultFinalInvest: resultFinalInvest.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    });
};
calc(0.75, 3809, 17175.69);

/*

a:"4.76"
b:10078
c:47929.81460242933
d:553.5468421026877
e:47376.26776032664

 */