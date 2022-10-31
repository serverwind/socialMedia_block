var socButton = document.getElementById('closeSocial');
var socBlock = document.querySelector('.socialBlock');

socButton.addEventListener('click', closeSoc);

if (localStorage.getItem('socialBlock', 'closed')) {
    socBlock.style.bottom = '-55px';

    var showSoc = function() {
        socBlock.style.bottom = '0px';
    };
    socBlock.addEventListener('mouseover', showSoc);
}

function closeSoc() {
    socBlock.style.bottom = '-55px';
    localStorage.setItem("socialBlock", "closed");
}

