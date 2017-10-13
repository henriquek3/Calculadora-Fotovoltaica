/**
 * Created by henri on 08/09/2017.
 */
module App{
    export interface ICalculoFotoVoltaico{
        contaEnergia: number;
        energiaGerada: number;
        valorTarifa: number;
        hsp: number;
        potenciaModulo: number;
        areaModulo: number;
        rendimentoModulo: number;
        taxaDisponibilidade: number;
        energiaAnualGerada: number;
        precoKwp: number;

        execute(): string;
    }
}
