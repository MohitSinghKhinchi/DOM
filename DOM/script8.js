{
    const reels = [
       
        {
            username: "chantcoding",
            likeCount: 980,
            isLiked: false,
            commentCount: 42,
            caption: "JavaScript tips you must know 🚀",
            video: "vid11.mp4",
            userProfile: "https://images.unsplash.com/photo-1767126600994-e509dacc967c?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
            shareCount: 21,
            isFollowed: false
        },
        {
            username: "daily_vibes",
            likeCount: 5420,
            isLiked: true,
            commentCount: 210,
            caption: "Peace, coffee, and good music ☕🎧",
            video: "vid9.mp4",
            userProfile: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 112,
            isFollowed: true
        },
        {
            username: "fitness_freak",
            likeCount: 3320,
            isLiked: false,
            commentCount: 98,
            caption: "No excuses. Just results 💪",
            video: "vid10.mp4",
            userProfile: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 56,
            isFollowed: false
        },
        {
            username: "travel_diaries",
            likeCount: 7650,
            isLiked: true,
            commentCount: 340,
            caption: "Mountains are calling 🏔️✨",
            video: "vid5.mp4",
            userProfile: "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 230,
            isFollowed: true
        },
        {
            username: "foodie_corner",
            likeCount: 2890,
            isLiked: false,
            commentCount: 150,
            caption: "Street >> everything 🌮❤️",
            video: "vid1.mp4",
            userProfile: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 74,
            isFollowed: false
        },
        {
            username: "gamer_x",
            likeCount: 4120,
            isLiked: true,
            commentCount: 190,
            caption: "One more match, I swear 🎮😅",
            video: "vid6.mp4",
            userProfile: "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 89,
            isFollowed: true
        },
        {
            username: "design_daily",
            likeCount: 1670,
            isLiked: false,
            commentCount: 65,
            caption: "Minimal UI is the real flex 🎨",
            video: "vid13.mp4",
            userProfile: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 28,
            isFollowed: false
        },
        {
            username: "life_quotes",
            likeCount: 9230,
            isLiked: true,
            commentCount: 410,
            caption: "Silence speaks louder than words 🖤",
            video: "vid7.mp4",
            userProfile: "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?q=80&w=2401&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 315,
            isFollowed: true
        },
        {
            username: "music_addict",
            likeCount: 3560,
            isLiked: false,
            commentCount: 134,
            caption: "Headphones on, world off 🎶",
            video: "vid8.mp4",
            userProfile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            shareCount: 67,
            isFollowed: false
        },
         {
            username: "mohit_dev",
            likeCount: 1240,
            isLiked: true,
            commentCount: 86,
            caption: "Late night coding hits different 💻🔥",
            video: "vid12.mp4",
            userProfile: "https://plus.unsplash.com/premium_photo-1765669980934-0b7d1e26ff9a?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
            shareCount: 34,
            isFollowed: true
        }
    ];
    let allreels =document.querySelector('.allreels');
    function addData(){
    var sum = '';
    reels.forEach(function (elem,idx) {
        // console.log(elem)
        // console.log(idx)
        // console.log(elem.username);
        sum = sum + `  <div class="reel">
                  <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'UnFollow':'Follow'}</button>
                        </div>
                        <div class="tittle">
                            <h3>${elem.caption}</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon ">${elem.isLiked ? '<i class="ri-heart-3-fill love"></i>':'<i class="ri-heart-3-line"></i>'}
                            </h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon ">
                                <i class="ri-chat-1-line"></i>
                            </h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon ">
                                <i class="ri-share-forward-line"></i>
                            </h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon ">
                                <i class="ri-more-2-fill"></i>
                            </h4>

                        </div>
                    </div>
                </div>`
    })
    // console.log(sum)
    allreels.innerHTML = sum;
    }
    addData();
    allreels.addEventListener('click',(val)=>{
        console.log(`hlo`)
        console.log(val)
        console.log(val.target.idx)
    })
}