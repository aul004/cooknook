var logo = document.createElement('img');
logo.src = 'img/cooknook_Logo.png';
logo.width = 700;

document.getElementById('page_viewer').appendChild(logo);

function removeSplash() {
    $(logo).animate({
        width: 100
    });
    
    document.getElementById('logo_goes_here').appendChild(logo);
}