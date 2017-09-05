var social_stage = {
    stage0: {
		col1: "30%",
		col2: "70%"
	},
	stage1: {
		col1: "30%",
		col2: "70%"
    },
    stage2: {
		col1: "30%",
		col2: "70%"
    }
}

var currentStage = social_stage.stage0;
var social_col_1; 
var social_col_2;
var social_page;
var queue = true;

var social_stage_functions = {
	// *social + *search results
	stageB: function() {
		currentStage = social_stage.stage1;
		$(social_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });


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
        if(social_col_2 == undefined){
			social_col_2 = generateColumns();
			social_page.append(social_col_2.parentElement);
            social_populate_col_2_profile();
			//put populate col 2 here
			changeTheme(currentTheme);
		}
        $(social_col_1.parentElement).css("width", currentStage.col1);
        $(social_col_2.parentElement).css("width", currentStage.col2);
		$('#socialSearch').click(social_stage_functions.stageB);
	}
}
var social_friends_page;
var social_groups_page;
var social_profile_page;

function social_friends_page_hide() {
    if(social_friends_page != undefined)
        $(social_friends_page).css("display", "none");
}
function social_groups_page_hide() {
    if(social_groups_page != undefined)
        $(social_groups_page).css("display", "none");
}
function social_profile_page_hide() {
    if(social_profile_page != undefined)
        $(social_profile_page).css("display", "none");
}

function social_populate_col_2_groups() {
    social_friends_page_hide();
    social_profile_page_hide();
    if(social_groups_page == undefined) {
        social_groups_page = document.createElement('div');

        var searchFor = document.createElement('div');
        searchFor.className = "container text-right";
        social_groups_page.appendChild(searchFor);

        var searchInput = document.createElement('input');
        searchInput.type = "text";
        searchInput.placeholder = "Type group's name here";
        searchFor.appendChild(searchInput);

        var searchButton = document.createElement('button');
        searchButton.type ="button";
        searchButton.innerHTML = "Search";
        searchFor.appendChild(searchButton);

        var title = document.createElement("h5");
        title.innerHTML = "My Groups";
        social_groups_page.appendChild(title);
        social_col_2.appendChild(social_groups_page);
    }
    else 
        $(social_groups_page).css("display", "block");
}
function social_populate_col_2_friends() {
    social_groups_page_hide();
    social_profile_page_hide();
    console.log('friends');
    if(social_friends_page == undefined) {
        social_friends_page = document.createElement('div');

        var searchFor = document.createElement('div');
        searchFor.className = "container text-right";
        social_friends_page.appendChild(searchFor);

        var searchInput = document.createElement('input');
        searchInput.type = "text";
        searchInput.placeholder = "Type friend's name here";
        searchFor.appendChild(searchInput);

        var searchButton = document.createElement('button');
        searchButton.type ="button";
        searchButton.innerHTML = "Search";
        searchFor.appendChild(searchButton);

        var title = document.createElement("h5");
        title.innerHTML = "My Friends";
        social_friends_page.appendChild(title);
        social_col_2.appendChild(social_friends_page);
    }
    else 
        $(social_friends_page).css("display", "block");
}
function social_populate_col_2_profile() {
    social_groups_page_hide();
    social_friends_page_hide();
    console.log('me');
    if(social_profile_page == undefined) {
        social_profile_page = document.createElement('div');

        var title = document.createElement("h5");
        title.innerHTML = "MEE";
        social_profile_page.appendChild(title);
        social_col_2.appendChild(social_profile_page);
    }
    else 
        $(social_profile_page).css("display", "block");
}

// will rename this later >__>
function social_populate_col_1() {
	var title = document.createElement("h5");
    title.innerHTML = "Granny Smith";
    social_col_1.appendChild(title);

    var profilePic = document.createElement('img');
    profilePic.width = 250;
    profilePic.height = 250;
    profilePic.style = "margin: 5px 0px 5px 0px"
    social_col_1.appendChild(profilePic);

    var button1 = document.createElement('button');
    button1.style = "width: 100%; border-radius:7px; margin: 10px 0px 10px 0px";
    button1.innerHTML = "My Profile";
    button1.onclick = social_populate_col_2_profile;
    social_col_1.appendChild(button1);

    var button2 = document.createElement('button');
    button2.style = "width: 100%; border-radius:7px; margin: 5px 0px 5px 0px";
    button2.innerHTML = "My Friends";
    button2.onclick = social_populate_col_2_friends;
    social_col_1.appendChild(button2);

    var button3 = document.createElement('button');
    button3.style = "width: 100%; border-radius:7px; margin: 5px 0px 5px 0px";
    button3.innerHTML = "My Groups";
    button3.onclick = social_populate_col_2_groups;
    social_col_1.appendChild(button3);

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