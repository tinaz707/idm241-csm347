const albumButton = document.getElementById('album-cover-img');
const albumOverlay = document.getElementById('album-overlay');
const overlayInfo = document.getElementById('overlay-info-box');

albumButton.addEventListener("click", ()=>{
    albumOverlay.classList.add('show');
});


albumOverlay.addEventListener("click", ()=>{
    albumOverlay.classList.remove('show');
});

overlayInfo.addEventListener("click", (event)=>{
     event.stopPropagation();
});