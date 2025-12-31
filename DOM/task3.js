{
    let memes = [
        "https://media.tenor.com/3TNNdGvibb8AAAAM/cat-pookie.gif",
        "https://i.pinimg.com/736x/4b/62/0c/4b620cfb3ea891fef9a14fab629079c8.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_nLcgCODA2qTt1J7mN1Pv5CWwjS1LFj9zw&s",
        "https://i.pinimg.com/236x/c0/24/9f/c0249fa60f7c0b73600df76a42e3bea7.jpg"
        , "https://i0.wp.com/reactfully.com/wp-content/uploads/2025/01/pookie1.jpg?fit=1056%2C1492&ssl=1"

    ];

    let main = document.querySelector('main')

    main.addEventListener('mousemove', () => {
        let img = document.createElement('img');
        img.style.height = '50px';
        img.style.width = '50px';
        let a = Math.floor(Math.random() * memes.length)
        img.src = memes[a];

        // ROTATE f
        let r = Math.floor(Math.random() * 361)
        img.style.rotate = r + `deg`

        //  RANDOM POSITION
        let lft = Math.floor(Math.random() * 80)
        let right = Math.floor(Math.random() * 80)
        img.style.position = 'absolute'
        img.style.left = lft + '%'
        img.style.top = right + '%'

        // SCALE
        let scl = Math.random() * 6
        img.style.scale = scl;

        // append
        main.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 1500);

    })
}