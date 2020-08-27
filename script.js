document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
const links = document.querySelectorAll('.nav-link');
links.forEach((cur) => {
    cur.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});