$(document).ready(function () {
    /**
     * @var saber se já esta carregado o uf estados;
     * @type {string}
     */
    let ufloaded = '';

    /**
     * @todo popular select estados
     */
    $('#uf').on('mouseenter', function () {
        if (ufloaded === '') {
            ufloaded = 'loaded';
            $.ajax({
                method: 'GET',
                url: 'php/estados.php',
                dataType: 'json'
            })
                .done(function (response) {
                    let html = '';
                    for (let dados of response) {
                        html += '<option value="' + dados.uf_nome + '" data-tarifa="' + dados.tarifa + '">' + dados.nome + '</option>';
                        $('#estados').html('<option>Estados</option>' + html);
                    }
                })
                .fail(function (response) {
                    console.log(response);
                });
        }
    });

    /**
     * @todo carregar cidades de acordo com o estado
     */
    $('#estados').change(function () {
        $uf = $(this);
        uf = $uf.val();
        tf = $uf.find(':selected').data('tarifa');
        $.ajax({
            method: 'GET',
            url: 'php/cidades.php',
            dataType: 'json',
            data: {
                'uf': uf
            }
        })
            .done(function (response) {
                let html = '<option value="nao-informado">Cidades</option>';
                for (let dados of response) {
                    html += '<option value="' + dados.cidade_codigo + '">' + dados.nome + '</option>';
                    $('#cidades').html(html);
                }
            })
            .fail(function (responseText) {
                console.log(responseText);
            });
    });

    /**
     * @todo ir para tela de resultados
     */
    $('.ui.big.primary.button').click(function () {
        $('#header-calculadora').css('display', 'none');
        $('#corpo-calculadora').css('display', 'none');
        $('#header-resultado').css('display', 'block');
        $('#corpo-resultado').css('display', 'block');
        resultado(document.getElementById('kwh').value, 0);
        let k = document.getElementById('kwh').value;
        let kmtotal = 12 * (k / 5.565);
        document.getElementById("carro-eletrico").innerHTML = Math.round(kmtotal);
        document.getElementById("mcarro-eletrico").innerHTML = Math.round(kmtotal);
    });

    /**
     * @todo verifica se os campos foram preenchidos
     */
    $('#cidades').change(function () {
        let $kwh = document.getElementById('kwh').value;
        switch ($kwh) {
            case '':
                console.log($kwh + ' - case01');
                break;
            case null:
                console.log($kwh + ' - case02');
                break;
            case NaN:
                console.log($kwh);
                break;
            default:
                $('.ui.big.primary.button').removeClass('disabled');
        }
        $( "#cidades option:selected" ).each(function() {
           let str = $( this ).val() + " ";
           if (str === '4271 ') {
               $('#metainput').val(str);
           }
        });
    });
    $('#kwh').change(function () {
        let $cid = document.getElementById('cidades').value;
        if ($cid !== 'nao-informado' && this.value > 1) {
            $('.ui.big.primary.button').removeClass('disabled');
        }
    });

});