var resertar;

$(document).on("click", "#calcular", function () {

  var sexo = $("#sexo").val();
  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var nivelAtividade = $("#nivelAtividade").val();
  var Resultado;

  if (sexo == 'masculino') {
    Resultado = nivelAtividade * (66 + (13, 7 * peso + (5 * altura - (6, 8 * idade))));
  }
  else if (sexo == 'feminino') {
    Resultado = nivelAtividade * (655 + (13, 7 * peso + (5 * altura - (6, 8 * idade))));
  }
 $ ("#Resultado").val(Resultado);


});
$(document).on("click", "#resertar", function () {

  var peso = $("#peso").val("");
  var altura = $("#altura").val("");
  var idade = $("#idade").val("");
  var Resultado = $("#Resultado").val("");
  var sexo = $("#sexo").val("");
});  