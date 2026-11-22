const albumCoverData = [
    {
        id: "play-with-earth-cover",
        title: "play with earth! 0.03",
        date: "9.6.24",
        disc1: [
            "are you bored?",
            "play with earth!",
            "annie.",
            "pueblo - remastered 2024",
            "beck.",
            "slow dive",
            "holyland",
        ],

        disc2: null,
        img: "../assets/play-with-earth.jpg",
        youtube: "https://www.youtube.com/watch?v=JW6TapHpBe4&list=OLAK5uy_nXJxU9r8R4cQDZnsV1KvaiwmXBLMW_FTU",
        spotify: "https://open.spotify.com/album/527e8WrlMvJBEmlmt7kJCj?si=I0gcA6NLRI6EjTt2Zs60OQ",
        apple: "https://music.apple.com/us/album/play-with-earth-0-03/1770519879",
    },
    
    {
        id: "flaws-and-all-cover",
        title: "0.1 flaws and all.",
        date: "4.25.23",
        disc1: [
            "bad?",
            "sunny days",
            "peach eyes.",
            "evening glow",
            "Pink Horizon",
            "pink",
            "calla",
            "Love. (사랑으로)",
        ],

        disc2: [
            "homesick?",
            "dried flower",
            "sunburn.",
            "akira",
            "Nouvelle Vague",
            "so real",
        ],
        
        img: "../assets/flaws-and-all.jpeg",
        youtube: "https://www.youtube.com/watch?v=6Q5xqNkCk7w&list=OLAK5uy_lhLm_kIYhRJYih_dNptyltqUU05-S8_Tw",
        spotify: "https://open.spotify.com/album/5T0Gt5JYXh6gEttuB8ujML?si=CG8a-0pITZWhWsDJzfpouQ",
        apple: "https://music.apple.com/us/album/0-1-flaws-and-all/1770274106",


    },

    {
        id: "dried-flower-cover",
        date: "10.11.22",
        title: "Dried Flower",
        type: "single",
        img: "../assets/dried_flower.jpg",
        // youtube: "https://www.youtube.com/watch?v=6tqFCcERhoQ&list=OLAK5uy_k0kRJK3VhzOtAW9J26zucclGkQ3wcposc",
        // spotify: "https://open.spotify.com/album/7uGypjatRUHbWUxUwynTTn?si=OInuGCjRQNeILDlw0FuYQg",
        // apple: "https://music.apple.com/us/album/dried-flower-single/1770276088",

    },

];

//main group for buttons
const albumButton = document.querySelectorAll('.album-cover button'); //the group with album

const playCover = document.getElementById('play-with-earth-cover');
const playFlaws = document.getElementById('flaws-and-all-cover');
const playCoverFlower = document.getElementById('dried-flower-cover');

const albumPic = document.getElementById('overlay-info-box');
//whole box for aside
const albumOverlay = document.getElementById('album-overlay');

//the div inside aside
const overlayInfo = document.getElementById('overlay-content');

const albumFormat = document.getElementById('album-format');
const singleFormat = document.getElementById('single-format');

const exitButton = document.getElementById('exit-button');

//overlay details a=album | s=single
const aDate = document.getElementById('a-date');
const aTitle = document.getElementById('a-name');
const aDisc = document.getElementById('a-disc1');
const aDisc2 = document.getElementById('a-disc2');
const aSongs1 = document.getElementById('a-songs');
const aSongs2 = document.getElementById('a-song-disc2');


albumButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        albumOverlay.classList.add('show');
        document.body.classList.add('no-scroll'); 

        const buttonId = button.id;

        let album;

        for(let i = 0; i < albumCoverData.length; i++){
            if(albumCoverData[i].id === buttonId){
                album = albumCoverData[i];
                currentIndex = i;

                break;
            }
        }

        if(album){
            updateUi(album);
        }

    });
});

console.log(albumButton);

//EXIT
exitButton.addEventListener("click", ()=>{
    albumOverlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});


const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');
let currentIndex = 0; //this is needed to remember Which album your currently on


rightArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % albumCoverData.length;
    updateUi(albumCoverData[currentIndex]);
})

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + albumCoverData.length) % albumCoverData.length;
    updateUi(albumCoverData[currentIndex]);
});

//album icons (none for single type bc thats already set in html)
const youtubeLogo = document.getElementById('yt-logo');
const spotifyLogo = document.getElementById('spotify-logo');
const appleLogo = document.getElementById('music-logo');

function updateUi(album){
    aDate.innerText = album.date;
    aTitle.innerText = album.title;
    youtubeLogo.href = album.youtube;
    spotifyLogo.href = album.spotify;
    appleLogo.href = album.apple;

    albumPic.style.backgroundImage = 
    `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%), url('${album.img}')`;
    
    if (album.type === "single"){
        albumFormat.classList.remove('show');
        singleFormat.classList.add('show');
    } else {
        albumFormat.classList.add('show');
        singleFormat.classList.remove('show');
    }
    
    if (album.disc1 != null) {

        aSongs1.innerHTML = '';

        album.disc1.forEach(song => {

            const songP = document.createElement('p');
            songP.innerText = song;
            aSongs1.appendChild(songP);

        });
    }

    if (album.disc2 === null) {
    aDisc2.style.display = "none";
    aSongs2.style.display = "none";
    } else {
        aDisc2.style.display = "block";
        aSongs2.style.display = "block";

        aSongs2.innerHTML = '';

        album.disc2.forEach(song => {
            const songP = document.createElement('p');
            songP.innerText = song;
            aSongs2.appendChild(songP);
        });
}

    
}

