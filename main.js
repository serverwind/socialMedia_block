let socButton = document.getElementById('closeSocial');
let socBlock = document.querySelector('.socialBlock');

socButton.addEventListener('click', closeSoc);

function closeSoc() {
    socBlock.style.display = 'none';
}
