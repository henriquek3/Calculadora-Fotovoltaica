/**
 * Created by henri on 08/09/2017.
 */
///<reference path="ICalculoFotoVoltaico.ts"/>

module App{
    export class CalculoFotoVoltaico implements ICalculoFotoVoltaico{
        constructor(
            public contaEnergia: number,
            public energiaGerada: number,
            public valorTarifa: number,
            public hsp: number,
            public potenciaModulo: number,
            public areaModulo: number,
            public rendimentoModulo: number,
            public taxaDisponibilidade: number,
            public energiaAnualGerada: number,
            public valorOrcamento: number,
            public precoKwp: number
        ){};

        calculosTirVpl(fvalorTarifa, cenergiaGeradaAnual, cprecoMinOrcamento): any {
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
            let custoOeM = 0;
            let receitaAnualFv = 0;
            let receitaLiquidaAnual = 0;
            custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );

            /**
             * @todo calcular energia gerada
             */
            for (let ano = 0; ano < 23; ano++) {
                eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
                eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;
                eneGerAnualC = eneGerAnualB - eneGerAnualA;
                if (ano < 1) {
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
                if (ano === 22) {
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
            return {
                fvalorTarifa: fvalorTarifa.toPrecision(3),
                resultEneGerAual: parseInt(resultEneGerAual.toPrecision(5)),
                receitaAnualFv: receitaAnualFv.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                custoOeM: custoOeM.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                receitaLiquidaAnual: receitaLiquidaAnual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                resultFinalInvest: resultFinalInvest.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            };
        };
        execute(): any{
            let contaEnergia = this.contaEnergia;
            let energiaGerada = this.energiaGerada;
            let valorTarifa = this.valorTarifa;
            let hsp = this.hsp;
            let potenciaModulo = this.potenciaModulo;
            let areaModulo = this.areaModulo;
            let rendimentoModulo = this.rendimentoModulo;
            let taxaDisponibilidade = this.taxaDisponibilidade;         
            let valorOrcamento = this.valorOrcamento;
            let precoKwp = this.precoKwp;
            let quantidadeModulos:number;
            let potenciaGeradorSolar: number;
            let areaInstalacao: number;
            let energiaGeradaAnual: number;
            let valorPrevistoSistema: number;
            let precoMinOrcamento: number;
            let precoMaxOrcamento: number;
            let precoMaxOrcamentoTmp: number;
            let kwp: number;
            let valor: number;
            let valorEconomiaMensal: number;
            let valorEconomizadoTrintaAnos: number;
            let minPrecoKwp: number;

            quantidadeModulos = Math.ceil((energiaGerada * 12) / (hsp * areaModulo * rendimentoModulo * 365));
            potenciaGeradorSolar = (quantidadeModulos * potenciaModulo) / 1000;
            areaInstalacao = quantidadeModulos * areaModulo;
            energiaGeradaAnual = energiaGerada * 12;
            //valorPrevistoSistema = valorOrcamento / potenciaGeradorSolar;
            kwp = potenciaGeradorSolar;

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
            } else if (kwp > 19.20 ) {
                minPrecoKwp = 5302.56;
                valor = kwp * minPrecoKwp;
                precoKwp = 6000.67;
            }

            precoMinOrcamento = valor;
            precoMaxOrcamentoTmp = kwp * precoKwp;
            precoMaxOrcamento = precoMaxOrcamentoTmp;
            valorEconomiaMensal = valorTarifa * ( energiaGeradaAnual / 12);
            valorEconomizadoTrintaAnos = 360 * valorEconomiaMensal;

            let calcTirVpl = this.calculosTirVpl(valorTarifa, energiaGeradaAnual, precoMinOrcamento);
            return {
                quantModulos: quantidadeModulos,
                potenciaKwp: potenciaGeradorSolar.toPrecision(3),
                areaInst: areaInstalacao,
                energiaGeradaAnual: energiaGeradaAnual.toPrecision(6),
                valorEconomizadoTrintaAnos: valorEconomizadoTrintaAnos.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                valorEconomiaMensal: valorEconomiaMensal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                precoMinOrcamento: precoMinOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                precoMaxOrcamento: precoMaxOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                resultFinalInvest: calcTirVpl.resultFinalInvest
            };

        };

        regexDecimal(arg): any {
            const regex = /[0-9]+/g;
            const str = arg;
            let m;
            let temp = '';

            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                // The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    console.log(`Found match, group ${groupIndex}: ${match}`);
                    temp = temp+ '' + match;
                });
            }
            return parseInt(temp);
        }
    }
}