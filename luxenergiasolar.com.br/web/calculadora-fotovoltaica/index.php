<!doctype html>
<!--suppress Annotator -->
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Link site -->
    <link rel="stylesheet" href="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/css/foundation.css" />
    <link rel="stylesheet" href="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/font/stylesheet.css" />
    <link rel="stylesheet" href="css/luxsolar.css" />
    <!-- Libs de terceiros -->
    <link rel="stylesheet" href="vendor/semantic/ui/dist/semantic.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--<script src="vendor/components/jquery/jquery.js"></script>-->
    <script src="vendor/semantic/ui/dist/semantic.min.js"></script>
    <!-- CSS Personalizado -->
    <link rel="stylesheet" href="css/style.css">
    <title>Calculadora</title>
</head>
<body>
<div class="row space_top_vinte space_bottom_vinte">
    <div class="medium-4 large-4 columns">
        <a href="http://luxenergiasolar.com.br" title="LuxSolar &#8211; Economize Até 95% de Energia: Clientes"><img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/logo.jpg" width="340px"></a>
    </div>
    <div class="medium-8 large-8 columns space_top_quarenta">
        <img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/top1.jpg">
    </div>
</div>

<div id="amarelo_linear">
    <div class="row">
        <div class="medium-6 large-6 columns">
            <a href="#azul_linear"><img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/soliciteorcamento.jpg"></a>
        </div>
        <div class="medium-6 large-6 columns">
            <a href="http://luxenergiasolar.com.br/calculadora-fotovoltaica"><img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/calculadorasolar.jpg"></a>
        </div>
    </div>
</div>
<div class="row">
    <div class="medium-12 large-12 columns text-center menu-centered">
        <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
            <button class="menu-icon" type="button" data-toggle="example-menu"></button>
            <div class="title-bar-title">Menu</div>
        </div>
        <div class="top-bar" id="example-menu">
            <div class="menu-centered">
                <ul class="menu simple" data-magellan>
                    <li><a href="http://luxenergiasolar.com.br" title="LuxSolar &#8211; Economize Até 95% de Energia: Clientes">HOME</a></li>
                    <li><a href="http://luxenergiasolar.com.br/solucoes-residenciais-empresariais-e-industriais">SERVIÇOS</a></li>
                    <li><a href="http://luxenergiasolar.com.br/como-funciona">COMO FUNCIONA</a></li>
                    <li><a href="http://luxenergiasolar.com.br/clientes">CLIENTES</a></li>
                    <li><a href="#">REAPROV. DE ÁGUA</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<header id="header-calculadora" style="margin-top: 50px;">
    <div class="ui center aligned header">
        <h2 class="ui icon header">
            <i class="blue calculator icon"></i>
            <span class="content">
                Calculadora Solar
                <span class="sub header">Com algumas informações vamos calcular o sistema de captação fotovoltaica.</span>
            </span>
        </h2>
    </div>
</header>

<!-- corpo full -->
<main class="ui container">
    <!-- Corpo da Calculadora -->
    <div class="ui big form" id="corpo-calculadora">
        <div class="">
            <br>
            <div style="text-align: center;">
                <h3 class="">Informe a média anual de consumo em Quilowatt-Hora <!--, caso não saiba <a href="#">clique aqui!</a>--> <i class="circular green lightning icon"></i></h3>
            </div>
            <p></p>
            <div>
                <div class="inline fields" style="justify-content: center">
                    <div class="two wide field">
                        <label for="kwh">Média:</label>
                    </div>
                    <div class="four wide field">
                        <span class="ui" data-tooltip="Não Utilize ponto ou vírgula" data-variation="tiny"
                              data-position="bottom center">
                            <input type="number" id="kwh" pattern="[0-9]+" required>
                        </span>
                        <span id="modalsemantic"><a href="#" class="ui left pointing label" id="find-media">Encontrar média?</a></span>
                    </div>
                </div>
            </div>
            <br>
            <div style="text-align: center;">
                <h3>O próximo passo é a localização <i class="circular green marker icon"></i></h3>
            </div>
            <p></p>
            <div style="">
                <div class="">
                    <div class="">
                        <div class="inline fields" id="uf" style="justify-content: center">
                            <div class="two wide field">
                                <label for="estados">Estado:</label>
                            </div>
                            <div class="four wide field">
                                <select name="estados" id="estados">
                                    <option value="01">Estados</option>
                                </select>
                            </div>
                        </div>
                        <div class="inline fields" style="justify-content: center">
                            <div class="two wide field">
                                <label for="cidades">Cidade:</label>
                            </div>
                            <div class="four wide field">
                                <select class="ui search dropdown" name="municipio" id="cidades">
                                    <option value="nao-informado">Cidades</option>
                                </select>
                            </div>
                        </div>
                        <div class="inline fields" style="display: none;justify-content: center" >
                            <div class="three wide field">
                                <label for="tarifa">Tarifa:</label>
                            </div>
                            <div class="four wide field">
                                <div class="ui tarifa left labeled input">
                                    <div class="ui basic label">R$</div>
                                    <input type="text" value="0.67" id="tarifa" maxlength="6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
            <div class="inline fields" style="justify-content: center;margin-bottom: 50px;">
                <div class="six wide field">
                    <button type="submit" class="fluid ui big disabled primary button"><span class="txt-button">Calcular</span></button>
                </div>
            </div>
        </div>
    </div>

    <!-- Corpo do Resultado -->
    <header style="display: none" id="header-resultado">
        <div class="ui center aligned header">
            <h2 class="ui icon header">
                <i class="blue calculator icon"></i>
                <span class="content">
                Calculadora Solar
                <span class="sub header">Confira os resultados apróximados para o seu cálculo de sistema fotovoltaico</span>
            </span>
            </h2>
        </div>
    </header>
    <section class="ui grid container" id="corpo-resultado" style="display: none">
        <div class="computer only row">
            <div class="sixteen wide column">
                <div class="ui horizontal raised segments">
                    <div class="ui blue segment">
                        <h3 class="ui center aligned header">Valor de Investimento <i class="dollar icon"></i></h3>
                        <div class="ui divider"></div>

                        <h4>Estimativa</h4>
                        <p>De <span id="precoMinOrcamento"></span> a <span id="precoMaxOrcamento"></span></p>

                        <h4>Economia mensal</h4>
                        <p><span id="economial-mensal"></span></p>

                        <h4>Economia total acumulada em 25 anos</h4>
                        <p><span id="economia-trinta-anos"></span></p>

                    </div>
                    <div class="ui red segment">
                        <h3 class="ui center aligned header">Sistema Indicado <i class="lightning icon"></i></h3>
                        <div class="ui divider"></div>

                        <h4>Tamanho do Sistema</h4>
                        <p><span id="tamanho-sistema"></span> kWp</p>

                        <h4>Módulos e Área necessária</h4>
                        <p><span id="qtd-modulos"></span> módulos e <span id="area-instalacao"></span> m2</p>

                        <h4>Produção anual estimada</h4>
                        <p><span id="geracao-anual"></span> KWh</p>

                    </div>
                    <div class="ui green segment">
                        <h3 class="ui center aligned header">Estimativa Ambiental <i class="leaf icon"></i></h3>
                        <div class="ui divider"></div>

                        <h4>Redução de CO2 na atmosfera</h4>
                        <p><span id="reducao-co"></span> toneladas de CO2</p>

                        <h4>Equivalente a árvores plantadas</h4>
                        <p><span id="arvores-plantadas"></span> árvores plantadas</p>

                        <h4>Equivalente a KM rodados de carro</h4>
                        <p><span id="carro-eletrico"></span> km </p>

                    </div>
                </div>
            </div>
        </div>
        <!-- responsive -->
        <div class="tablet only mobile only sixteen wide column">
            <div class="ui raised segments">
                <div class="ui blue segment">
                    <h3 class="ui center aligned header">Valor de Investimento <i class="dollar icon"></i></h3>
                    <div class="ui divider"></div>

                    <h4>Estimativa</h4>
                    <p>De <span id="mprecoMinOrcamento"></span> a <span id="mprecoMaxOrcamento"></span></p>

                    <h4>Economia mensal</h4>
                    <p><span id="meconomial-mensal"></span></p>

                    <h4>Economia total acumulada em 25 anos</h4>
                    <p><span id="meconomia-trinta-anos"></span></p>
                </div>
                <div class="ui red segment">
                    <h3 class="ui center aligned header">Sistema Indicado <i class="lightning icon"></i></h3>
                    <div class="ui divider"></div>

                    <h4>Tamanho do Sistema</h4>
                    <p><span id="mtamanho-sistema"></span> kWp</p>

                    <h4>Módulos e Área necessária</h4>
                    <p><span id="mqtd-modulos"></span> módulos e <span id="marea-instalacao"></span> m2</p>

                    <h4>Produção anual estimada</h4>
                    <p><span id="mgeracao-anual"></span> KWh</p>
                </div>
                <div class="ui green segment">
                    <h3 class="ui center aligned header">Estimativa Ambiental <i class="leaf icon"></i></h3>
                    <div class="ui divider"></div>

                    <h4>Redução de CO2 na atmosfera</h4>
                    <p><span id="mreducao-co"></span> toneladas de CO2</p>

                    <h4>Equivalente a árvores plantadas</h4>
                    <p><span id="marvores-plantadas"></span> árvores plantadas</p>

                    <h4>Equivalente a KM rodados de carro</h4>
                    <p><span id="mcarro-eletrico"></span> km </p>

                </div>
            </div>
        </div>
    </section>
</main>

<!--Modal Computer/tablet only-->
<div class="ui small modal" id="desktopModal">
    <div class="header">Como Encontrar a Média?</div>
    <div class="scrolling content">
        <div class="texto-modal">
            <p>
                Verifique em sua <b>conta de energia</b> elétrica
                o campo consumo médio anual,
                e então poderemos saber qual tipo de sistema
                é o mais indicado de acordo com seu consumo.
            </p>
        </div>
        <div class="like-icon">
            <i class="huge pointing right blue icon"></i>
            <p><b>Aqui registra a média!</b></p>
        </div>
        <div class="img-conta-energia">
            <img src="images/energia-edit.png" alt="">
        </div>
    </div>
    <div class="actions">
        <div class="ui approve blue button">Entendi</div>
    </div>
</div>

<!--Modal mobile only-->
<div class="ui small modal" id="mobileModal">
    <div class="header">Como Encontrar a Média?</div>
    <div class="scrolling content">
        <div class="texto-modal">
            <p>
                Verifique em sua <b>conta de energia</b> elétrica
                o campo consumo médio anual,
                e então poderemos saber qual tipo de sistema
                é o mais indicado de acordo com seu consumo.
            </p>
        </div>

        <div class="" style="margin-top: 249px;margin-left: 37px;">
            <i class="huge pointing right blue icon"></i>
            <p><b>Aqui!</b></p>
        </div>
        <div class="img-conta-energia" style="margin-right: -30px;">
            <img src="images/energia-edit.png" alt="Aqui jaz a imagem" style="width: 195px;height: 255px;margin-top: 65px">
        </div>
    </div>
    <div class="actions">
        <div class="ui approve blue button">Entendi</div>
    </div>
</div>

<p></p>
<div id="azul_linear">
    <div class="row bg_amarelo">
        <div class="medium-12 large-12 columns text-center peca_orcamento">
            <h1>PEÇA SEU ORÇAMENTO AGORA!</h1>
        </div>
    </div>

    <div class="row">
        <div class="medium-6 large-6 columns descricao_empresa">
            <h2># A EMPRESA QUE MAIS CRESCE NO ESTADO DO MATO GROSSO<br>
                # CLIENTES SATISFEITOS<br>
                # GARANTIA E ASSISTÊNCIA<br>
                # TECNOLOCIA CERTIFICADA<br>
                # PROFISSIONAIS ESPECIALIZADOS<br>
                # EXPERIÊNCIA COMPROVADA<br>
                # MODERNIDADE E INOVAÇÃO<br>
                # ECONOMIA GARANTIDA<br>
                # MELHOR INVESTIMENTO ATUAL<br>
                # SUSTENTABILIDADE</h2>
        </div>
        <div class="medium-6 large-6 columns form_index space_top_vinte">
            <div role="form" class="wpcf7" id="wpcf7-f86-o1" lang="pt-BR" dir="ltr">
                <div class="screen-reader-response"></div>
                <form action="/clientes/#wpcf7-f86-o1" method="post" class="wpcf7-form" enctype="multipart/form-data" novalidate="novalidate">
                    <div style="display: none;">
                        <input type="hidden" name="_wpcf7" value="86" />
                        <input type="hidden" name="_wpcf7_version" value="4.9" />
                        <input type="hidden" name="_wpcf7_locale" value="pt_BR" />
                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f86-o1" />
                        <input type="hidden" name="_wpcf7_container_post" value="0" />
                    </div>
                    <div class="row">
                        <div class="medium-12 large-12 columns"><label> Nome Completo<br />
                                <span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></div>
                    </div>
                    <div class="row">
                        <div class="medium-12 large-12 columns"><label> E-mail<br />
                                <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label></div>
                    </div>
                    <div class="row">
                        <div class="medium-6 large-6 columns"><label> Telefone/Celular<br />
                                <span class="wpcf7-form-control-wrap tel_celular"><input type="tel" name="tel_celular" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" /></span> </label></div>
                        <div class="medium-6 large-6 columns"><label> Cidade/Estado<br />
                                <span class="wpcf7-form-control-wrap cidade"><input type="text" name="cidade" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></div>
                    </div>
                    <div class="row">
                        <div class="medium-12 large-12 columns">
                            <label> Como conheceu a Lux Solar?<br />
                                <span class="wpcf7-form-control-wrap como_conheceu"><input type="text" name="como_conheceu" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></div>
                    </div>
                    <div class="row">
                        <div class="medium-12 large-12 columns">
                            <label> Se possível, anexe uma cópia de sua conta de luz (foto ou pdf)<br />
                                <span class="wpcf7-form-control-wrap foto_pdf"><input type="file" name="foto_pdf" size="40" class="wpcf7-form-control wpcf7-file" aria-invalid="false" /></span> </label></div>
                    </div>
                    <div class="row">
                        <div class="medium-12 large-12 columns">
                            <input type="submit" value="Enviar Dados e Receber Orçamento Gratuito" class="wpcf7-form-control wpcf7-submit" /></div>
                    </div>
                    <div class="wpcf7-response-output wpcf7-display-none"></div></form></div>              </div>
    </div>
</div>
<div id="bg_amarelo">
    <div class="row space_top_vinte space_bottom_vinte">
        <div class="medium-12 large-12 columns text-center">
            <img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/logo_footer.png">
        </div>
    </div>
</div>

<div class="row space_top_vinte">
    <div class="medium-12 large-12 columns text-center">
        <h2>CENTRAL DE ATENDIMENTO</h2>
        <h1><b>(66) 3022.3575 ou (66) 99670.0722</b><img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/iconwhatsapp.jpg" width="32px"></h1>
    </div>
</div>
<div class="row space_top_vinte space_bottom_vinte">
    <div class="medium-6 large-6 columns">
        <h2>ATENDIMENTO ONLINE</h2>
        <h1><b>luxsolar@luxenergiasolar.com.br</b></h1>
    </div>
    <div class="medium-6 large-6 columns">
        <h2>ONDE ESTAMOS <a href="https://goo.gl/maps/tLep8eWATQE2" target="_blank"><img src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/img/cliqueaqui.jpg"></a></h2>
        <h1><b>Rua Ariadne F. Campos, 223 - Vila Aurora
                Rondonópolis-MT | CEP 78740.114</b></h1>
    </div>
</div>

<footer>
    <div id="bg_azul">
        <div class="row space_top_vinte space_bottom_vinte">
            <div class="medium-12 large-12 columns text-center">
                Copyright @ 2017 - Lux Solar Eficiência Energética. Todos os direitos reservados.
            </div>
        </div>
    </div>
</footer>
<script src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/js/vendor/what-input.js"></script>
<script src="http://luxenergiasolar.com.br/wp-content/themes/luxsolar/js/vendor/foundation.min.js"></script>
<script>$(document).foundation();</script>
<!--suppress ES6ConvertVarToLetConst -->
<script type='text/javascript'>
    /* <![CDATA[ */
    var wpcf7 = {"apiSettings":{"root":"http:\/\/luxenergiasolar.com.br\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"Verifique se voc\u00ea n\u00e3o \u00e9 um rob\u00f4."}}};
    /* ]]> */
</script>
<script type='text/javascript' src='http://luxenergiasolar.com.br/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=4.9'></script>
<script type='text/javascript' src='http://luxenergiasolar.com.br/wp-includes/js/wp-embed.min.js?ver=4.7.6'></script>
<script src="js/co2.js"></script>
<script src="js/main.js"></script>
<script src="js/app.min.js"></script>
<script>$('#estados,#cidades').dropdown();</script>
<script>$(document).ready(function () {
        let tam = $(window).width();
        if (tam >= 1024) {
            $('#desktopModal').modal('attach events', '#modalsemantic', 'show');
        } else {
            $('#mobileModal').modal('attach events', '#modalsemantic', 'show');
        }
    });</script>
</body>
</html>