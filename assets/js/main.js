$(function(){

 // SCROLL SUAVE
  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

// Esconder texto cards

var hijos = $('.card').children();
//console.log('Muestra los hijos--->', hijos);

var textoUno = hijos.eq(1).find('p.card-text').hide();
var textoDos = hijos.eq(3).find('p.card-text').hide();
var textoTres = hijos.eq(5).find('p.card-text').hide();
var textoCuatro = hijos.eq(7).find('p.card-text').hide();
//console.log('Mostrar los textos--->', textoUno,textoDos,textoTres);

$( "#btnUno" ).click(function(event){
			event.preventDefault();
			textoUno.fadeToggle('fast');
      //console.log('Este es el boton Uno')
		});

$( "#btnDos" ).click(function(event){
			event.preventDefault();
			textoDos.fadeToggle('fast');
      //console.log('Este es el boton Dos')
		});

  $( "#btnTres" ).click(function(event){
    		event.preventDefault();
    		textoTres.fadeToggle('fast');
        //console.log('Este es el boton Tres')
    		});

  $( "#btnCuatro" ).click(function(event){
        event.preventDefault();
        textoCuatro.fadeToggle('fast');
        //console.log('Este es el boton Cuatro')
        });

});
