$(document).ready(function () {
    let views = [
        'localizacao',
        'tipo',
        'consumo'
    ];
    let num = 0;
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

});