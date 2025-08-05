const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.right = '0';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.right = '-300px';
});