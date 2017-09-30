/**
 * Created by henri on 08/09/2017.
 */
///<reference path="ICalculoFotoVoltaico.ts"/>
var App;
(function (App) {
    var CalculoFotoVoltaico = /** @class */ (function () {
        function CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento) {
            this.contaEnergia = contaEnergia;
            this.energiaGerada = energiaGerada;
            this.valorTarifa = valorTarifa;
            this.hsp = hsp;
            this.potenciaModulo = potenciaModulo;
            this.areaModulo = areaModulo;
            this.rendimentoModulo = rendimentoModulo;
            this.taxaDisponibilidade = taxaDisponibilidade;
            this.energiaAnualGerada = energiaAnualGerada;
            this.valorOrcamento = valorOrcamento;
        }
        ;
        CalculoFotoVoltaico.prototype.execute = function () {
            var contaEnergia = this.contaEnergia;
            var energiaGerada = this.energiaGerada;
            var valorTarifa = this.valorTarifa;
            var hsp = this.hsp;
            var potenciaModulo = this.potenciaModulo;
            var areaModulo = this.areaModulo;
            var rendimentoModulo = this.rendimentoModulo;
            var taxaDisponibilidade = this.taxaDisponibilidade;
            var valorOrcamento = this.valorOrcamento;
            var quantidadeModulos;
            var potenciaGeradorSolar;
            var areaInstalacao;
            var energiaGeradaAnual;
            var valorPrevistoSistema;
            quantidadeModulos = Math.ceil((energiaGerada * 12) / (hsp * areaModulo * rendimentoModulo * 365));
            potenciaGeradorSolar = (quantidadeModulos * potenciaModulo) / 1000;
            areaInstalacao = quantidadeModulos * areaModulo;
            energiaGeradaAnual = energiaGerada * 12;
            valorPrevistoSistema = valorOrcamento / potenciaGeradorSolar;
            return {
                "Qtd-Mod": quantidadeModulos,
                "pot-Ger": potenciaGeradorSolar.toPrecision(3),
                "area-Inst": areaInstalacao,
                "ener-Anual": energiaGeradaAnual.toPrecision(6),
                "valor-Sis": valorPrevistoSistema
            };
        };
        ;
        return CalculoFotoVoltaico;
    }());
    App.CalculoFotoVoltaico = CalculoFotoVoltaico;
})(App || (App = {}));
/**
 * Created by henri on 08/09/2017.
 */
///<reference path="src/CalculoFotoVoltaico.ts"/>
var App;
(function (App) {
    var contaEnergia;
    var energiaGerada;
    var valorTarifa;
    var hsp;
    var potenciaModulo;
    var areaModulo;
    var rendimentoModulo;
    var taxaDisponibilidade;
    var energiaAnualGerada;
    var valorOrcamento;
    var $uf;
    var $btn;
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
        console.log(valorTarifa);
        energiaGerada = document.getElementById('kwh').value;
        contaEnergia = energiaGerada * valorTarifa;
        console.log(contaEnergia);
        var calculo = new App.CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento);
        var obj;
        obj = calculo.execute();
        console.log(obj);
    };
})(App || (App = {}));
