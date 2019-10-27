$('#start').on('click',function(){
  for(var i = 0; i<questions.length; i++){
    $('#subwrapper').append('<h2>'+ questions[i]+'</h2>')
    for(var j=0;j<questions[i].answers.length; j++){
      $('#subwrapper').append("<input type= 'radio' name='questions-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
    }
  
  }
})
var questions = [{
  question: "What Nation is Black Panther from?",
  answers:["Wakanda", "Uganda", "South Africa", "Nigeria"],
  rightAnswer: "Wakanda"
},{
  question: "What is the name of the blue glowing square that Loki uses as a weapon?",
  answers:["The infinity Gem", "The Soul Stone", "The Tesseract", "The Time Stone"],
  rightAnswer: "The Tesseract"
},{ 
  question: "What is the name of Thor's Hammer",
  answers:["Lightning Maker", "Storm Bringer", "Mjolnir", "The Hammer"],
  rightAnswer: "Mjolnir"
}];









// var intervalId;
// var clockRunning = false;
// var time = 10;


// var correct = 0;
// var inCorrect = 0;
// var unanswered = 0;
// var start; 
// var stop;


// // rightChoice = ["Wakanda", "The Tesseract", "Mjolnir",]
// // for (var i = 0; i < rightChoice.length; i++);{
    
// // }
// function count(){
//             time --;
//             clockRunning = true;
//             $("#timer-display").html(time);
//         } 
// function start(){
//      if(!clockRunning){
//         intervalId = setInterval(count, 1000);
        
//     }   
//     }
// start();
// if (time  < 0) {
//     // clockRunning = false;
//     stop();
//   }
// function stop() {
//   clearInterval(intervalId);
// }


// $(document).ready(function(){
//     $("#start-page").on("click", function(){
//       $(this).hide();
//       $("#questions-page").removeClass("hidden");
//     //   console.log($("#questions-page"))
//     });
//   });



