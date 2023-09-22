let gameseq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let score=0;
document.addEventListener("keypress",function (){
  if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
  }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);


    gameFlash(randbtn);
}
function checkAns(idx) {

    if(userSeq[idx]===gameseq[idx]) {
        if(userSeq.length==gameseq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
    h2.innerHTML=`Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
    },150);
    if(level<score){
     h2.innerHTML=`Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`;
    }
    else {
        h2.innerHTML=`Game Over! You score highest <b> ${level}</b> <br> Press any key to start.`;
        score=level;
    }
    reset();
    }
}
function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userSeq=[];
    level=0;
}