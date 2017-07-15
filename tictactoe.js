$(document).ready(function(){

  var player = 1;
  var random = Math.floor(Math.random()*9)+1;
  var rand = Math.floor(Math.random()*9)+1;
  var tag = ".sq" + rand.toString();
  console.log(tag);
  $('#win').hide();
  $('#lose').hide();
  $('#reset').hide();

  $('.square').on('click',function(event){
    var squareSelected = $(this);
    if(squareSelected.hasClass('ex')|| squareSelected.hasClass('ex')){
      alert('THIS IS ALREADY TAKEN DUMBASS!!!');
    }
    else{
      if(player===1){
        squareSelected.addClass('ex').append('X');
        if(didiwin('ex')){
          $('#board').hide();
          $('#win').show();
          $('#reset').show();
          $("#reset").click(function(){
            history.go(0);
          });

        }
        else{
          player = 2;
        }

      }else{
        $(randomSquare(random)).addClass('oh').append('O');
        if(didiwin('oh')){
          $('#board').hide();
          $('#lose').show();
          $('#reset').show();
          $("#reset").click(function(){
            history.go(0);
          });
        }else{
          player = 1;
        }
      }
    }
});






 function randomSquare(rand){
   while($(tag).hasClass('ex') || $(tag).hasClass('oh')){
    rand = Math.floor(Math.random()*9)+1;
    tag = ".sq" + rand.toString();
      }
    return tag;
  };

  function didiwin(symbol){
    if($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)){
      return true;
    }
    else if($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)){
      return true;
    }
    else if($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)){
      return true;
    }
   else if($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)){
      return true;
    }
   else if($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)){
      return true;
    }
   else if($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)){
      return true;
    }
   else if($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)){
      return true;
    }
   else if($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)){
      return true;
    }
    else{
      return false;
    }
  };



});
