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
        execute(): string{
            let contaEnergia = this.contaEnergia;
            let energiaGerada = this.energiaGerada;
            let valorTarifa = this.valorTarifa;
            let hsp = this.hsp;
            let potenciaModulo = this.potenciaModulo;
            let areaModulo = this.areaModulo;
            let rendimentoModulo = this.rendimentoModulo;
            let taxaDisponibilidade = this.taxaDisponibilidade;
            let energiaAnualGerada = this.energiaAnualGerada;
            let quantidadeModulos = (energiaGerada * potenciaModulo) / (hsp * areaModulo * rendimentoModulo * 365);
            let potenciaGerador = (quantidadeModulos * potenciaModulo) / 1000;
            let areaInstalacao = quantidadeModulos * areaModulo;
            let result = 'Quantidade de Módulos: ' + quantidadeModulos + ' Potencia do Gerador: ' + potenciaGerador + ' Area da instalação: ' + areaInstalacao;
            return result;
        };
    }
}