class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
     textSize(20);
     fill("red")
     text("result of the Quiz",400,50);
    //call getContestantInfo( ) here
      Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
   if(allContestants !== undefined){
     debugger
     var displayAnswers=200;
    textSize(20);
    text("NOTE: PLAYERS WHO ANSWERED CORRECTLY ARE HIGHLIGHTED IN GREEN!",50,30)

    for(var plr in allContestants ){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer){
        fill ("green")
      }
      else{
      fill("red")
      }
  displayAnswers=displayAnswers+30;
  textSize(15)
  text(allContestants[plr].name+":"+allContestants[plr].answer,200,displayAnswers)
  }
   }
    //write code to add a note he
  

    //write code to highlight contest who answered correctly
    

  }

}
