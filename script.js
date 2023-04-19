const cntNum = document.querySelector(".counter-number");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const increaseBtn = document.querySelector(".increase-btn");

resetBtn.addEventListener("click", function(){
    cntNum.textContent = 0;
})

decreaseBtn.addEventListener("click", function(){
    let curNum = cntNum.innerHTML;
    cntNum.textContent = parseInt(curNum)-1;
})

increaseBtn.addEventListener("click", function(){
    let curNum = cntNum.textContent;
    cntNum.textContent = parseInt(curNum)+1;
})