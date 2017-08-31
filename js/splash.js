var logo = document.createElement('img');
logo.src = 'img/logo.jpg';
logo.width = 500;

document.getElementById('page_viewer').appendChild(logo);

function removeSplash() {
    $(logo).animate({
        width: 100
    })
    resizeColumnHeight();
    document.getElementById('logo_goes_here').appendChild(logo);
}