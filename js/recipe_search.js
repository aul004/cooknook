var recipe_search_stage = {
	stage0: {
		col1: "100%"
	},
	stage1: {
		col1: "30%",
		col2: "70%"
	},
	stage2: {
		col1: "7%",
		col2: "30%",
		col3: "63%"
	},
	stage3: {
		col1: "30%",
		col2: "63%",
		col3: "7%"
	}
}

var currentStage = recipe_search_stage.stage0;
var recipe_search_col_1; 
var recipe_search_col_2;
var recipe_search_col_3;
var recipe_search_page;
var queue = true;

var input = document.createElement("input");

var button = document.createElement('button');

var list = document.createElement('ul');


var recipe_search_stage_functions = {
	// *recipe + *search results + recipe
	stageD: function () {
		currentStage = recipe_search_stage.stage3;
		$(recipe_search_col_3.parentElement).css("width", currentStage.col3);

		$(recipe_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 300, queue: queue });

		$(recipe_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(recipe_search_col_1).click(function(){});
		$(recipe_search_col_2).click(recipe_search_stage_functions.stageC);
		$(recipe_search_col_3).click(recipe_search_stage_functions.stageC);
	},

	// recipe + *search results + *recipe
	stageC: function() {
		currentStage = recipe_search_stage.stage2;
		$(recipe_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		$(recipe_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(recipe_search_col_3 == undefined) {
			recipe_search_col_3 = generateColumns();
			recipe_search_page.append(recipe_search_col_3.parentElement);
			var title = document.createElement("h3");
			title.innerHTML = "Guacamole";

			var rresult = document.createElement("img");
			rresult.setAttribute("src", "img/recipe2.png");

			rresult.style.width="90%";
			

			recipe_search_col_3.appendChild(title);

			recipe_search_col_3.appendChild(rresult);
			changeTheme(currentTheme);;
		}

		$(recipe_search_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(recipe_search_col_1).click(recipe_search_stage_functions.stageD);
		$(recipe_search_col_2).click(function(){});
		$(recipe_search_col_3).click(function(){});
		$(rresult).click(recipe_search_stage_functions.stageB)
	},

	// *recipe + *search results
	stageB: function() {
		currentStage = recipe_search_stage.stage1;
		$(recipe_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });

		if(recipe_search_col_2 == undefined){
			recipe_search_col_2 = generateColumns();
			recipe_search_page.append(recipe_search_col_2.parentElement);
			var title = document.createElement("h3");
			title.innerHTML = "Recipes Found:";
			recipe_search_col_2.appendChild(title);
			//put populate col 2 here

			var rbtn1 = document.createElement("div");
			rbtn1.setAttribute("class", "btn-group dropdown");
			recipe_search_col_2.appendChild(rbtn1);
			rbtn1.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"Cuisine</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\">USA</a>" +
									"<a class=\"dropdown-item\" href=\"#\">Italy</a>" +
									"<a class=\"dropdown-item\" href=\"#\">China</a>" +
									"<a class=\"dropdown-item\" href=\"#\">Greek</a>" +
									  "</div>";

			var rbtn2 = document.createElement("div");
			rbtn2.setAttribute("class", "btn-group dropdown");
			recipe_search_col_2.appendChild(rbtn2);
			rbtn2.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"Style</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\">Grilled</a>" +
									"<a class=\"dropdown-item\" href=\"#\">Fried</a>" +
									"<a class=\"dropdown-item\" href=\"#\">Steamed</a>" +
									"<a class=\"dropdown-item\" href=\"#\">Baked</a>" +
									  "</div>";

			var rbtn3 = document.createElement("div");
			rbtn3.setAttribute("class", "btn-group dropdown");
			recipe_search_col_2.appendChild(rbtn3);
			rbtn3.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"Minutes</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\"><10</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><20</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><30</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><45</a>" +
									  "</div>";

			var rbtn4 = document.createElement("div");
			rbtn4.setAttribute("class", "btn-group dropdown");
			recipe_search_col_2.appendChild(rbtn4);
			rbtn4.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"Calories</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\"><100</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><3002</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><500</a>" +
									"<a class=\"dropdown-item\" href=\"#\"><800</a>" +
									  "</div>";

			var imgdiv = document.createElement("div");
			imgdiv.setAttribute("class", "container");
			var reresult = document.createElement("img");
			reresult.setAttribute("src", "img/reresult.png");
			reresult.style.width="90%";
			imgdiv.style.marginTop="5%";
			imgdiv.appendChild(reresult);
			recipe_search_col_2.appendChild(imgdiv);



			changeTheme(currentTheme);
		}
		$(recipe_search_col_2.parentElement).css("width", currentStage.col2);
		$(recipe_search_col_1).click(recipe_search_stage_functions.stageB);
		$(imgdiv).click(recipe_search_stage_functions.stageC);
	},

	// recipe search splash
	stageA: function() {
		currentStage = recipe_search_stage.stage0;
		if(recipe_search_col_1 == undefined) {
			recipe_search_col_1 = generateColumns();
			recipe_search_page.append(recipe_search_col_1.parentElement);
			recipe_populate_col_1();
			changeTheme(currentTheme);
		}
		$(recipe_search_col_1.parentElement).css("width", currentStage.col1);
		$(button).click(recipe_search_stage_functions.stageB);
	}
}

// will rename this later >__>
function recipe_populate_col_1() {
	var title = document.createElement("h1");
	title.innerHTML = "Recipe Search";

	// input.setAttribute("id", "textfield");
	input.style.height="50px";
	input.style.width="60%";
	input.style.fontSize="14pt";

	title.style.paddingTop="20%";
	
	recipe_search_col_1.appendChild(title);

	recipe_search_col_1.appendChild(input);

	input.style.marginTop="30px";

	var searchdiv = document.createElement("div");
	searchdiv.setAttribute("class", "container");

	searchdiv.appendChild(button);

	recipe_search_col_1.appendChild(searchdiv);

	searchdiv.style.marginTop="20px";

	// input.id = 'ingredient';
	// button.id = 'addIngredient';
	button.innerHTML = 'Search for Recipes';
	// list.id = 'ingList';

	var searchForRecipes = function () {
		var text = document.getElementById('ingredient').value;
		var li = document.createElement('li');
		li.innerHTML = "<label>" + text + "</label>" + 
		"<button class='delete'>X</button>";
		document.getElementById('ingList').appendChild(li);
	}

	button.onclick = searchForRecipes;

	recipe_search_col_1.appendChild(list);
}


function recipe_page_hide() {
	if(recipe_search_page != undefined) {
		$(recipe_search_page).css("display", "none");
	}
}

function recipe_page_setup() {
	if(recipe_search_page == undefined) {
		recipe_search_page = document.createElement('div');
		recipe_search_page.id = 'recipe_search_page';
		document.getElementById('page_viewer').append(recipe_search_page);
		recipe_search_stage_functions.stageA();
	} 
	$(recipe_search_page).css("display", "block");
}



// TODO: encapsilate within another structure