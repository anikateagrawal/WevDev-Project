var playing=false;
var score;
var remTime;
var count;
var ans;
var correctBox;
document.getElementById("start-reset-btn").onclick=function(){
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        score=1;
        document.getElementById("scoreval").innerHTML=score;
        document.getElementById("countdown").style.display="block";
        document.getElementById("gameOver").style.display="none";
        document.getElementById("start-reset-btn").innerHTML="Reset Game";
        //Reaminin time
        remTime=60;
        document.getElementById("timeRemaining").innerHTML=remTime;
        startCountdown();
        //Generate Questions and answers

        generateQuestionsAndAnswers();
    }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){

    if(this.innerHTML == ans){

    score++;
    
   document.getElementById("scoreval").innerHTML = score;
    //hide wrong box and show correct box
    document.getElementById("correct").style.display = "block";
        document.getElementById("wrong").style.display = "none";
    setTimeout(function(){
        document.getElementById("correct").style.display = "none";

    }, 1000);
    
    //Generate new Q&A
    
    generateQuestionsAndAnswers();
    }else{
    //wrong answer
    document.getElementById("correct").style.display = "none";
    document.getElementById("wrong").style.display = "block";
    setTimeout(function(){
        document.getElementById("wrong").style.display = "none";
    }, 1000);
    }
    }
   } 
   }
function startCountdown()
{

    count=setInterval(function(){
        remTime-=1;
        document.getElementById("timeRemaining").innerHTML=remTime;
        if(remTime==0)
        {
            document.getElementById("total").innerHTML=score;
            document.getElementById("gameOver").style.display="block";
            document.getElementById("countdown").style.display="none";
            playing=false;
            document.getElementById("start-reset-btn").innerHTML="Start Game";

            stopCountdown();
            
        }
    },1000);



}
function stopCountdown(){
    clearInterval(count);
}
function generateQuestionsAndAnswers(){

  var a=1+Math.round(9*Math.random());
    var b=1+Math.round(9*Math.random());
    ans=a*b;
    document.getElementById("questions").innerHTML=a+"x"+b;
    correctBox=Math.round(4*Math.random());
    document.getElementById("box"+correctBox).innerHTML=ans;
    for(let i=1;i<5;i++) {
        if(i!=correctBox)
        {
            wrongAns=1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
            document.getElementById("box"+i).innerHTML=wrongAns;
        }
    }

}
