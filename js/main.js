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
                dataType: 'html'
            })
                .done(function (response) {
                    $('#estados').html('<option> - selecione - </option>' + response);
                    /*console.log(response);*/
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
        uf = $('#estados').val();
        /*console.log(uf);*/
        $.ajax({
            method: 'GET',
            url: 'php/cidades.php',
            dataType: 'html',
            data: {
                'uf': uf
            }
        })
            .done(function (response) {
                /* console.log(response); */
                $('#cidades').html(response);
            })
            .fail(function (responseText) {
                console.log(responseText);
            });
    });
});