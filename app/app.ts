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
    $uf = document.getElementById('estados');
    //contaEnergia = 733.29;
    //valorTarifa = 0.76;
    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 0.1674;
    taxaDisponibilidade = 50;
    valorOrcamento = 44889.31;


    let $btn: any;
    $btn = document.getElementsByClassName('primary button');
    $btn[0].onclick = function () {


        valorTarifa = $uf.selectedOptions[0].dataset.tarifa;
        console.log(valorTarifa);

        energiaGerada = document.getElementById('kwh').value;
        contaEnergia = energiaGerada * valorTarifa;

        console.log(contaEnergia);

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