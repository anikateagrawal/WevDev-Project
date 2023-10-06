const easy=[
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium=[
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3---",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard=[
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

var timer;
var timeRemaining;
var lives;
var selectedDigit;
var selectedTile;
var disable;

window.onload=function()
{
     id("button").addEventListener("click",startGame);
     for(let i=0;i<id("number-container").children.length;i++)
     {
        id("number-container").children[i].addEventListener("click",function(){
            if(!disable)
            {
                if(this.classList.contains("selected"))
                {
                    this.classList.remove("selected");
                    selectedDigit=null;
                }
                else{
                    for(let i=0;i<9;i++)
                    {
                        id("number-container").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedDigit=this;
                    updateMove();
                }
            }
        });
     }
}

function startGame()
{
    let board;
     if(id("diff1").checked) //board=easy[0];
         board=easy[0];
        // board=medium[0];
    if(id("diff3").checked) 
         board=hard[0];
    if(id("diff2").checked) board=medium[0];
        // board=hard[0];
    lives=3;
    disable=false;
    // generateBoard(board);
    id("lives").textContent="Lives Remaining: 3";
     generateBoard(board);
     
     if(id("theme1").checked)
     {
        qs("body").classList.remove("dark");
     }
     else{
        qs("body").classList.add("dark");
     }
     id("number-container").classList.remove("hidden");
     startTimer();

}

function startTimer()
{
    if(id("time1").checked) timeRemaining=180;
    if(id("time2").checked) timeRemaining=300;
    if(id("time3").checked) timeRemaining=600;
    id("timer").textContent=timeConversion(timeRemaining);
    timer=setInterval(function()
    {
        timeRemaining--;
        if(timeRemaining===0) endGame();
        id("timer").textContent=timeConversion(timeRemaining);
    },1000)
}
function timeConversion(time)
{
    let minutes=Math.floor(time/60);
    if(minutes<10) minutes="0"+minutes;
    let seconds=time%60;
    if(seconds<10) seconds="0"+seconds;
    return minutes + ":" + seconds;
}
function generateBoard(board)
{
    clearPrevious();
    let idcount=0;
    let boardPage=id("board");
    for(let i=0;i<81;i++)
    {
        let tile=document.createElement("p");
        if(board.charAt(i)!="-")
        {
            tile.textContent=board.charAt(i);
        }
        else{
            tile.addEventListener("click",function()
            {
                if(!disable)
                {
                    if(tile.classList.contains("selected"))
                    {
                        tile.classList.remove("selected");
                        selectedTile=null;
                    }
                    else{
                        for(let i=0;i<81;i++)
                        {
                            qsa(".tile")[i].classList.remove("selected");
                        }
                        tile.classList.add("selected");
                        selectedTile=tile;
                        updateMove();
                    }
                }
            })
        }
            tile.id=idcount;
            idcount++;
            tile.classList.add("tile");
            if((tile.id>17 && tile.id<=27)||(tile.id>44 && tile.id<54))
            {
                tile.classList.add("bottomBorder");
            }
            if((tile.id + 1)%9==3 || (tile.id + 1) %9==6)
            {
                tile.classList.add("rightBorder");
            }
            id("board").appendChild(tile);
        
        boardPage.append(tile);
    }
}
function updateMove()
{
    if(selectedTile && selectedDigit)
    {
        selectedTile.textContent=selectedDigit.textContent;
    
        if(checkCorrect(selectedTile))
        {
            selectedTile.classList.remove("selected");
            selectedDigit.classList.remove("selected");
            selectedDigit=null;
            selectedTile=null;
            if(checkDone())
            {
                endGame();
            }
        }
        else{
            disable=true;
            selectedTile.classList.add("incorrect");
            setTimeout(function()
            {
                lives--;
                if(lives===0)
                 endGame();
                 else
                 {
                    id("lives").textContent="Lives Remaining: " + lives;
                    disable=false;
                 }
                 selectedTile.classList.remove("incorrect");
                 selectedTile.classList.remove("selected");
                 selectedNum.classList.remove("selected");
                 selectedTile.textContent="";
                 selectedTile=null;
                 selectedDigit=null;
            },1000)
        }
}
}
function checkDone()
{
    let tiles=qsa(".tile");
    for(let i=0;i<tiles.length;i++)
    {
        if(tile.textContent==="") return false;
    }
    return true;
}
function endGame()
{
    disable=true;
    clearTimeout(timer);
    if(lives===0 || timeRemaining===0)
    {
        id("lives").textContent="You Lost!    Try Again";
    }
    else{
        id("lives").textContent="You Won!";
    }
}
function checkCorrect(tile)
{
    let solution;
    if(id("diff1").checked)solution=easy[1];
    else if(id("diff2").checked)solution=medium[1];
    else solution=hard[1];
    if(solution.charAt(tile.id)===tile.textContent) return true;
    else return false;
}
function clearPrevious()
{
    let tiles=qsa(".tile");
    for(let i=0;i<tiles.length;i++)
    {
        tiles[i].remove();
    }
    if(timer) clearTimeout(timer);
    for(let i=0;i<id("number-container").children.length;i++)
    {
        id("number-container").children[i].classList.remove("selected");
    }
    selectedTile=null;
    selectedDigit=null;
}
function id(id)
{
    return document.getElementById(id);
}
function qs(selector)
{
    return document.querySelector(selector);
}
function qsa(selector)
{
    return document.querySelectorAll(selector);
}
