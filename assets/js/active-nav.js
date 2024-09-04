// Active nav link highlight
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.l-1');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});