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

        calculosTirVpl(cvalorTarifa, cenergiaGeradaAnual, cprecoMinOrcamento): any {
            /**
             * @var premissas
             */
            let reajusteAnualTarifa = 0.08;
            let taxaInflacaoAnual = 1.000007;
            let taxaDescontoEnergiaGerada = 0.10;
            let taxaAnualOeM = 0.0025;
            let perdaRendimentoAnual = 0.50;
            let anoTrocaInversor = 15;
            let custoInversor = 3000;

            /**
             * @var temps
             */
            let receitaAnual = 0;
            let custoOeM = 0;
            let receitaLiquidaAnual = 0;
            let resultadoFinal = 0;

            //for (let ano=0; ano <= 30; ano++) {
            custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento );
            receitaLiquidaAnual = (cvalorTarifa * cenergiaGeradaAnual) - custoOeM;
            resultadoFinal = cprecoMinOrcamento - receitaLiquidaAnual;
            //}
            return {
                "receitaLiquidaAnual": receitaLiquidaAnual,
                "resultadoFinal": resultadoFinal.toPrecision(8)
            }
        };

        //=-$B$5*($B$9*((1+$B$3)^0))+SE($B$7=D2;-$B$8;0)
        //=-0,0025*(44889,31*((1+0,7)^0))
        //=-0,0025*(44889,31*1,000007)
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
            }

            precoMinOrcamento = valor;
            precoMaxOrcamentoTmp = kwp * precoKwp;
            precoMaxOrcamento = precoMaxOrcamentoTmp;
            valorEconomiaMensal = valorTarifa * ( energiaGeradaAnual / 12);
            valorEconomizadoTrintaAnos = 360 * valorEconomiaMensal;

            console.log(this.calculosTirVpl(valorTarifa, energiaGeradaAnual, precoMinOrcamento));



            return {
                "quantModulos": quantidadeModulos,
                "potenciaKwp": potenciaGeradorSolar.toPrecision(3),
                "areaInst": areaInstalacao,
                "energiaGeradaAnual": energiaGeradaAnual.toPrecision(6),
                "valorEconomizadoTrintaAnos": valorEconomizadoTrintaAnos.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                "valorEconomiaMensal": valorEconomiaMensal.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                "precoMinOrcamento": precoMinOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
                "precoMaxOrcamento": precoMaxOrcamento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            };

        };
    }
}