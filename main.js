const toggle = document.querySelector('.toggle')
const section = document.querySelector('.section');



toggle.addEventListener('click', toggleNav)
   

function toggleNav() {
    toggle.classList.toggle('active');
    section.classList.toggle('active');
}

// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active')
//     section.classList.toggle('active')
// })