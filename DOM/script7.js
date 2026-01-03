{
//    let h1 = document.querySelector('h1');
   let allh1 = document.querySelectorAll('h1'); // all h1 are selected 
   console.log(allh1)// will get node list--> slitely similar to array 
   allh1[2].innerHTML=`bye bye `
   let arr =[1,2,3,4]
  
   allh1.forEach((val)=>{
    console.log(val.innerHTML)
    console.log(`hello gys `)
   })
   arr.push(999)
    console.log(arr) ;

}
{
    let oter = document.getElementById('outer')
    console.log(oter)
    oter.style.backgroundColor=`blue`;
    console.log(oter.childNodes) //NodeList(5): [text, div#inner1, text, div#inner2, text]
    console.log(oter.childNodes[1])
    oter.childNodes[2].innerHTML=`hlo`
    console.log(oter.childNodes)
}
// 
{
    let allelm =document.querySelectorAll('#elem')
    let allbtn =document.querySelectorAll('button')
    console.log(allelm)
    allelm.forEach((value)=>{
        // console.log(value)
        // console.log(value.childNodes)
        // console.log(value.childNodes[1])
        console.log(value.childNodes[3])
        value.childNodes[3].addEventListener('click',()=>{
            console.log(`request send`)
        })
    })
    allbtn.forEach(function(text){
  text.addEventListener('click',function(){
    
    if(text.innerHTML== 'ADD FRIEND +'){
       text.innerHTML=`Request Send ✓`
    }
    else{
        text.innerHTML=`ADD FRIEND +`
    }
  })  
  })
}