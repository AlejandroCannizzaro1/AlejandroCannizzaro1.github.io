setTimeout(() => {
    document.getElementById('welcome').classList.remove('show');
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('language-selection').classList.add('show');
        document.querySelector('.traductions-flags').style.display = 'block';
    }, 1000);
}, 3000);