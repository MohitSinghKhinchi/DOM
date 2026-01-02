{
   let box = document.getElementById('box')
//    box.addEventListener('mouseenter',()=>{
//    box.addEventListener('mouseleave',()=>{
   box.addEventListener('mouseleave',()=>{
    console.log(`event performed `)
   })
}
{
    // selecting body
    var bdy = document.body
  
    let img = document.querySelector('img')
    var msg = document.querySelector('h2 span')
    
    img.addEventListener('mouseenter',()=>{
        console.log(`enter`)
        msg.innerHTML = 'chutki se durr hoo jaaa'
        bdy.style.backgroundColor='pink'
        msg.style.color='black'
    })
    img.addEventListener('mouseleave',()=>{
        console.log(`left`)
        msg.innerHTML = 'aab aya naa line pe'
        bdy.style.backgroundColor=''
    })
}
{
    let main =document.querySelector('main')
    // main.addEventListener('mousemove',(val)=>{ // mouse events
    // // main.addEventListener('click',(val)=>{// pointer events
    //     // console.log(`hlooo`)
    //     console.log(val)
    //     console.log(`x = ${val.x}`)
    //     console.log(`y= ${val.y}`)
    // })
  
    //  bdy.addEventListener('wheel',(val)=>{
     bdy.addEventListener('keydown',(val)=>{
        console.log(val)
        // console.log(`wheel/ scroll event happen`)
        console.log(`keyboard event happen`)

        // key down --> code is used to identify whichi is pressed
          console.log(val.code)
          console.log(val.key)
        //   msg.innerHTML=` key pressed--> ${val.code}`
          msg.innerHTML=` key pressed--> ${val.key}`

     })
}
{
// MAKING CURSER
 let main =document.querySelector('main')
     let curser = document.querySelector('#curser')
       main.addEventListener('mousemove',(val)=>{ // mouse events
        // console.log(val.x)
        // console.log(val.y)
        curser.style.left=val.x+'px'
        curser.style.top=val.y+'px'
        
    })
}