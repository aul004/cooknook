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

			var rresult = document.createElement("img");
			rresult.setAttribute("src", "img/rresult.png");
			rresult.setAttribute("id", "img2");

			ingredients_search_col_3.appendChild(rresult);
			changeTheme(currentTheme);;
		}

		$(ingredients_search_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(ingredients_search_col_1).click(ingredients_search_stage_functions.stageD);
		$(ingredients_search_col_2).click(function(){});
		$(ingredients_search_col_3).click(function(){});
		$("#img2").click(ingredients_search_stage_functions.stageB);
		
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
			ingredients_search_col_2.appendChild(title);
			title.innerHTML = "Result";
			
									
			var ddbutton1 = document.createElement("div");
			ddbutton1.setAttribute("class", "btn-group dropdown");
			ingredients_search_col_2.appendChild(ddbutton1);
			ddbutton1.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"Best Match</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\">1</a>" +
									"<a class=\"dropdown-item\" href=\"#\">2</a>" +
									"<a class=\"dropdown-item\" href=\"#\">3</a>" +
									  "</div>";

			var ddbutton2 = document.createElement("div");
			ddbutton2.setAttribute("class", "btn-group dropdown");
			ingredients_search_col_2.appendChild(ddbutton2);
			ddbutton2.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"All Cuisines</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\">1</a>" +
									"<a class=\"dropdown-item\" href=\"#\">2</a>" +
									"<a class=\"dropdown-item\" href=\"#\">3</a>" +
									  "</div>";
									  
			var ddbutton3 = document.createElement("div");
			ddbutton3.setAttribute("class", "btn-group dropdown");
			ingredients_search_col_2.appendChild(ddbutton3);
			ddbutton3.innerHTML = "<button class=\"btn btn-secondary dropdown-toggle\" style=\"float:right;\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
									"All Types</button>" +
		  							"<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">" +
									"<a class=\"dropdown-item\" href=\"#\">1</a>" +
									"<a class=\"dropdown-item\" href=\"#\">2</a>" +
									"<a class=\"dropdown-item\" href=\"#\">3</a>" +
									  "</div>";
			// var ddbutton2 = document.createElement("div");
			// filterdiv.appendChild(ddbutton2);
			// ddbutton2.innerHTML = "<button style=\"float:right;\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter 1" + 
			// 					  "<span class=\"caret\"></span></button>" + 
			// 					  "<ul class=\"dropdown-menu\">" +
			//   					  "<li><a href=\"#\">HTML</a></li>" +
			//                       "<li><a href=\"#\">CSS</a></li>" +
			//   					  "<li><a href=\"#\">JavaScript</a></li>" +
			// 						"</ul>";
									
			// var ddbutton3 = document.createElement("div");
			// filterdiv.appendChild(ddbutton3);
			// ddbutton3.innerHTML = "<button style=\"float:right;\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Filter 1" + 
			// 					  "<span class=\"caret\"></span></button>" + 
			// 					  "<ul class=\"dropdown-menu\">" +
			//   					  "<li><a href=\"#\">HTML</a></li>" +
			//                       "<li><a href=\"#\">CSS</a></li>" +
			//   					  "<li><a href=\"#\">JavaScript</a></li>" +
			//   					  "</ul>";
			//put populate col 2 here

			var iresult = document.createElement("img");
			iresult.setAttribute("src", "img/iresult.PNG");
			iresult.setAttribute("id", "img1");

			ingredients_search_col_2.appendChild(iresult);
			changeTheme(currentTheme);
		}
		$(ingredients_search_col_2.parentElement).css("width", currentStage.col2);
		$(ingredients_search_col_1).click(ingredients_search_stage_functions.stageB);
		$('#img1').click(ingredients_search_stage_functions.stageC);
	},

	// ingredients search splash
	stageA: function() {
		currentStage = ingredients_search_stage.stage0;
		if(ingredients_search_col_1 == undefined) {
			ingredients_search_col_1 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_1.parentElement);
			ingredients_populate_col_1();
			changeTheme(currentTheme);
		}
		$(ingredients_search_col_1.parentElement).css("width", currentStage.col1);
		$('#addIngredient').click(ingredients_search_stage_functions.stageB);
	}
}

// will rename this later >__>
function ingredients_populate_col_1() {
	var title = document.createElement("h5");
	title.innerHTML = "What's in your pantry today?";
	
	var input = document.createElement("input");
	var button = document.createElement('button');
	var list = document.createElement('ul');
	ingredients_search_col_1.appendChild(title);
	ingredients_search_col_1.appendChild(input);
	ingredients_search_col_1.appendChild(button);

	input.id = 'ingredient';
	button.id = 'addIngredient';
	button.innerHTML = 'Add Ingredient';
	list.id = 'ingList';

	var addIng = function () {
		var text = document.getElementById('ingredient').value;
		if (text.length < 1)
			return;
		var li = document.createElement('li');
		li.innerHTML = "<label>" + text + "</label>" + 
		"<button class='delete'>X</button>";
		document.getElementById('ingList').appendChild(li);
	}

	document.getElementById('addIngredient').onclick = addIng;

	ingredients_search_col_1.appendChild(list);
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