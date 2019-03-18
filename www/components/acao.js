var quantidade;
var resertar;
var radio;

$(document).on("click", "#calcular", function () {

  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var masculino = $("#masculino").val();
  var feminino = $("#feminino").val();
  var nivelAtividade = $("#nivelAtividade").val();
  var imb = $("#imb").val();
  $("#imb").val(imb);
});
  
  if (radio == masculino)
  {
    imb = nivelAtividade * (66 + (13,7 * Peso +  (5 * altura - (6,8 * idade))));
  }
  else if (radio == feminino)
  {
    imb = nivelAtividade * (655 + (13,7 * Peso + ( 5 * altura - (6,8 * idade))));
  }


 $(document).on("click", "#resertar", function () {

  var peso = $("#peso").val("");
  var altura = $("#altura").val("");
  var idade = $("#idade").val("");
  var imb = $("#imb").val("");
});  