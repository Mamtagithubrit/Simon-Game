let start=false;
let level=0;
let btnArr=["pink","blue","yellow","green"];
let gameSeq=[];
let user=[];
// let h3=document.querySelector("h3");
let h4=document.querySelector("h4");


document.addEventListener("keypress",function(){
    if(!start){
        start=true;
       
        levelUp();
    }
});
  


function gameflash(randomBtn){
   randomBtn.classList.add("gameflash");
   setTimeout(
    function(){
          randomBtn.classList.remove("gameflash");
},300);
 
}



function levelUp(){
    level++;
    h4.innerText=(`Level ${level}`);
    let ranIdx=Math.floor(Math.random()*4);
    let rancolor=btnArr[ranIdx];
    let randomBtn=document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    gameflash(randomBtn);
    user=[];

};



function checkAns(index){
        let   userPress=user[index];
         let  gamePress=gameSeq[index];
        
          if(userPress===gamePress){
            if(index==gameSeq.length-1){
              setTimeout(levelUp(),1000);
            }
         
          }
          else {
            h4.innerHTML=`game over! Your score was<b>${level}<b> <br> Press any key to start.`;
            let body=document.querySelector("body");
            body.classList.add("red");
            setTimeout(function(){
              body.classList.remove("red");
            },200);
          reset();
            
          }
         
}




function userflash(btn1){
   
   user.push(btn1.id);
   btn1.classList.add("userflash");
   setTimeout(function(){
    btn1.classList.remove("userflash");
   },250);
   
   checkAns(user.length-1);
}




function btnPress(){
  let btn=this;
  userflash(btn);

}



let btns=document.querySelectorAll(".btn");



for(butt of btns){
butt.addEventListener("click", btnPress);
}


function reset(){
  
  start=false;
  level=0;
  gameSeq=[];
  user=[];

}