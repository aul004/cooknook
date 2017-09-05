function generateDock() {
    var dock = document.createElement('div');
    dock.className = 'pos-f-t';

    var navbarToggleExternalContent = document.createElement('div');
    navbarToggleExternalContent.id = "navbarToggleExternalContent";
    navbarToggleExternalContent.className = "collapse show fixed-bottom";
    dock.appendChild(navbarToggleExternalContent);


    var p4 = document.createElement('div');
    p4.className = "p-4";
    p4.id = "dock";
    p4.style=" margin: auto; border-radius: 7px;"
    navbarToggleExternalContent.appendChild(p4);

    var dockButtonsContainer = document.createElement('div');
    dockButtonsContainer.className = "mr-auto text-center";
    dockButtonsContainer.style="width:100%;";
    p4.appendChild(dockButtonsContainer);

    dockButtonsContainer.appendChild(buildDockButton('ingredients_search', 'Ingredients Search'));
    dockButtonsContainer.appendChild(buildDockButton('recipe_search', 'Recipe Search'));
    dockButtonsContainer.appendChild(buildDockButton('social_search', 'Social Search'));
    dockButtonsContainer.appendChild(buildDockButton('shopping_list', 'Shopping List'));

    var nav = document.createElement('nav');
    nav.className = "navbar navbar-light fixed-bottom";
    nav.id = "bottom_nav";
    dock.appendChild(nav);

    var button = document.createElement('button');
    button.type = "button";
    button.id = "dockToggleButton";
    button.className = "togglemenu";
    button.style = "margin:auto;"
    // button.style = "margin-left: auto; margin-right: auto; left: 0;right: 0;bottom:0px; position: absolute;";
    button.setAttribute("data-toggle", "collapse");
    button.setAttribute("data-target", "#navbarToggleExternalContent");
    button.setAttribute("aria-controls", "navbarToggleExternalContent");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");
    button.setAttribute("data-default-text", "Show Menu");
    button.setAttribute("data-new-text", "Hide Menu");
    nav.appendChild(button);

    document.body.appendChild(dock);
}

function buildDockButton(id, innerHTML) {
    var span = document.createElement('span');
    span.className = "col-md-3";

    var a = document.createElement('a');
    a.href = "#";
    span.appendChild(a);

    var button = document.createElement('button');
    button.className = "dockbtn";
    button.id = id;
    button.innerHTML = innerHTML;
    a.appendChild(button);

    return span;
}

function resizeDock() {
    $('#dock').width($('#page_viewer').width() - 70);
}



    generateDock();
    resizeDock();
