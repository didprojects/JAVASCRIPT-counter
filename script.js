const cntNum = document.querySelector(".counter-number");
const btns = document.querySelectorAll(".btn");

let cnt = 0;
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            cnt--;
        }else if(styles.contains("increase")){
            cnt++;
        }else{
            cnt = 0;
        }
        if(cnt > 0){
            cntNum.style.color = "green";
        }else if(cnt < 0){
            cntNum.style.color = "red";
        }else{
            cntNum.style.color = "black";
        }
        cntNum.textContent = cnt;
    });
})





// const decreaseBtn = document.querySelector(".decrease-btn");
// const resetBtn = document.querySelector(".reset-btn");
// const increaseBtn = document.querySelector(".increase-btn");

// resetBtn.addEventListener("click", function(){
//     cntNum.textContent = 0;
// })

// decreaseBtn.addEventListener("click", function(){
//     let curNum = cntNum.innerHTML;
//     cntNum.textContent = parseInt(curNum)-1;
// })

// increaseBtn.addEventListener("click", function(){
//     let curNum = cntNum.textContent;
//     cntNum.textContent = parseInt(curNum)+1;
// })