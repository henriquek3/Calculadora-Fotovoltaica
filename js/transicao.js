$(document).ready(function () {
    let views = [
        'localizacao',
        'tipo',
        'consumo'
    ];
    let num = 0;
    let tipolocal = '';
    let ufload = '';
    let uf = '';
    $('.right.button').click(() => {
        if (num <= 1 ) {
            num += 1;
            switch(views[num]){
                case('localizacao'):
                    $('div.step:first').addClass('active');
                    console.log('localizacao');break;
                case('tipo'):
                    $('div.step:odd').addClass('active');
                    $('div.step:last').removeClass('disabled');
                    $('div.step:first').removeClass('active');
                    $('#localizacao').transition('hide');
                    $('#tipoLocal').transition('slide right', '2000ms');
                    console.log('tipo');break;
                case('consumo'):
                    $('div.step:odd').removeClass('active');
                    $('div.step:first').removeClass('active');
                    $('div.step:first').addClass('disabled');
                    $('div.step:last').removeClass('disabled');
                    $('div.step:last').addClass('active');
                    $('#tipoLocal').transition('hide');
                    $('#consumo').transition('slide right', '2000ms');
                    console.log('consumo');break;
            }
        }
    });

    $('.left.button').click(() => {
        if (num >= 1 ) {
            num -= 1;
            switch(views[num]){
                case('localizacao'):
                    $('div.step:first').addClass('active');
                    $('div.step:last').addClass('disabled');
                    $('div.step:odd').removeClass('active');
                    $('#tipoLocal').transition('hide');
                    $('#localizacao').transition('slide left', '2000ms');
                    console.log('localizacao');break;
                case('tipo'):
                    $('div.step:odd').addClass('active');
                    $('div.step:first').removeClass('active');
                    $('div.step:first').removeClass('disabled');
                    $('div.step:last').removeClass('active');
                    $('#consumo').transition('hide');
                    $('#tipoLocal').transition('slide left', '2000ms');
                    console.log('tipo');break;
                case('consumo'):
                    console.log('consumo');break;
            }
        }
    });

    /*
     * @todo add css on mouse hover cards
     */
    $('.card').hover(function () {
        $(this).addClass('cardhover');
        $('.cardhover').click(function () {
            $(this).removeClass('cardhover');
            $('.card').css('border', '');
            $(this).css('border', '5px solid orange');
        });
    });

    /*
     * @todo seta variavel 'tipolocal'
     */
    $('.card').click(function () {
        tipolocal = $(this).attr('id');
        console.log(tipolocal);
    });

    /*
     * @todo popular select estados
     */
    $('#uf').on('mouseenter', function () {
        if (ufload === '') {
            ufload = 'loaded';
            console.log("click estados");
            $.ajax({
                method: 'GET',
                url: 'php/estados.php',
                dataType: 'html'
            })
                .done(function (response) {
                    $('#estados').html('<option> - selecione - </option>' + response);
                    console.log(response);
                })
                .fail(function (response) {
                    console.log(response);
                });
        }
    });

    $('#estados').change(function () {
        uf = $('#estados').val();
        console.log(uf);
        $.ajax({
            method: 'GET',
            url: 'php/cidades.php',
            dataType: 'html'
        })

            .done(function (response) {

            })

    })

});
