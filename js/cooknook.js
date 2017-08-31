/************** color section ****************/
const default_theme = {
	mainColor: '#d3e2ed',
	textColor: '#424242',
	dockColor: '#000000'
}
const ingredients_search_theme = {
	mainColor: '#A8DFA6',
	textColor: '#ffffff',
	dockColor: '#A8DFA6'
}
const recipe_search_theme = {
	mainColor: '#FFD992',
	textColor: '#ffffff',
	dockColor: '#FFD992'
}
const social_search_theme = {
	mainColor: '#A2D9FF',
	textColor: '#ffffff',
	dockColor: '#A2D9FF'
}
const shopping_list_theme = {
	mainColor: '#FFAAAA',
	textColor: '#ffffff',
	dockColor: '#FFAAAA'
}

/************** general section ****************/
var colHeight = window.innerHeight - 40 - $("#top_nav").height() -$("#bottom_nav").height() - 40;
function changeTheme(theme) {
	currentTheme = theme;
		$('#dock').css('background-color', theme.dockColor);
		$('#SignupForm').css('background-color', theme.dockColor);
		$('#LoginForm').css('background-color', theme.dockColor);
	switch (theme) {
		case ingredients_search_theme:
			ingredients_page_setup();
			break;
		case recipe_search_theme:
			ingredients_page_hide();
			break;
		default:
			break;
	}
}

function generateColumns() {
	var column = document.createElement('div');
	column.className = 'column';
	$(column).css("background-color", currentTheme.mainColor);
	column.innerText = 'Sample Text\n';

	var column_wrapper = document.createElement('div');
	column_wrapper.className = 'wrapper column_wrapper';
	column_wrapper.appendChild(column);
	column_wrapper.content = column;
	// var dockHeight = $("#navbarToggleExternalContent").hasClass('show') ? 40 : $("#navbarToggleExternalContent").height();
	// var height = window.innerHeight - dockHeight - $("#top_nav").height() -$("#bottom_nav").height() - 40;
	$(column_wrapper).css("height", colHeight);
	return column;
}

/************** auto section ****************/
function resizeColumnHeight() {
	var dockHeight = $("#navbarToggleExternalContent").hasClass('show') ? 40 : $("#navbarToggleExternalContent").height();
	colHeight = window.innerHeight - dockHeight - $("#top_nav").height() -$("#bottom_nav").height() - 10;
	$('#page_viewer').css("height", colHeight);
	$('.column_wrapper').animate({
        height: colHeight,
	});
}

var currentTheme = default_theme;
/************** dock section ****************/

dockToggleButton.onclick = resizeColumnHeight;
// $('#dock').css('background-color', currentTheme.dockColor);
changeTheme(currentTheme);
$('#ingredients_search').click(function(){changeTheme(ingredients_search_theme); ingredients_page_setup();removeSplash();});
$('#recipe_search').click(function(){changeTheme(recipe_search_theme);removeSplash();});
$('#social_search').click(function(){changeTheme(social_search_theme);removeSplash();});
$('#shopping_list').click(function(){changeTheme(shopping_list_theme);removeSplash();});