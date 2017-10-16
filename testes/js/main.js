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
    let resultadoFinal = 0;
    let eneGerAnualA = 0;
    let eneGerAnualB = 0;
    let eneGerAnualC = 0;
    let cenergiaGeradaAnualf = 0;
    let resultEneGerAual = 0;

    for (let ano = 0; ano <= 24; ano++) {
        //custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );
        //receitaLiquidaAnual = (fvalorTarifa * cenergiaGeradaAnual) - custoOeM;
        //resultadoFinal -= cprecoMinOrcamento - receitaLiquidaAnual;
        //fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;

        eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
        eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;

        eneGerAnualC = eneGerAnualB - eneGerAnualA;

        if (resultEneGerAual > 0) {
            eneGerAnualC = resultEneGerAual;
        }
        resultEneGerAual = eneGerAnualC * perdaRendimentoAnualB;

        console.log({
            //a:fvalorTarifa.toPrecision(3),
            a: cenergiaGeradaAnual,
            b: parseInt(eneGerAnualC),
            c: parseInt(resultEneGerAual.toPrecision(5))
        }, ano);

    }
};

console.log(calc(0.75,11424,43651.65));