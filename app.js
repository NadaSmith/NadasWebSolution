document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".title",{
        strings:["Software Developer", "Front-End Developer", "Web Developer", "Tech Blogger", "Business Owner", "Entrepreneur"],
        typedSpeed: 60,
        backSpeed: 55,
        loop: true
    })
})


var moon = document.getElementById("moon");

moon.onclick = function() {
    if (document.body.classList.toggle("dark-theme")){
        moon.src = "sun.png";
    }else {
        moon.src = "moon.png";
    }
}





