var quantidade;
var resertar;
var sexo;

$(document).on("click", "#radio", function () {

  var sexo = $("#radio").val();
  var masculino = $("#masculino").val(masculino);
  var feminino = $("#feminino").val(feminino);

});

$(document).on("click", "#calcular", function () {

  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var imb = $("#imb").val();

   var masculino = (66 + (13.7 * peso + (5 * altura - (6.8 * idade))));
   var feminino =  (655 + (9.6 * peso + (1.8 * altura - (4.7 * idade))));
  
  if (imb < 1.2) {     
     quantidade = "Pouco ou nenhum exercício";
  }
  else if ((imb >= 1.2) && (imb <= 1.375)) {
     quantidade = "Exercício leve 1 a 3 dias por semana";
  }
  else if ((imb >= 1.55) && (imb <= 1.725)) {
    quantidade = "Exercício moderado, faz esportes 3 a 5 dias por semana";
  }
  else if ((imb >= 1.725) && (imb <= 1.9)){
     quantidade = "Exercício pesado de 5 a 6 dias por semana";
  }
  else if (imb > 1.9) {
     quantidade = "Exercício pesado diariamente e até 2 vezes por dia";
  }


  $("#quantidade").val(quantidade);
  $("#imb").val(imb);
  }); 

 $(document).on("click", "#resertar", function () {

  var peso = $("#peso").val("");
  var altura = $("#altura").val("");
  var idade = $("#idade").val("");
  var imb = $("#imb").val("")
  var quantidade = $("#quantidade").val("");
});     