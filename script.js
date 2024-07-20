const menuIcon = document.querySelector("#menuIcon");
const toggleElements = document.getElementById("toggleElements");

menuIcon.addEventListener("click", () =>{
    toggleElements.classList.toggle("visible");
});

const navigation = document.querySelector("nav");

window.addEventListener("scroll", () =>{
    navigation.classList.toggle("scrolling", window.scrollY > 0);
});

var typed = new Typed('#typed', {
    strings: ['Frond-End Developer.', 'Computer Sciences,', 'and Applied Mathematics Major.'],
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    shuffle: false,
    typeSpeed: 70,
});