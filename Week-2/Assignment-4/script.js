document.querySelector('#welcome-message').addEventListener('click', function() {
    document.querySelector('#welcome-message').textContent = 'Have a Good Time!';
});
document.querySelector('.button-cta').addEventListener('click', function() {
    document.querySelector('.content_container.hidden').style.display = 'flex';
})
