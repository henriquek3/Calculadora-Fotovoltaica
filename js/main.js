$(document).ready(function () {
    let ufloaded = '';

    /*
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
                for (let dados of response){                                        
                    html += '<option value="' + dados.uf_nome + '" data-tarifa="' + dados.tarifa + '">' + dados.nome + '</option>';                    
                    $('#estados').html('<option> - selecione - </option>' + html);
                }                                            
            })
            .fail(function (response) {
                console.log(response);
            });
        }
    });

    /*
     * @todo carregar cidades de acordo com o estado
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
            let html = '';                        
            for(let dados of response){
                html += '<option value="' + dados.cidade_codigo + '">' + dados.nome + '</option>';
                $('#cidades').html(html);
            }
        })
        .fail(function (responseText) {
            console.log(responseText);
        });
    });
});