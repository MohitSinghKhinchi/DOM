{
    let arry = ["Dream big, start small.",
        "Consistency beats talent.",
        "Stay hungry, stay foolish.",
        "Code. Learn. Repeat.",
        "Silence is also an answer.",
        "Make progress, not excuses.",
        "Focus on what matters.",
        "Hard work never lies.",
        "Turn ideas into action.",
        "Simple is powerful.",
        "Do it now, not later.",
        "Every expert was once a beginner.",
        "Your future needs your effort today.",
        "Less talk, more action.",
        "Believe, build, become."]

    let btn = document.querySelector('button')
    let main = document.querySelector('main')

    btn.addEventListener('click', () => {
        let h1 = document.createElement('h1');
        console.log(h1)
        // color 
        let rd = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        h1.style.color = `rgb(${rd},${g},${b})`
        // h1.style.color = 'red'

        let a = Math.floor(Math.random() * arry.length)
        h1.innerHTML = arry[a]

        // ROTATE 
        let r = Math.floor(Math.random() * 361)
        h1.style.rotate = r + `deg`

        //  RANDOM POSITION
        let lft = Math.floor(Math.random() * 80)
        let right = Math.floor(Math.random() * 80)
        h1.style.position = 'absolute'
        h1.style.left = lft + '%'
        h1.style.top = right + '%'

        // SCALE
        let scl = Math.random() * 3
        h1.style.scale = scl

        // append
        main.appendChild(h1)
    })
}