$(document).ready(function () {
    let ufloaded = '';
    /*
     @todo popular select estados
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
                for (let dados of response){                                        
                    html += '<option value="' + dados.uf_nome + '" data-tarifa="' + dados.tarifa + '">' + dados.nome + '</option>';                    
                    $('#estados').html('<option>Estados</option>' + html);
                }                                            
            })
            .fail(function (response) {
                console.log(response);
            });
        }
    });

    /*
     @todo carregar cidades de acordo com o estado
     */
    $('#estados').change(function () {
        $uf = $(this);        
        uf = $uf.val();
        tf = $uf.find(':selected').data('tarifa');
        console.log(uf,tf);
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
            for(let dados of response){
                html += '<option value="' + dados.cidade_codigo + '">' + dados.nome + '</option>';
                $('#cidades').html(html);
            }
        })
        .fail(function (responseText) {
            console.log(responseText);
        });
    });

    /*
     @todo ir para tela de resultados
     */
    $('.ui.big.primary.button').click(function () {
        $('#header-calculadora').css('display', 'none');
        $('#corpo-calculadora').css('display', 'none');
        $('#header-resultado').css('display', 'block');
        $('#corpo-resultado').css('display', 'block');
        resultado(document.getElementById('kwh').value,0);
        let k = document.getElementById('kwh').value;
        let kmtotal = 12 * (k / 5.565);
        document.getElementById("carro-eletrico").innerHTML = Math.round(kmtotal);
    });

    /*
     @todo verifica se os campos foram preenchidos
     */
    $('#cidades').change(function () {
        let $kwh = document.getElementById('kwh').value;
        switch ($kwh) {
            case '':
                console.log($kwh + ' - case01');break;
            case null:
                console.log($kwh + ' - case02');break;
            case NaN:
                console.log($kwh);break;
            default:
                $('.ui.big.primary.button').removeClass('disabled');
                //console.log('class removed');
        }
    });
    $('#kwh').change(function () {
        let $cid = document.getElementById('cidades').value;
        if ($cid !== 'nao-informado' && this.value > 1) {
            //console.log(this.value);
            //console.log($cid);
            $('.ui.big.primary.button').removeClass('disabled');
            //console.log('removido class disabled do button ');
        }
    });

});