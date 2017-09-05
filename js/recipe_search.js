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
			var title = document.createElement("h5");
			title.innerHTML = "Guacamole";
			recipe_search_col_3.appendChild(title);
			changeTheme(currentTheme);;
		}

		$(recipe_search_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(recipe_search_col_1).click(recipe_search_stage_functions.stageD);
		$(recipe_search_col_2).click(function(){});
		$(recipe_search_col_3).click(function(){});
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
			var title = document.createElement("h5");
			title.innerHTML = "You can make...";
			recipe_search_col_2.appendChild(title);
			//put populate col 2 here
			changeTheme(currentTheme);
		}
		$(recipe_search_col_2.parentElement).css("width", currentStage.col2);
		$(recipe_search_col_1).click(recipe_search_stage_functions.stageB);
		$(recipe_search_col_2).click(recipe_search_stage_functions.stageC);
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
	var title = document.createElement("h5");
	title.innerHTML = "Recipe Search?";
	
	recipe_search_col_1.appendChild(title);

	recipe_search_col_1.appendChild(input);

	recipe_search_col_1.appendChild(button);

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

	document.getElementById('addIngredient').onclick = searchForRecipes;

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