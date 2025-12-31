// //                                                              DAY - 42
// //                                                         DOCUMENT OBJECT MODEL
// // DOM 4 pillars -->  1.selection of an element , 2.changing html elements , 3.changing css , 4.event listner 


// var gg = document.querySelector(`h1`)// targeting element
// gg.innerHTML =`changed using dom`
// gg.style.backgroundColor= `red`
// console.log(gg)
// // document.querySelector(`#h1`)// targeting id 
// // document.querySelector(`.elem`)// targeting class 
// // document.querySelector(`a`)// targeting a tag 
// // document.querySelector(`div`)// targeting a div 
// // document.querySelector(`image`)// targeting a img 
// let ff =document.querySelector('#box')
// ff.innerHTML=`hehehe`
// ff.style.backgroundColor=`royalblue`

// // let kk = document.querySelector('#button')
// let kk = document.getElementById(`button`)
// // let kk = document.getElementsByClassName(`ele`) // nodelist or array
// kk.innerHTML= 'CHANGED'
// kk.style.backgroundColor ='purple'
// kk.addEventListener('click',function(val){
//     console.log(`clicked here also`)
//     gg.innerHTML = `I AM BATMAN`
//     gg.style.color = `red`
//     gg.style.backgroundColor = `black`
//     gg.style.fontSize =`60px`
// })
// // EVENT LISTINER
// gg.addEventListener('dblclick', function(){
//     console.log('clicked here')
// })

// // iss see saare h2 k andar apply hoga
// let h2 = document.querySelectorAll('h2')
// h2.innerHTML ='chanaged using query all selctor'



// //  diff b/t inner html and text content 
// let h3 = document.querySelector('h3')
// // h3.innerHTML = '<i> changed</i>'
// h3.textContent = '<i> changed</i>'

// // MAKING INCREAMENT AND DECREAMENT
// let a=0
// let h4 = document.querySelector('h4')
// let inc = document.querySelector('#inc')
// let dec = document.querySelector('#dec')
// inc.addEventListener('click',function(){
//     a++;
//     h4.innerHTML = a
// })
// dec.addEventListener('click',function(){
//     a--;
//     h4.innerHTML = a
// })
// // window.onload = function () {
// //   for(let i=0 ; i<=1000; i++){
// //     h4.innerHTML = i
// // }
// // }; 

// //                                                              DAY - 43
let CC = Math.random() // official  range --> 0 to 1
let mm = Math.random() * 10// (0.9 to 9.99)
let kk = Math.random() * 100// (0 to 99.99)
let dd = Math.random() * 5// (0 to 4.99)

console.log(CC)
console.log(mm)
console.log(kk)
console.log(dd)
// Math.floor -- for removing points making it whole no. 
let q = Math.floor(dd)
console.log(q)

// making it in one line 
let y = Math.floor(Math.random() * 100)
console.log(y)
let r = Math.floor(Math.random())
console.log(r)

//
// {
//     let a = document.querySelector('#box1')
//     a.style.backgroundColor= 'pink'
//     let b = document.querySelector('.btn')
//     b.addEventListener('click',function(){
//         console.log('hello')
//         let z = Math.floor(Math.random()*256)
//         let y = Math.floor(Math.random()*256)
//         let x = Math.floor(Math.random()*256)
//         console.log(z,y,x)
//         a.style.backgroundColor=`rgb(${x},${y},${z})`
//         a.innerHTML=`rgb(${x},${y},${z})`
//     })
// }
//
{
    let arr = ['mohit', 'rohit ', 'raj', 'sham', 'abhi', 'vikah']
    let a = Math.floor(Math.random() * arr.length)
    console.log(arr[a])
    console.log(arr.length)
}

//  ARRAY OF OBJ
{
    let a = [
        {
            team: `mi`,
            primary: `blue`,
            seconary: `gold`
        }, {
            team: `csk`,
            primary: `yellow`,
            seconary: `blue`
        }, {
            team: `kkr`,
            primary: `purple`,
            seconary: `gold`
        }, {
            team: `rcb`,
            primary: `red`,
            seconary: `black`
        }
    ]
    // console.log(a[1].team)
    var b = Math.floor(Math.random()*a.length)
    console.log(a[b])
}