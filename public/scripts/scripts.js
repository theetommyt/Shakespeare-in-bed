
$(document).ready(function(){


  $("#form-name").on("submit", function(e){
    e.preventDefault();


    $.ajax({
      method: "get",
      url: "http://shakeitspeare.com/api/sentence",
      success: function(sentenceData){
        $("#my-line").text(sentenceData.sentence.replace(/[\.?!]/,"") + " ");
      }
    });

    var name = $("#name").val();
    $("#line2").text(" with " + name + " in bed.")

  });

});
