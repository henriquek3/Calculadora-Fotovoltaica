/**
 * Created by henri on 09/08/2017.
 */

$('section').transition('hide');
$('.ui.dropdown').dropdown();
$('#tipoLocal').transition('hide');
$('#consumo').transition('hide');
$('div.step:first').addClass('active');
$('.card').attr('align', 'center');
$('.card').css('height', '150px');
$('.custokw').hide();

let valoruf = 0.67;
let valorslider = 0;
let res = 0;

$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 50,
        min: 0,
        max: 3000,
        /*step: 11,*/
        slide: function (event, ui) {
            $("#amount").val("R$" + ui.value);
            /* colocar a formula aqui */
            valorslider = ui.value;
            res = valorslider / valoruf;
            $('#valorkw').val(res.toPrecision(5));

        }
    });
    $("#amount").val("R$" + $("#slider-range-min").slider("value"));
});


$('#cidades').change(function () {
    console.log('city change');
    $('.custokw').show();
    $('.custokw:last-child input').attr('value', valoruf);
});

$('#valoruf').change(function () {
    valoruf = $(this).val();
});