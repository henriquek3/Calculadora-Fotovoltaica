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
            const contaEnergia = this.contaEnergia;
            const energiaGerada = this.energiaGerada;
            const valorTarifa = this.valorTarifa;
            const hsp = this.hsp;
            const potenciaModulo = this.potenciaModulo;
            const areaModulo = this.areaModulo;
            const rendimentoModulo = this.rendimentoModulo;
            const taxaDisponibilidade = this.taxaDisponibilidade;
            const energiaAnualGerada = this.energiaAnualGerada;

            let quantidadeModulos = (energiaGerada * potenciaModulo) / (hsp * areaModulo * rendimentoModulo * 365);
            let potenciaGerador = (quantidadeModulos * potenciaModulo) / 1000;
            let areaInstalacao = quantidadeModulos * areaModulo;

            return 'Quantidade de Módulos: ' + quantidadeModulos + ' Potencia do Gerador: ' + potenciaGerador + ' Area da instalação: ' + areaInstalacao;
        };
    }
}