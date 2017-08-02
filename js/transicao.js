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
                    $('#localizacao').remove();
                    $('#tipoLocal').transition('slide left','2000ms');
                    console.log('tipo');break;
                case('consumo'):
                    $('div.step:last').addClass('active');
                    $('#tipoLocal').remove();
                    $('#consumo').transition('slide left','2000ms');
                    console.log('consumo');break;
            }
        }
    });

    $('.left.button').click(() => {
        if (num >= 1 ) {
            num -= 1;
            switch(views[num]){
                case('localizacao'):
                    console.log('localizacao');break;
                case('tipo'):
                    console.log('tipo');break;
                case('consumo'):
                    console.log('consumo');break;
            }
        }
    });

});