document.addEventListener('DOMContentLoaded', (event) => {
    const videos = [
        'https://www.youtube.com/embed/_yxqPNVYrPQ',
        'https://www.youtube.com/embed/YI6zVQ7gCtQ',
        'https://www.youtube.com/embed/JCrnRLV5slc',
        'https://www.youtube.com/embed/GhcMmaUPtrk',
        'https://www.youtube.com/embed/tiwJadn-Nso'
    ];

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    document.getElementById('music-video').src = randomVideo;
});


$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});

