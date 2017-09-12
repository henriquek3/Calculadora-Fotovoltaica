/**
 * Created by henri on 08/09/2017.
 */
///<reference path="src/CalculoFotoVoltaico.ts"/>
module App{
    let contaEnergia: number;
    let energiaGerada: number;
    let valorTarifa: number;
    let hsp: number;
    let potenciaModulo: number;
    let areaModulo: number;
    let rendimentoModulo: number;
    let taxaDisponibilidade: number;
    let energiaAnualGerada: number;
    let valorOrcamento: number;
    contaEnergia = 733.29;
    energiaGerada = 965;
    valorTarifa = 0.76;
    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 0.1674;
    taxaDisponibilidade = 50;  
    valorOrcamento = 44889.31; 

    let calculo = new CalculoFotoVoltaico(
        contaEnergia,energiaGerada,
        valorTarifa,hsp,
        potenciaModulo,areaModulo,
        rendimentoModulo,taxaDisponibilidade,
        energiaAnualGerada,valorOrcamento
    );

    console.log(calculo.execute());
}