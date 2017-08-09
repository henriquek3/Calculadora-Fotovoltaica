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

let valkw = 'R$ ' + 0.67;
$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 150,
        min: 100,
        max: 10000,
        /*step: 11,*/
        slide: function (event, ui) {
            $("#amount").val("R$" + ui.value);
        }
    });
    $("#amount").val("R$" + $("#slider-range-min").slider("value"));
});
$('#cidades').change(function () {
    console.log('city change');
    $('.custokw').show();
    $('.custokw:last-child input').attr('value', valkw);
});