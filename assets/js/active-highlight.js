// For the skills tab to activate the highlight when tab is selected
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.a-1');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
    