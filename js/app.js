/**
 * Created by henri on 08/09/2017.
 */
///<reference path="ICalculoFotoVoltaico.ts"/>
var App;
(function (App) {
    var CalculoFotoVoltaico = (function () {
        function CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada) {
            this.contaEnergia = contaEnergia;
            this.energiaGerada = energiaGerada;
            this.valorTarifa = valorTarifa;
            this.hsp = hsp;
            this.potenciaModulo = potenciaModulo;
            this.areaModulo = areaModulo;
            this.rendimentoModulo = rendimentoModulo;
            this.taxaDisponibilidade = taxaDisponibilidade;
            this.energiaAnualGerada = energiaAnualGerada;
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
            var energiaAnualGerada = this.energiaAnualGerada;
            var potModl = ((potenciaModulo / 100) * rendimentoModulo).toPrecision(4);
            var a = (energiaGerada * potModl).toFixed(4);
            var b = (hsp * areaModulo * potModl * 365).toFixed(2);
            var quantidadeModulos = (b / a).toPrecision(2);
            //let potenciaGerador = (quantidadeModulos * (rendimentoModulo * (potenciaModulo / 100))) / 1000;
            //let areaInstalacao = quantidadeModulos * areaModulo;
            //let result = {'Qtd de Mdls' : quantidadeModulos.toPrecision(1), 'Pot Gerador' : potenciaGerador.toPrecision(4), 'Area inst' : areaInstalacao.toFixed(2)};
            return quantidadeModulos;
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
    contaEnergia = 733.29;
    energiaGerada = 965;
    valorTarifa = 0.76;
    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 16.74;
    taxaDisponibilidade = 50;
    energiaAnualGerada = 11.578;
    var calculo = new App.CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada);
    console.log(calculo.execute());
})(App || (App = {}));
