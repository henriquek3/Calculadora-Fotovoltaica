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
            console.log(views[num]);
        }
    });

    $('.left.button').click(() => {
        if (num >= 1 ) {
            num -= 1;
            console.log(views[num]);
        }
    })

});