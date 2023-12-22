let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;     //playerX,player O

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){  //player O
            box.innerHTML="O";
            turnO = false;
        }else{       //player X
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};

const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
         let pos1=boxes[pattern[0]].innerHTML;
         let pos2=boxes[pattern[1]].innerHTML;
         let pos3=boxes[pattern[2]].innerHTML;
         if(pos1!="" &&pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("winner",pos1);
                showWinner(pos1);
            }
         }
    }
};
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
};
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);