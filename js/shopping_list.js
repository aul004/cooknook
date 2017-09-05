var shopping_list_stage = {
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

var currentStage = shopping_list_stage.stage0;
var shopping_list_col_1; 
var shopping_list_col_2;
var shopping_list_col_3;
var shopping_list_page;
var queue = true;




var shopping_list_stage_functions = {
	// *shopping_list + *search results + shopping_list
	stageD: function () {
		currentStage = shopping_list_stage.stage3;
		$(shopping_list_col_3.parentElement).css("width", currentStage.col3);

		$(shopping_list_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 300, queue: queue });

		$(shopping_list_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(shopping_list_col_1).click(function(){});
		$(shopping_list_col_2).click(shopping_list_stage_functions.stageC);
		$(shopping_list_col_3).click(shopping_list_stage_functions.stageC);
	},

	// shopping_list + *search results + *shopping_list
	stageC: function() {
		currentStage = shopping_list_stage.stage2;
		$(shopping_list_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		$(shopping_list_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(shopping_list_col_3 == undefined) {
			shopping_list_col_3 = generateColumns();
			shopping_list_page.append(shopping_list_col_3.parentElement);
			var title = document.createElement("h5");
			title.innerHTML = "Guacamole";
			shopping_list_col_3.appendChild(title);
			changeTheme(currentTheme);;
		}

		$(shopping_list_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(shopping_list_col_1).click(shopping_list_stage_functions.stageD);
		$(shopping_list_col_2).click(function(){});
		$(shopping_list_col_3).click(function(){});
	},

	// *shopping_list + *search results
	stageB: function() {
		currentStage = shopping_list_stage.stage1;
		$(shopping_list_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });

		if(shopping_list_col_2 == undefined){
			shopping_list_col_2 = generateColumns();
			shopping_list_page.append(shopping_list_col_2.parentElement);
			var title = document.createElement("h5");
			title.innerHTML = "You can make...";
			shopping_list_col_2.appendChild(title);
			//put populate col 2 here
			changeTheme(currentTheme);
		}
		$(shopping_list_col_2.parentElement).css("width", currentStage.col2);
		$(shopping_list_col_1).click(shopping_list_stage_functions.stageB);
		$(shopping_list_col_2).click(shopping_list_stage_functions.stageC);
	},

	// shopping_list search splash
	stageA: function() {
		currentStage = shopping_list_stage.stage0;
		if(shopping_list_col_1 == undefined) {
			shopping_list_col_1 = generateColumns();
			shopping_list_page.append(shopping_list_col_1.parentElement);
			shopping_list_populate_col_1();
			changeTheme(currentTheme);
		}
		$(shopping_list_col_1.parentElement).css("width", currentStage.col1);
		$('#shopping_listSearch').click(shopping_list_stage_functions.stageB);
	}
}

// will rename this later >__>
function shopping_list_populate_col_1() {
	var title = document.createElement("h5");
	title.innerHTML = "Shopping List Search?";
	var input = document.createElement("input");
    
    var button = document.createElement('button');
    
    var list = document.createElement('ul');
	shopping_list_col_1.appendChild(title);

	shopping_list_col_1.appendChild(input);

	shopping_list_col_1.appendChild(button);

	// input.id = 'ingredient';
	button.id = 'shopping_listSearch';
	button.innerHTML = 'Search for My Groups';
	// list.id = 'ingList';

	var searchForShoppingLists = function () {
		var text = document.getElementById('ingredient').value;
		var li = document.createElement('li');
		li.innerHTML = "<label>" + text + "</label>" + 
		"<button class='delete'>X</button>";
		document.getElementById('ingList').appendChild(li);
	}

	document.getElementById('shopping_listSearch').onclick = searchForShoppingLists;

	shopping_list_col_1.appendChild(list);
}


function shopping_list_page_hide() {
	if(shopping_list_page != undefined) {
		$(shopping_list_page).css("display", "none");
	}
}

function shopping_list_page_setup() {
	if(shopping_list_page == undefined) {
		shopping_list_page = document.createElement('div');
		shopping_list_page.id = 'shopping_list_page';
		document.getElementById('page_viewer').append(shopping_list_page);
		shopping_list_stage_functions.stageA();
	} 
	$(shopping_list_page).css("display", "block");
}



// TODO: encapsilate within another structure