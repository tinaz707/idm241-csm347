const albumButton = document.getElementById('album-cover-img');
const albumOverlay = document.getElementById('album-overlay');
const overlayInfo = document.getElementById('overlay-info-box');

albumButton.addEventListener("click", ()=>{
    albumOverlay.classList.add('show');
    document.body.classList.add('no-scroll'); 

});


albumOverlay.addEventListener("click", ()=>{
    albumOverlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});

overlayInfo.addEventListener("click", (event)=>{
     event.stopPropagation();
});