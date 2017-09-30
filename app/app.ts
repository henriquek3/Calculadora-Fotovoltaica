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
    let $uf: any;
    let $btn: any;

//  @todo parametros do sistema
//=============================================

    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 0.1674;
    taxaDisponibilidade = 50;
    valorOrcamento = 44889.31;

//==============================================

    $uf = document.getElementById('estados');
    $btn = document.getElementsByClassName('primary button');

    $btn[0].onclick = function () {
        valorTarifa = $uf.selectedOptions[0].dataset.tarifa;
        energiaGerada = +(<HTMLInputElement>document.getElementById('kwh')).value;
        contaEnergia = energiaGerada * valorTarifa;

        let calculo = new CalculoFotoVoltaico(
            contaEnergia,energiaGerada,
            valorTarifa,hsp,
            potenciaModulo,areaModulo,
            rendimentoModulo,taxaDisponibilidade,
            energiaAnualGerada,valorOrcamento
        );

        let obj: any;
        obj = calculo.execute();
        console.log(obj);
    }
}