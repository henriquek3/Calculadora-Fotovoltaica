/**
 * Created by henri on 08/09/2017.
 */
///<reference path="ICalculoFotoVoltaico.ts"/>
var App;
(function (App) {
    var CalculoFotoVoltaico = /** @class */ (function () {
        function CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento, precoKwp, despesaViagema) {
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
            this.despesaViagema = despesaViagema;
        }
        ;
        CalculoFotoVoltaico.prototype.calculosTirVpl = function (fvalorTarifa, cenergiaGeradaAnual, cprecoMinOrcamento) {
            /**
             * @var premissas
             */
            var reajusteAnualTarifa = 0.08;
            var taxaInflacaoAnual = 1.000007;
            var taxaAnualOeM = 0.0025;
            var perdaRendimentoAnualA = 0.005;
            var perdaRendimentoAnualB = 0.995;
            var custoInversor = 3000;
            /**
             * @var temps
             */
            var resultadoFinal = 0;
            var eneGerAnualA = 0;
            var eneGerAnualB = 0;
            var eneGerAnualC = 0;
            var resultEneGerAual = 0;
            var resultFinalInvest = 3000;
            var custoOeM = 0;
            var receitaAnualFv = 0;
            var receitaLiquidaAnual = 0;
            custoOeM = taxaAnualOeM * (taxaInflacaoAnual * cprecoMinOrcamento);
            /**
             * @todo calcular energia gerada
             */
            for (var ano = 0; ano < 23; ano++) {
                eneGerAnualA = cenergiaGeradaAnual * perdaRendimentoAnualA;
                eneGerAnualB = cenergiaGeradaAnual * perdaRendimentoAnualB;
                eneGerAnualC = eneGerAnualB - eneGerAnualA;
                if (ano < 1) {
                    resultFinalInvest = fvalorTarifa * eneGerAnualC;
                }
                if (resultEneGerAual > 0) {
                    eneGerAnualC = resultEneGerAual;
                }
                resultEneGerAual = eneGerAnualC * perdaRendimentoAnualB;
                fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                custoOeM = custoOeM + (0.07 * custoOeM);
                /**
                 * @todo terminar de calcular a tarifa
                 */
                if (ano === 22) {
                    for (var anox = 0; anox < 1; anox++) {
                        fvalorTarifa += reajusteAnualTarifa * fvalorTarifa;
                        custoOeM = custoOeM + (0.07 * custoOeM);
                    }
                }
                resultadoFinal = fvalorTarifa * eneGerAnualC;
                resultFinalInvest -= resultadoFinal;
            }
            resultFinalInvest = (resultFinalInvest * -1) - custoInversor;
            receitaAnualFv = fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5));
            receitaLiquidaAnual = (fvalorTarifa * parseInt(resultEneGerAual.toPrecision(5))) - custoOeM;
            return {
                fvalorTarifa: fvalorTarifa.toPrecision(3),
                resultEneGerAual: parseInt(resultEneGerAual.toPrecision(5)),
                receitaAnualFv: receitaAnualFv.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                custoOeM: custoOeM.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                receitaLiquidaAnual: receitaLiquidaAnual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                resultFinalInvest: resultFinalInvest.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            };
        };
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
            var minPrecoKwp;
            var despesaViagem = this.despesaViagema;
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
                //valor = 19862.19; valor em w 350 valor inicial fica maior que o valor final
                valor = 19162.19;
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
            else if (kwp > 19.20) {
                minPrecoKwp = 5302.56;
                valor = kwp * minPrecoKwp;
                precoKwp = 6000.67;
            }
            precoMinOrcamento = valor;
            precoMaxOrcamentoTmp = kwp * precoKwp;
            precoMaxOrcamento = precoMaxOrcamentoTmp;
            if (despesaViagem) {
                precoMaxOrcamento += despesaViagem;
            }
            valorEconomiaMensal = valorTarifa * (energiaGeradaAnual / 12);
            valorEconomizadoTrintaAnos = 360 * valorEconomiaMensal;
            var calcTirVpl = this.calculosTirVpl(valorTarifa, energiaGeradaAnual, precoMinOrcamento);
            return {
                desp: despesaViagem,
                quantModulos: quantidadeModulos,
                potenciaKwp: potenciaGeradorSolar.toPrecision(3),
                areaInst: areaInstalacao,
                energiaGeradaAnual: energiaGeradaAnual.toPrecision(6),
                valorEconomizadoTrintaAnos: valorEconomizadoTrintaAnos.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                valorEconomiaMensal: valorEconomiaMensal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                precoMinOrcamento: precoMinOrcamento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                precoMaxOrcamento: precoMaxOrcamento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                resultFinalInvest: calcTirVpl.resultFinalInvest
            };
        };
        ;
        CalculoFotoVoltaico.prototype.regexDecimal = function (arg) {
            var regex = /[0-9]+/g;
            var str = arg;
            var m;
            var temp = '';
            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                // The result can be accessed through the `m`-variable.
                m.forEach(function (match, groupIndex) {
                    console.log("Found match, group " + groupIndex + ": " + match);
                    temp = temp + '' + match;
                });
            }
            return parseInt(temp);
        };
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
    var $hidden;
    var despesaViagem;
    //  @todo parametros do sistema
    //=============================================
    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 0.1674;
    taxaDisponibilidade = 50;
    valorOrcamento = 44889.31;
    precoKwp = 6695.58;
    despesaViagem = false;
    //==============================================
    $uf = document.getElementById('estados');
    $btn = document.getElementsByClassName('primary button');
    $hidden = document.getElementById('metainput');
    $btn[0].onclick = function () {
        console.log($hidden.value);
        if ($hidden.value !== '4271 ') {
            console.log($hidden.value + ' Rondonópolis');
            //precoMaxOrcamento = precoMaxOrcamento + 2000;
            despesaViagem = 2000;
        }
        var regexs = new App.CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento, precoKwp, despesaViagem);
        valorTarifa = +$uf.selectedOptions[0].dataset.tarifa;
        energiaGerada = regexs.regexDecimal(+document.getElementById('kwh').value);
        //energiaGerada = +(<HTMLInputElement>document.getElementById('kwh')).value;
        contaEnergia = energiaGerada * valorTarifa;
        var calculo = new App.CalculoFotoVoltaico(contaEnergia, energiaGerada, valorTarifa, hsp, potenciaModulo, areaModulo, rendimentoModulo, taxaDisponibilidade, energiaAnualGerada, valorOrcamento, precoKwp, despesaViagem);
        var obj;
        obj = calculo.execute();
        //energiaGerada = regexs.regexDecimal(+(<HTMLInputElement>document.getElementById('kwh')).value);
        console.log(obj);
        console.log(energiaGerada);
        document.getElementById('geracao-anual').textContent = obj.energiaGeradaAnual;
        document.getElementById('mgeracao-anual').textContent = obj.energiaGeradaAnual;
        document.getElementById('tamanho-sistema').textContent = obj.potenciaKwp;
        document.getElementById('mtamanho-sistema').textContent = obj.potenciaKwp;
        document.getElementById('qtd-modulos').textContent = obj.quantModulos;
        document.getElementById('mqtd-modulos').textContent = obj.quantModulos;
        document.getElementById('economial-mensal').textContent = obj.valorEconomiaMensal;
        document.getElementById('meconomial-mensal').textContent = obj.valorEconomiaMensal;
        document.getElementById('economia-trinta-anos').textContent = obj.resultFinalInvest;
        document.getElementById('meconomia-trinta-anos').textContent = obj.resultFinalInvest;
        document.getElementById('precoMinOrcamento').textContent = obj.precoMinOrcamento;
        document.getElementById('mprecoMinOrcamento').textContent = obj.precoMinOrcamento;
        document.getElementById('precoMaxOrcamento').textContent = obj.precoMaxOrcamento;
        document.getElementById('mprecoMaxOrcamento').textContent = obj.precoMaxOrcamento;
        document.getElementById('area-instalacao').textContent = obj.areaInst.toPrecision(3);
        document.getElementById('marea-instalacao').textContent = obj.areaInst.toPrecision(3);
    };
})(App || (App = {}));
