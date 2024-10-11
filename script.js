let boxes = document.querySelectorAll(".box");
let resetBut = document.querySelector("#reset");
let newButton = document.querySelector("#newButton");
let messCon = document.querySelector(".messcontainer")
let mess = document.querySelector("#mess");

let turnO = true;//plyer x or plyer o
// 2D arrya;
let winningPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],
    [6,4,2],
];

const restGame = () => {
    turnO = true;
    enableBoxes();
    messCon.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        console.log("box was clicked");
       if(turnO) {//plyer x
        box.innerText="X"
        turnO = false;
       } else { //plyer o
        box.innerText="O"
        turnO = true;
       }
       box.disabled = true;
       
       checkWinner();
    });
});
let disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner = (winner) => {
    mess.innerText=`Congratulations ${winner} is winner🏆🎉`;
    messCon.classList.remove("hide");
    disabledBoxes();
};
let checkWinner = () => {
for(let pattern of winningPattern) {

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val !=""&& pos2val !=""&& pos3val !="") {
        if(pos1val===pos2val && pos2val == pos3val) {
            console.log("Winner",pos1val);

            showWinner(pos1val);
        }   
    }
  }
};

newButton.addEventListener("click",restGame);
resetBut.addEventListener("click",restGame);