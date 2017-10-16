/**
 * Created by henri on 16/10/2017.
 */

calc = function calculosTirVpl(
    cvalorTarifa,
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
    let cenergiaGeradaAnualc = 0;
    let cenergiaGeradaAnuald = 0;
    let cenergiaGeradaAnuale = 0;
    let cenergiaGeradaAnualf = 0;
    let resultEnergiaGeradaAual = 0;

    for (let ano = 0; ano <= 24; ano++) {

        //custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );
        //receitaLiquidaAnual = (cvalorTarifa * cenergiaGeradaAnual) - custoOeM;
        //resultadoFinal -= cprecoMinOrcamento - receitaLiquidaAnual;
        cvalorTarifa += reajusteAnualTarifa * cvalorTarifa;
        cenergiaGeradaAnualc = cenergiaGeradaAnual * perdaRendimentoAnualA;
        cenergiaGeradaAnuald = cenergiaGeradaAnual * perdaRendimentoAnualB;
        cenergiaGeradaAnuale = cenergiaGeradaAnuald - cenergiaGeradaAnualc;
        if (ano >= 1 ){
            cenergiaGeradaAnuale = cenergiaGeradaAnuale * perdaRendimentoAnualB;
            resultEnergiaGeradaAual = cenergiaGeradaAnuale * perdaRendimentoAnualB;
            console.log({
                //a:cvalorTarifa.toPrecision(3),
                a: cenergiaGeradaAnual,
                b: parseInt(cenergiaGeradaAnualc.toPrecision(2)),
                c:parseInt(cenergiaGeradaAnuald.toPrecision(5)),
                d:parseInt(resultEnergiaGeradaAual.toPrecision(5))
            },ano);
        }
    }
};

console.log(calc(0.75,11424,43651.65));