const body = document.querySelector('body');
const formNavTheme = document.querySelector('#formNavTheme');

formNavTheme.addEventListener('click', (e) => {
    e.preventDefault();

    if (body.className.includes('light')) {
        body.className = 'dark';
        return localStorage.setItem('theme', 'dark');
    }
    if (body.className.includes('dark')) {
        body.className = 'light';
        return localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        body.className = 'dark';
    } else {
        localStorage.setItem('theme', 'light');
    }
});
