//Business Logic
//To-Do Object Constructor
function toDoItem(whatToDo) {
  this.whatToDo = whatToDo;
}



//User Interface Logic
$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    //Extend jQuery with animate css
    $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });

    // Get Input Value
    var inputtedToDo = $("input#text-input").val();

    //Make New To Object Using Constructor
    var newToDo = new toDoItem (inputtedToDo);

    //Add new item to list
    $("#to-do-list").append("<li class='animate bounceOutRight'><span class='to-do-list-item'>" + newToDo.whatToDo + " <input type='checkbox' class='checkbox-inline' value='checked'>" + "</span></li>")

    $(".checkbox-inline").last().click(function() {
      $(".animate").animateCss('animated bounceOutRight');
      // $(this).remove();
    });

    // $("#jumbotron-1").animateCss('animated bounceOutRight')

    // function() {
    //
    // };

    //Reset Field
    $("input#text-input").val("");
  });
});
