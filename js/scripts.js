$(document).ready(function() {
  $("#blanks form").submit(function() {
    var favColorInput = $("input#favcolor").val();
    var favAnimalInput = $("input#favanimal").val();
    var favBandInput = $("input#favband").val();
    var favFoodInput = $("input#favfood").val();
    var favPhoneInput = $("input#favphone").val();
    var favHobbyInput = $("input#favehobby").val();
    var favPersonInput = $("input#favperson").val();

    $(".favcolor").text(favColorInput);
    $(".favanimal").text(favAnimalInput);
    $(".favband").text(favBandInput);
    $(".favfood").text(favFoodInput);
    $(".favphone").text(favPhoneInput);
    $(".favhobby").text(favHobbyInput);
    $(".favperson").text(favPersonInput);

    $("#favlist").show();

    event.preventDefault();
  });
});