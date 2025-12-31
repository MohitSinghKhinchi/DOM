let arry = [
    {
        team: `mi`,
        primary: `blue`,
        seconary: `gold`,
        captian: 'ROHIT SHARMA ',
        trophies:5
    }, {
        team: `csk`,
        primary: `yellow`,
        seconary: `blue`,
        captian: `M.S DHONI`,
        trophies:5
    }, {
        team: `kkr`,
        primary: `purple`,
        seconary: `gold`,
        captian: `DINESH KARTIK`,
        trophies:1
    }, {
        team: `rcb`,
        primary: `red`,
        seconary: `black`,
        captian: `VIRAT KOHLI`,
        trophies:1
    }
]
console.log(arry[1])
let box = document.querySelector('#box')
let button = document.querySelector('button')
let body = document.querySelector('body')

button.addEventListener('click', function () {
    let a = Math.floor(Math.random() * arry.length)
    console.log(a)
    box.style.backgroundColor = arry[a].primary
    body.style.backgroundColor = arry[a].seconary
    // box.innerHTML = arry[a].team
    box.innerHTML =
  "<h2>Team: " + arry[a].team + "</h2>" +
  "<p>Captain: " + arry[a].captian + "</p>" +
  "<p>Trophies: " + arry[a].trophies + "</p>";

    // box.innerHTML= arry[a].captian 
    // box.innerHTML = `${arry[a].team} - ${arry[a].captain}`;
}) 