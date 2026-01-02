let img =document.querySelector('img')
let love = document.querySelector('i')
// love.style.opacity =0;
img.addEventListener('dblclick',()=>{
    console.log(`hlo`)
    love.style.opacity =1 ;
    love.style.scale =1;
   love.style.transform = "translate(0%, -50%) scale(1.2) rotate(0deg)";
    setTimeout(()=>{
        love.style.transform = "translate(-0%, -300%) scale(1.6)";
        love.style.opacity= 0;
    },1000)
    setTimeout(()=>{
        love.style.transform = "translate(-0%, -50%) scale(0) rotate(-60deg)";
    },1300)
    
})