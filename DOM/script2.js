// create element and append a child
// day - 44
// {
// let a =document.createElement('div')
// let btn = document.querySelector('button')
//  btn.addEventListener('click',function(){
//    // create element
//     let h2 =document.createElement('h2')
//     h2.innerHTML=`heading 2 created`
//     // append a child
//     let body = document.querySelector('body')
//     body.appendChild(h2)
//     console.log(h2) 
//  })


// let c = document.createElement('button')
// c.innerHTML=`download`
// let body = document.querySelector('body')
// body.appendChild(c)
// }

// PROJECT 
{
  // creating array
  let arry = [`mohit`, `rohit`, `sham `, `ram `, `gogo`, `kokoo`, `raj`]

  let btn = document.querySelector('button')
  let main = document.querySelector('main')

  btn.addEventListener('click', () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'created h1 element '
    // main.appendChild(h1)
    console.log(h1)
    //  creating div
    let div = document.createElement('div');
    // FOR RANDOM POSITION
    let x = Math.floor(Math.random() * 80)
    let y = Math.floor(Math.random() * 80)
    div.style.left = x + '%'
    div.style.top = y + '%'

    // random color
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    div.style.backgroundColor = `rgb(${r},${g},${b})`

    // rotation
    let rot = Math.floor(Math.random() * 361)
    div.style.rotate = rot + `deg`

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    // div.style.backgroundColor='royalblue'
    //
    main.appendChild(div)
    // using array
    let print = Math.floor(Math.random() * arry.length)
    div.innerHTML = arry[print]
    // scale property
    let scl = Math.random() * 3
    div.style.scale = scl
  })
}
// TASK-->
