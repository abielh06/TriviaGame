$('#start').on('click',function(){
 game.start();
})

$(document).on('click','#end',function(){
  game.done();
})

var questions = [{
  question: "What Nation is Black Panther from?",
  answers:[ "  Wakanda  ", "  Uganda  ", "  South Africa  ", "  Nigeria  " ],
  rightAnswer: " Wakanda"
},{
  question: "What is the name of the blue glowing square that Loki uses as a weapon?",
  answers:[ "  The infinity Gem  ", "  The Soul Stone  ", "  The Tesseract  ", "  The Time Stone  "],
  rightAnswer: "The Tesseract"
},{ 
  question: "What is the name of Thor's Hammer",
  answers:[ " Lightning Maker  ", " Storm Bringer  ", " Mjolnir  ", " The Hammer  "],
  rightAnswer: "Mjolnir"
},{
  question: "The Avengers locate Thanos, post-snap, on a distant planet. What do they do to him?",
  answers:[ "  Give him a hug  ", "  Decapitate him  ", "  Have lunch with him  ", "  Dance  "],
  rightAnswer: "Decapitate him"
},{
  question: "Where does Natasha Romanoff locate Dr. Bruce Banner?",
  answers:[ "  In Space   ", "  Brazil   ", "  India   ", "  France   "],
  rightAnswer: "India"
}];

var game = {
  correct:0,
  inCorrect:0,
  counter: 20,

  countdown: function(){
    game.counter --;
    $('#counter').html(game.counter);
    if(game.counter===0){
      console.log("Time is up!");
      game.done();
    }
  },
  start: function(){
      timer=setInterval(game.countdown,1000);
      $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
      $('#start').remove();
      $('.jumbotron').remove();
      for(var i = 0; i<questions.length; i++){
        $('#subwrapper').append('<h2>'+ questions[i].question+'</h2>')
        for(var j=0;j<questions[i].answers.length; j++){
          $('#subwrapper').append("<input type= 'radio' name='questions-"+i+"' value='" +questions[i].answers[j]+ "' >" +questions[i].answers[j])
        }
      }
      $("#subwrapper").append('<br><button id = "end">DONE</button>')
   },

  done: function(){
    $.each($('input[name="question-0"]:checked'),function(){
      if($(this).val()==questions[0].rightAnswer){
        console.log(this)
        game.correct++;
      }else {
        game.inCorrect++;
      }
    });
    
    $.each($('input[name="question-1"]:checked'),function(){
      if($(this).val()==questions[1].rightAnswer){
        game.correct++;
      }else {
        game.inCorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'),function(){
      if($(this).val()==questions[2].rightAnswer){
        game.correct++;
      }else {
        game.inCorrect++;
      };
    });
    $.each($('input[name="question-3"]:checked'),function(){
      if($(this).val()==questions[3].rightAnswer){
        game.correct++;
      }else {
        game.inCorrect++;
      };
    });
    $.each($('input[name="question-4"]:checked'),function(){
      if($(this).val()==questions[4].rightAnswer){
        game.correct++;
      }else {
        game.inCorrect++;
      };
    });
   this.result();
  },
  
  result: function(){
  clearInterval(timer);
  $('#subwrapper h2').remove();
  $('#subwrapper').html("<h2>All Done!</h2>");
  $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>")
  $('#subwrapper').append("<h3>Incorrect Answers: "+this.correct+"</h3>")
  $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
  }
  

};
    
  