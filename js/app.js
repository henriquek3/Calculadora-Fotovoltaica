/**
 * Created by henri on 08/09/2017.
 */
///<reference path="ICalculoFotoVoltaico.ts"/>
var App;
(function (App) {
    var CalculoFotoVoltaico = /** @class */ (function () {
        function CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento, precoKwp) {
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
            this.precoKwp = precoKwp;
        }
        ;
        CalculoFotoVoltaico.prototype.calculosTirVpl = function (cvalorTarifa, cenergiaGeradaAnual, cprecoMinOrcamento) {
            /**
             * @var premissas
             */
            var reajusteAnualTarifa = 0.08;
            var taxaInflacaoAnual = 1.000007;
            var taxaDescontoEnergiaGerada = 0.10;
            var taxaAnualOeM = 0.0025;
            var perdaRendimentoAnual = 0.995;
            var anoTrocaInversor = 15;
            var custoInversor = 3000;
            /**
             * @var temps
             */
            var receitaAnual = 0;
            var custoOeM = 0;
            var receitaLiquidaAnual = 0;
            var resultadoFinal = 0;
            for (var ano = 0; ano <= 3; ano++) {
                console.log({
                    "cvalorTarifa": cvalorTarifa,
                    "cenergiaGeradaAnual": cenergiaGeradaAnual,
                    "receitaLiquidaAnual": receitaLiquidaAnual,
                    "resultadoFinal": resultadoFinal.toPrecision(8)
                });
                custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento);
                receitaLiquidaAnual = (cvalorTarifa * cenergiaGeradaAnual) - custoOeM;
                resultadoFinal -= cprecoMinOrcamento - receitaLiquidaAnual;
                cvalorTarifa += reajusteAnualTarifa * cvalorTarifa;
                cenergiaGeradaAnual = (perdaRendimentoAnual * cenergiaGeradaAnual) - (cenergiaGeradaAnual * 0.005);
            }
            return {
                "custoOeM": custoOeM,
                "receitaLiquidaAnual": receitaLiquidaAnual,
                "resultadoFinal": resultadoFinal.toPrecision(8)
            };
        };
        ;
        //=-$B$5*($B$9*((1+$B$3)^0))+SE($B$7=D2;-$B$8;0)
        //=-0,0025*(44889,31*((1+0,7)^0))
        //=-0,0025*(44889,31*1,000007)
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
            var precoKwp = this.precoKwp;
            var quantidadeModulos;
            var potenciaGeradorSolar;
            var areaInstalacao;
            var energiaGeradaAnual;
            var valorPrevistoSistema;
            var precoMinOrcamento;
            var precoMaxOrcamento;
            var precoMaxOrcamentoTmp;
            var kwp;
            var valor;
            var valorEconomiaMensal;
            var valorEconomizadoTrintaAnos;
            quantidadeModulos = Math.ceil((energiaGerada * 12) / (hsp * areaModulo * rendimentoModulo * 365));
            potenciaGeradorSolar = (quantidadeModulos * potenciaModulo) / 1000;
            areaInstalacao = quantidadeModulos * areaModulo;
            energiaGeradaAnual = energiaGerada * 12;
            //valorPrevistoSistema = valorOrcamento / potenciaGeradorSolar;
            kwp = potenciaGeradorSolar;
            if (kwp < 1.31) {
                valor = 8578.89;
            }
            else if (kwp < 1.96) {
                valor = 13056.39;
            }
            else if (kwp < 2.28) {
                valor = 14130.99;
            }
            else if (kwp <= 2.60) {
                valor = 17175.69;
            }
            else if (kwp <= 3.25) {
                valor = 19862.19;
            }
            else if (kwp <= 3.90) {
                valor = 22011.39;
            }
            else if (kwp <= 4.55) {
                valor = 26130.69;
            }
            else if (kwp <= 5.20) {
                valor = 28905.75;
            }
            else if (kwp <= 5.85) {
                valor = 33442.95;
            }
            else if (kwp <= 6.50) {
                valor = 35150.00;
            }
            else if (kwp <= 7.15) {
                valor = 39114.45;
            }
            else if (kwp <= 7.80) {
                valor = 43651.65;
            }
            else if (kwp <= 8.45) {
                valor = 46487.40;
            }
            else if (kwp <= 9.10) {
                valor = 48566.95;
            }
            else if (kwp <= 9.75) {
                valor = 51213.65;
            }
            else if (kwp <= 10.40) {
                valor = 53143.45;
            }
            else if (kwp <= 11.70) {
                valor = 68641.57;
            }
            else if (kwp <= 13.00) {
                valor = 75979.20;
            }
            else if (kwp <= 14.08) {
                valor = 80974.59;
            }
            else if (kwp <= 14.30) {
                valor = 78765.69;
            }
            else if (kwp <= 15.60) {
                valor = 83352.15;
            }
            else if (kwp <= 16.90) {
                valor = 90978.32;
            }
            else if (kwp <= 17.92) {
                valor = 94575.10;
            }
            else if (kwp <= 19.20) {
                valor = 102813.85;
            }
            precoMinOrcamento = valor;
            precoMaxOrcamentoTmp = kwp * precoKwp;
            precoMaxOrcamento = precoMaxOrcamentoTmp;
            valorEconomiaMensal = valorTarifa * (energiaGeradaAnual / 12);
            valorEconomizadoTrintaAnos = 360 * valorEconomiaMensal;
            console.log(this.calculosTirVpl(valorTarifa, energiaGeradaAnual, precoMinOrcamento));
            return {
                "quantModulos": quantidadeModulos,
                "potenciaKwp": potenciaGeradorSolar.toPrecision(3),
                "areaInst": areaInstalacao,
                "energiaGeradaAnual": energiaGeradaAnual.toPrecision(6),
                "valorEconomizadoTrintaAnos": valorEconomizadoTrintaAnos.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                "valorEconomiaMensal": valorEconomiaMensal.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                "precoMinOrcamento": precoMinOrcamento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                "precoMaxOrcamento": precoMaxOrcamento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
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
    var precoKwp;
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
    precoKwp = 6695.58;
    //==============================================
    $uf = document.getElementById('estados');
    $btn = document.getElementsByClassName('primary button');
    $btn[0].onclick = function () {
        valorTarifa = +$uf.selectedOptions[0].dataset.tarifa;
        energiaGerada = +document.getElementById('kwh').value;
        contaEnergia = energiaGerada * valorTarifa;
        var calculo = new App.CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento, precoKwp);
        var obj;
        obj = calculo.execute();
        console.log(obj);
        document.getElementById('geracao-anual').textContent = obj.energiaGeradaAnual;
        document.getElementById('tamanho-sistema').textContent = obj.potenciaKwp;
        document.getElementById('qtd-modulos').textContent = obj.quantModulos;
        document.getElementById('economial-mensal').textContent = obj.valorEconomiaMensal;
        document.getElementById('economia-trinta-anos').textContent = obj.valorEconomizadoTrintaAnos;
        document.getElementById('precoMinOrcamento').textContent = obj.precoMinOrcamento;
        document.getElementById('precoMaxOrcamento').textContent = obj.precoMaxOrcamento;
        document.getElementById('area-instalacao').textContent = obj.areaInst.toPrecision(3);
    };
})(App || (App = {}));
