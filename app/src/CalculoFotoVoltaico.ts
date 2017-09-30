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
            public valorOrcamento: number
        ){};

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
            let quantidadeModulos:number;
            let potenciaGeradorSolar: number;
            let areaInstalacao: number;
            let energiaGeradaAnual: number;
            let valorPrevistoSistema: number;
            quantidadeModulos = Math.ceil((energiaGerada * 12) / (hsp * areaModulo * rendimentoModulo * 365));
            potenciaGeradorSolar = (quantidadeModulos * potenciaModulo) / 1000;
            areaInstalacao = quantidadeModulos * areaModulo;
            energiaGeradaAnual = energiaGerada * 12;
            valorPrevistoSistema = valorOrcamento / potenciaGeradorSolar;

            return {
                "Qtd-Mod" : quantidadeModulos,
                "pot-Ger" : potenciaGeradorSolar.toPrecision(3),
                "area-Inst" : areaInstalacao,
                "ener-Anual" : energiaGeradaAnual.toPrecision(6),
                "valor-Sis" : valorPrevistoSistema
            };

        };
    }
}