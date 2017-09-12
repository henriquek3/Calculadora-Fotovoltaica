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
            public energiaAnualGerada: number
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
            let energiaAnualGerada = this.energiaAnualGerada;
            let potModl = ((potenciaModulo / 100) * rendimentoModulo).toPrecision(4);
            let a = (energiaGerada * potModl).toFixed(4);
            let b = (hsp * areaModulo * potModl * 365).toFixed(2);
            let quantidadeModulos = (b / a).toPrecision(2);
            //let potenciaGerador = (quantidadeModulos * (rendimentoModulo * (potenciaModulo / 100))) / 1000;
            //let areaInstalacao = quantidadeModulos * areaModulo;
            //let result = {'Qtd de Mdls' : quantidadeModulos.toPrecision(1), 'Pot Gerador' : potenciaGerador.toPrecision(4), 'Area inst' : areaInstalacao.toFixed(2)};
            return quantidadeModulos;
        };
    }
}