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

  $("#tag_cloud > a").click(function(){
    var tagId = $(this).attr('title')
    $(".one-tag-list").hide()
    $("#" + tagId).show()

    if (tagId == "all") {
      $(".one-tag-list").show()
    }

  })

  //Fix terminal style by bootstrap conflict 
  var terminalCloseBtn = $(".terminal > nav:first-of-type a.close")
  terminalCloseBtn.removeClass("close")
  terminalCloseBtn.addClass("closeBtn")
  terminalCloseBtn.css('background', '#FD4E4B');
}) 