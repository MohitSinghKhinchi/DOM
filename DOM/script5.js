{
    let arr = [1, 2, 'mohit', 4.40, 5, true]
    console.log(arr)
}
{
    let arr = [
        {
            user: 'rohit',
            age: 22,
            city: 'indore'
        }, {
            user: 'mohit',
            age: 20,
            city: 'jaipur'
        }, {
            user:
                'raj', age: 29,
            city: 'bhopal'
        }, {
            user:
                'rahul', age: 19,
            city: 'delhi'
        }
    ]
    console.log(arr[2].user)
    let sum = 0;
    arr.forEach((elem)=>{
        // console.log(elem.user)
        sum = sum + elem.age
        // console.log(elem.age)
    })
    console.log(sum)
    console.log(sum/arr.length)
}
{
   let arr = [1,2,3,4,5,6]
   let sum = 0;
   for(let i =0; i<arr.length; i++){
    sum = sum +arr[i];
   }
   console.log(sum)
   let total = 0
   arr.forEach(function(elem, indx){
    total = total +elem;
    console.log(elem, indx)
   })
   console.log(total)

}
{
    const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building responsive and interactive web interfaces using modern JavaScript frameworks.",
    type: "Developer",
    useRealImages: true
  },
  {
    fullName: "Neha Verma",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profession: "UI/UX Designer",
    description: "Focused on creating clean, user-friendly designs with a strong emphasis on usability and aesthetics.",
    type: "Designer",
    useRealImages: true
  },
  {
    fullName: "Rohit Mehta",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    profession: "Backend Engineer",
    description: "Experienced in building scalable APIs and managing databases for high-traffic applications.",
    type: "Engineer",
    useRealImages: true
  },
  {
    fullName: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    profession: "Digital Marketer",
    description: "Specializes in SEO, social media marketing, and data-driven growth strategies.",
    type: "Marketing",
    useRealImages: true
  },
  {
    fullName: "Karan Patel",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    profession: "Product Manager",
    description: "Bridges the gap between business and technology to deliver impactful digital products.",
    type: "Management",
    useRealImages: true
  }
];
let sum ='';
users.forEach((elem)=>{
  console.log(elem.fullName)
  sum = sum +`<div class="card">
            <img src=" ${elem.image}" alt="">
            <h3>${elem.fullName} </h3>
            <h4>${elem.profession} </h4>
            <p>${elem.description}</p>
        </div>`; 
})
let main = document.querySelector('main')
main.innerHTML =sum;

}