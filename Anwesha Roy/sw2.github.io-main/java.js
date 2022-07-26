let seconds=00;
let tens=00;

let sec =document.querySelector('.seconds');
let getTens =document.querySelector('.tens');

let sta =document.querySelector('.sta');
let sto =document.querySelector('.sto');
let res =document.querySelector('.res');
let inetrval;

sta.addEventListener('click',()=>{
   interval=setInterval(startTimer, 10)       //set interval is a function of js which have function name and the inetrval time
    
})
sto.addEventListener('click',()=>{
        clearInterval(interval);
})
res.addEventListener('click',()=>{
    clearInterval(interval);
    tens='00';
    seconds='00';
    sec.innerHTML=seconds;
    getTens.innerHTML=tens;

})
    function startTimer(){
        tens++;
    if(tens<=9){
    getTens.innerHTML='0'+ tens;
}
    if(tens>9){
    getTens.innerHTML= tens;
}
    if(tens>99){
    seconds++;
    sec.innerHTML= '0' + seconds;
    tens=0;
    getTens.innerHTML='0'+ 0;
}
    if(seconds>9){
    sec.innerHTML= seconds;
}

    }

