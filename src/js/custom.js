$(document).ready(function () {
  $("ul.smart-tab a").click(function(event){event.preventDefault();})
  $(".smart-element").parent().hide();
  $(".smart-element").parent().first().show();
  $("ul.smart-tab >").click(function(){
    $("ul.smart-tab >").removeClass("active")
    $(".smart-element").parent().hide();
    $(this).addClass("active")
    var elementId = $(this).attr('element')
    $("#" + elementId).parent().show()
  })
})