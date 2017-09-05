var social_stage = {
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

var currentStage = social_stage.stage0;
var social_col_1; 
var social_col_2;
var social_col_3;
var social_page;
var queue = true;




var social_stage_functions = {
	// *social + *search results + social
	stageD: function () {
		currentStage = social_stage.stage3;
		$(social_col_3.parentElement).css("width", currentStage.col3);

		$(social_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 300, queue: queue });

		$(social_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(social_col_1).click(function(){});
		$(social_col_2).click(social_stage_functions.stageC);
		$(social_col_3).click(social_stage_functions.stageC);
	},

	// social + *search results + *social
	stageC: function() {
		currentStage = social_stage.stage2;
		$(social_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		$(social_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(social_col_3 == undefined) {
			social_col_3 = generateColumns();
			social_page.append(social_col_3.parentElement);
			var title = document.createElement("h5");
			title.innerHTML = "Guacamole";
			social_col_3.appendChild(title);
			changeTheme(currentTheme);;
		}

		$(social_col_3.parentElement).stop().animate({
			width: currentStage.col3
		}, { duration: 300, queue: queue });

		$(social_col_1).click(social_stage_functions.stageD);
		$(social_col_2).click(function(){});
		$(social_col_3).click(function(){});
	},

	// *social + *search results
	stageB: function() {
		currentStage = social_stage.stage1;
		$(social_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });

		if(social_col_2 == undefined){
			social_col_2 = generateColumns();
			social_page.append(social_col_2.parentElement);
			var title = document.createElement("h5");
			title.innerHTML = "You can make...";
			social_col_2.appendChild(title);
			//put populate col 2 here
			changeTheme(currentTheme);
		}
		$(social_col_2.parentElement).css("width", currentStage.col2);
		$(social_col_1).click(social_stage_functions.stageB);
		$(social_col_2).click(social_stage_functions.stageC);
	},

	// social search splash
	stageA: function() {
		currentStage = social_stage.stage0;
		if(social_col_1 == undefined) {
			social_col_1 = generateColumns();
			social_page.append(social_col_1.parentElement);
			social_populate_col_1();
			changeTheme(currentTheme);
		}
		$(social_col_1.parentElement).css("width", currentStage.col1);
		$('#socialSearch').click(social_stage_functions.stageB);
	}
}

// will rename this later >__>
function social_populate_col_1() {
	var title = document.createElement("h5");
	title.innerHTML = "Social Search?";
	var input = document.createElement("input");
    
    var button = document.createElement('button');
    
    var list = document.createElement('ul');
	social_col_1.appendChild(title);

	social_col_1.appendChild(input);

	social_col_1.appendChild(button);

	// input.id = 'ingredient';
	button.id = 'socialSearch';
	button.innerHTML = 'Search for My Groups';
	// list.id = 'ingList';

	var searchForSocials = function () {
		var text = document.getElementById('ingredient').value;
		var li = document.createElement('li');
		li.innerHTML = "<label>" + text + "</label>" + 
		"<button class='delete'>X</button>";
		document.getElementById('ingList').appendChild(li);
	}

	document.getElementById('socialSearch').onclick = searchForSocials;

	social_col_1.appendChild(list);
}


function social_page_hide() {
	if(social_page != undefined) {
		$(social_page).css("display", "none");
	}
}

function social_page_setup() {
	if(social_page == undefined) {
		social_page = document.createElement('div');
		social_page.id = 'social_page';
		document.getElementById('page_viewer').append(social_page);
		social_stage_functions.stageA();
	} 
	$(social_page).css("display", "block");
}



// TODO: encapsilate within another structure