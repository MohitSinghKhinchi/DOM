{
    // setTimeout --> delay 
    console.log(`hello 1`)
    console.log(`hello 2`)
    console.log(`hello 3`)
    setTimeout(function () {
        console.log(` this hello is run after 4 sec`)
    }, 4000)
    console.log(`hello 4`)
    setTimeout(function () {
        console.log(` this hello is run after 5 sec`)
    }, 5000)
    setTimeout(function () {
        console.log(` this hello is run after 6 sec`)
    }, 6000)
    setTimeout(function () {
        console.log(` this hello is run after 7 sec`)
    }, 7000)

    let h1 = document.querySelector('h1');
    let btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        console.log(`hlo`);
        h1.innerHTML = `changing user`
        // using time out 
        setTimeout(() => {
            h1.innerHTML = `my name is harsh`
        }, 3000);
    })
}
{
    //  setInterval --> repetative task after time (controled loop)
    let a =0;
     let i =setInterval(() => {
        a++;
        console.log(a)
        // console.log(`hello`)
     }, 1000);
     setTimeout(()=>{
         clearInterval(i);
     },5000)
}

// card task
let btn =document.querySelector('button');
let h2 = document.querySelector('h2')
let inn = document.querySelector('.inner')
// creating random downloading speed
let num =50+ Math.floor(Math.random()*50)
console.log(num)

let a=0
let i = setInterval(()=>{
a++;
h2.innerHTML=a+`%`;
inn.style.width = a+'%'
},num)
setTimeout(()=>{
    clearInterval(i)
    btn.innerHTML=`DOWNLOADED <br> (${num/10}sec)`{{{}}}
    btn.style.opacity=0.3 ;
    //                      to diable the button
    btn.style.pointerEvents= 'none'

}, num*100)
