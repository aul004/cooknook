/************** color section ****************/
const default_theme = {
	mainColor: '#B28B5C',
	textColor: '#424242',
	dockColor: '#B28B5C'
}
const ingredients_search_theme = {
	mainColor: '#7CAF7B',
	textColor: '#ffffff',
	dockColor: '#7CAF7B'
}
const recipe_search_theme = {
	mainColor: '#FFD574',
	textColor: '#ffffff',
	dockColor: '#FFD574'
}
const social_search_theme = {
	mainColor: '#6FCBFF',
	textColor: '#ffffff',
	dockColor: '#6FCBFF'
}
const shopping_list_theme = {
	mainColor: '#FFAAAA',
	textColor: '#ffffff',
	dockColor: '#FFAAAA'
}

/************** general section ****************/
var colHeight = window.innerHeight - $("#navbarToggleExternalContent").height() - $("#top_nav").height() -$("#bottom_nav").height() - 40;
function changeTheme(theme) {
	currentTheme = theme;
	$('#dock').css('background-color', theme.dockColor);
	$('#SignupForm').css('background-color', theme.dockColor);
	$('#LoginForm').css('background-color', theme.dockColor);
	switch (theme) {
		case ingredients_search_theme:
		recipe_page_hide();
		social_page_hide();
		shopping_list_page_hide();
		ingredients_page_setup();
		break;
		case recipe_search_theme:
		ingredients_page_hide();
		social_page_hide();
		shopping_list_page_hide();
		recipe_page_setup();
		break;
		case social_search_theme:
		recipe_page_hide();
		ingredients_page_hide();
		shopping_list_page_hide();
		social_page_setup();
		break;
		case shopping_list_theme:
		recipe_page_hide();
		social_page_hide();
		ingredients_page_hide();
		shopping_list_page_setup();
		break;
		
		default:
		break;
	}
}

function generateColumns() {
	var column = document.createElement('div');
	column.className = 'column';
	$(column).css("background-color", currentTheme.mainColor);
	// column.innerText = 'Sample Text\n';

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
$('#ingredients_search').click(function(){
	removeSplash();
	changeTheme(ingredients_search_theme); 
	
});
$('#recipe_search').click(function(){
	removeSplash();
	changeTheme(recipe_search_theme); 
});
$('#social_search').click(function(){
	removeSplash();
	changeTheme(social_search_theme);
});
$('#shopping_list').click(function(){
	removeSplash();
	changeTheme(shopping_list_theme);
});

window.onresize = function () {
	resizeDock();
}

//Toggle show/hide dock button
$(".togglemenu").click(function () {
	var $element = $(this);
	$element.text(function(i, text) {
		return text == $element.data('default-text') ? $element.data('new-text')
		: $element.data('default-text');
	});
});
