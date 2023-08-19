window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('color', window.scrollY > 100);
}
hamburger = document.querySelector("#menu-icon")
hamburger.onclick = function() {
     navbar = document.querySelector(".navbar");
     navbar.classList.toggle("active");
}
