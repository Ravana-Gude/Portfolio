let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.scrollY + window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight; 

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (
            (top >= offset && top < offset + height) ||
            (id === "contact" && scrollPosition >= documentHeight - 1)
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header navbar a[href*='${id}']`).classList.add('active');
        }
    });
};
