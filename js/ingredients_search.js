var ingredients_search_stage = {
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

var currentStage = ingredients_search_stage.stage0;
var ingredients_search_col_1; 
var ingredients_search_col_2;
var ingredients_search_col_3;
var ingredients_search_page;
var queue = true;

var ingredients_search_stage_functions = {
	// *ingredients + *search results + recipe
	stageD: function () {
		currentStage = ingredients_search_stage.stage3;
		$(ingredients_search_col_3.parentElement).css("width", currentStage.col3);

		$(ingredients_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 300, queue: queue });

		$(ingredients_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(ingredients_search_col_1).click(function(){});
		$(ingredients_search_col_2).click(ingredients_search_stage_functions.stageC);
		$(ingredients_search_col_3).click(ingredients_search_stage_functions.stageC);
	},

	// ingredients + *search results + *recipe
	stageC: function() {
		currentStage = ingredients_search_stage.stage2;
		$(ingredients_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		$(ingredients_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(ingredients_search_col_3 == undefined) {
			ingredients_search_col_3 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_3.parentElement);
				var title = document.createElement("h5");
	title.innerHTML = "Guacamole";
	ingredients_search_col_3.appendChild(title);
			changeTheme(currentTheme);;
		}

		$(ingredients_search_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(ingredients_search_col_1).click(ingredients_search_stage_functions.stageD);
		$(ingredients_search_col_2).click(function(){});
		$(ingredients_search_col_3).click(function(){});
	},

	// *ingredients + *search results
	stageB: function() {
		currentStage = ingredients_search_stage.stage1;
		$(ingredients_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });

		if(ingredients_search_col_2 == undefined){
			ingredients_search_col_2 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_2.parentElement);
			var title = document.createElement("h5");
	title.innerHTML = "You can make...";
	ingredients_search_col_2.appendChild(title);
			changeTheme(currentTheme);
		}
		$(ingredients_search_col_2.parentElement).css("width", currentStage.col2);
		$(ingredients_search_col_1).click(ingredients_search_stage_functions.stageB);
		$(ingredients_search_col_2).click(ingredients_search_stage_functions.stageC);
	},

	// ingredients search splash
	stageA: function() {
		currentStage = ingredients_search_stage.stage0;
		if(ingredients_search_col_1 == undefined) {
			ingredients_search_col_1 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_1.parentElement);
			populate_col_1();
			changeTheme(currentTheme);
		}
		$(ingredients_search_col_1.parentElement).css("width", currentStage.col1);
		$(ingredients_search_col_1).click(ingredients_search_stage_functions.stageB);
	}

}

// will rename this later >__>
function populate_col_1() {
	var title = document.createElement("h5");
	title.innerHTML = "What's in your pantry today?";
	ingredients_search_col_1.appendChild(title);

	var input = document.createElement("input");
	input.setAttribute("id", "ingredient");
	ingredients_search_col_1.appendChild(input);

	var button = document.createElement('button');
	input.setAttribute("id", "addIngredient");
	button.innerHTML = 'Add Ingredient';
	ingredients_search_col_1.appendChild(button);
}

//WORKING ON THIS
document.getElementById("addIngredient").onclick = function addIngredient() {

	var ingredientsList = [];
	var ingredient = document.getElementById('ingredient').value;
	ingredientsList.push(ingredient);
	
	var pantry = document.createElement('p');
	pantry.innerHTML = ingredientsList.toString();
	ingredients_search_col_1.appendChild(pantry);	
}

function ingredients_page_hide() {
	if(ingredients_search_page != undefined) {
		$(ingredients_search_page).css("display", "none");
	}
}

function ingredients_page_setup() {
	if(ingredients_search_page == undefined) {
		ingredients_search_page = document.createElement('div');
		ingredients_search_page.id = 'ingredients_search_page';
		document.getElementById('page_viewer').append(ingredients_search_page);
		ingredients_search_stage_functions.stageA();
	} 
	$(ingredients_search_page).css("display", "block");
}

// TODO: encapsilate within another structure