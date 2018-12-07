let video = document.querySelector('video');
video.addEventListener('click', function(){
    console.log(video.currentTime);
});
document.querySelector('#btn-RL')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 0.5;
        video.play();
        document.body.scrollTop = 0;
    });
document.querySelector('#btn-BR')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 25;
        video.play();
        document.body.scrollTop = 0;
    });
document.querySelector('#btn-SP')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 22;
        video.play();
        document.body.scrollTop = 0;
    });
document.querySelector('#btn-EN')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 27;
        video.play();
        document.body.scrollTop = 0;
    });
document.querySelector('#btn-RL')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 0.5;
        video.play();
        document.body.scrollTop = 0;
    });
document.querySelector('#btn-HL')
    .addEventListener('click', function(){
        video.pause();
        video.currentTime = 29;
        video.play();
        document.body.scrollTop = 0;
    });