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

var recipe_col1_ABD; 
var recipe_col1_C;
var recipe_col2_BCD;
var recipe_col3_CD;

var recipe_search_page;
var queue = true;

var recipe_search_stage_functions = {
	// *recipe + *search results + recipe
	stageD: function () {
		currentStage = recipe_search_stage.stage3;

		$(recipe_search_col_3.parentElement).css("width", currentStage.col3);

		$(recipe_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 300, queue: queue });
		recipe_populate_col_1();
		$(recipe_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(recipe_search_col_1).click(function(){});
		$(recipe_search_col_2).click(recipe_search_stage_functions.stageC);
		$(recipe_search_col_3).click(function(){});
	},
	// recipe + *search results + *recipe
	stageC: function() {
		currentStage = recipe_search_stage.stage2;
		$(recipe_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		recipe_populate_col_1_hidden();	
		$(recipe_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(recipe_search_col_3 == undefined) {
			recipe_search_col_3 = generateColumns();
			recipe_search_page.append(recipe_search_col_3.parentElement);
			recipe_search_populate_col_3_recipe();
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
		// recipe_populate_col_1();
		if(recipe_search_col_2 == undefined){
			recipe_search_col_2 = generateColumns();
			recipe_search_page.append(recipe_search_col_2.parentElement);
			recipe_search_populate_col_2_recipes();
		}
		$(recipe_search_col_2.parentElement).css("width", currentStage.col2);
	},
	// recipe search splash
	stageA: function() {
		currentStage = recipe_search_stage.stage0;
		if(recipe_search_col_1 == undefined) {
			recipe_search_col_1 = generateColumns();
			recipe_search_page.append(recipe_search_col_1.parentElement);
			recipe_populate_col_1();
		}
		$(recipe_search_col_1.parentElement).css("width", currentStage.col1);
	}
}

function recipe_search_populate_col_3_recipe() {
	recipe_search_col_3.innerHTML = '';
	if(recipe_col3_CD == undefined) {
		recipe_col3_CD = document.createElement('div');
		var recipe = document.createElement("img");
		recipe.src = "img/recipe2.png";
		recipe.style='min-width: 100%; height: auto;'
		recipe_col3_CD.appendChild(recipe);
	}
	recipe_search_col_3.appendChild(recipe_col3_CD);
}

function recipe_search_populate_col_2_recipes() {
    // social_friends_page_hide();
    // social_profile_page_hide();
    if(recipe_col2_BCD == undefined) {
        recipe_col2_BCD = document.createElement('div');

        var title = document.createElement("h3");
        title.innerHTML = "You can make...";
        recipe_col2_BCD.appendChild(title);

        var filterBar = document.createElement('div');
        filterBar.className = "container";
        recipe_col2_BCD.appendChild(filterBar);

        var filterOptions = {
            'Sort': ['Best Match', 'Cooking Time', 'Difficulty Level', 'Fewest Missing recipe', 'Calories'],
			'Cuisine': ['Italian', 'German', 'Korean'],
			'Type' : ['Appetizer', 'Soup', 'Salad', 'Entree'],
        }

        for( var filterOption in filterOptions) {
			var dropdownMenu = document.createElement('select');
			recipe_col2_BCD.appendChild(dropdownMenu);

			for (var option of filterOptions[filterOption]) {
				var opt = document.createElement('option');
				opt.value = option;
				opt.innerHTML = option;
				dropdownMenu.appendChild(opt);
			}
        }

        recipe_col2_BCD.appendChild(document.createElement("hr"));

        var recipes = [
            {
                "name": "Wrap",
                "ratings": "img/cooknook_5star.png",
                "src": "http://verdecostamesa.com/wp-content/uploads/2017/03/ca-grill-food2-100x100.jpg"
            },
            {
                "name": "Pizza",
                "ratings": "img/cooknook_5star.png",
                "src": "https://i.pinimg.com/736x/80/3a/ce/803ace870f3e6677d043883994c8d6e5--pizza-coupons-food-coupons.jpg"
            },
            {
                "name": "Food",
                "ratings": "img/cooknook_5star.png",
                "src": "http://dining.savannahnow.com/sites/dining.savannahnow.com/files/styles/thumbnail/public/field/photos/2568845_web1_sav_052417_onfood-2.jpg"
            },
            {
                "name": "Soup",
                "ratings": "img/cooknook_5star.png",
                "src": "http://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/thumb_small/public/posole.jpg"
            },
            {
                "name": "Soba",
                "ratings": "img/cooknook_5star.png",
                "src": "http://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/thumb_small/public/41-papayasalad_1.jpg"
            },
            {
                "name": "Zucchini Boats",
                "ratings": "img/cooknook_5star.png",
                "src": "http://www.topinspired.com/wp-content/uploads/2017/08/Greek-Quinoa-Grilled-Zucchini-Boats-100x100.jpg"
            },
            {
                "name": "Fettuccine Alfredo",
                "ratings": "img/cooknook_5star.png",
                "src": "http://dining.savannahnow.com/sites/dining.savannahnow.com/files/styles/thumbnail/public/field/photos/2203750_web1_sav_042617_onfood-1.jpg"
            }

        ]

        for (var recipe of recipes) {
            var recipe_box = document.createElement('div');
            recipe_box.className = 'container recipe-box text-left';
            $(recipe_box).click(recipe_search_stage_functions.stageC);
            recipe_box.style = "width: 45%;  margin: 10px; background-color: white; float: left; padding: 10px 0px 10px 0px; border-radius: 7px; color: " + recipe_search_theme.mainColor;
            recipe_col2_BCD.appendChild(recipe_box);

            var recipe_img_container = document.createElement('div');
            recipe_img_container.className = 'text-center';
            recipe_box.appendChild(recipe_img_container);

            var recipe_img = document.createElement('img');
            $(recipe_img).css('max-width', '100%');
            recipe_img.src = recipe.src;
            recipe_img.style = 'float:left; margin: 0px 20px 0px 10px;';
            recipe_img.className = 'recipe_img';
            recipe_img_container.appendChild(recipe_img);

            var recipe_description = document.createElement('div');
            recipe_description.style = 'float:left;';
            recipe_box.appendChild(recipe_description);
            
            var recipe_name = document.createElement('h6');
            recipe_name.style = 'color: ' + recipe_search_theme.secondaryColor ;
            recipe_name.innerHTML = recipe.name;
            recipe_description.appendChild(recipe_name);

            var ratings = document.createElement('img');
            ratings.src = recipe.ratings;
            $(ratings).css('max-width', '100px');
            recipe_description.appendChild(ratings);

            recipe_description.appendChild(document.createElement('br'));

            var btn = document.createElement('img');
            $(btn).css('max-width', '100%');
            btn.src = 'img/ingr_buttons.jpg';
            recipe_description.appendChild(btn);


        }
    }
    else {
        $(recipe_col2_BCD).css("display", "block");

        $('.recipe-box').css('width', '45%');
        $('.recipe-box').addClass('text-left');
        $('.recipe-box').removeClass('text-center');

        $('.recipe_img').css('float', 'left');
        $('.recipe_img').css('margin', '0px 20px 0px 10px;');
	}
	
	recipe_search_col_2.appendChild(recipe_col2_BCD);
}

function recipe_populate_col_1_hidden() {
	if(recipe_col1_ABD != undefined && recipe_col1_ABD.parentElement == recipe_search_col_1)
		recipe_search_col_1.removeChild(recipe_col1_ABD);
	if(recipe_col1_C == undefined) {
		recipe_col1_C = document.createElement('div');
		recipe_col1_C.className = 'row'
		
		var expandBtn = document.createElement('div');
		expandBtn.innerHTML = '+';
		$(expandBtn).css('top', '50%')
		expandBtn.className = 'btn col';
		recipe_col1_C.appendChild(expandBtn);
	}

	recipe_search_col_1.appendChild(recipe_col1_C);
}
function recipe_populate_col_1() {
	if(recipe_col1_C != undefined && recipe_col1_C.parentElement == recipe_search_col_1)
		recipe_search_col_1.removeChild(recipe_col1_C);
	if(recipe_col1_ABD == undefined) {
		recipe_col1_ABD = document.createElement('div');

		var title = document.createElement("h3");
		title.innerHTML = "Recipes Found:";
		title.style.paddingTop="10%";
		recipe_col1_ABD.appendChild(title);
		
		var input = document.createElement("input");
		input.style.height="50px";
		input.style.width="60%";
		input.style.fontSize="14pt";
		input.id = 'recipe';
		input.style.marginTop="30px";
		recipe_col1_ABD.appendChild(input);

		var searchdiv = document.createElement("div");
		searchdiv.setAttribute("class", "container");
		searchdiv.style.marginTop="20px";
		recipe_col1_ABD.appendChild(searchdiv);

		var button = document.createElement('button');
		button.setAttribute("class", "searchbutton");
		button.innerHTML = 'Search for Recipes';
		button.onclick = recipe_search_stage_functions.stageB;
		searchdiv.appendChild(button);
	}
	recipe_search_col_1.appendChild(recipe_col1_ABD);
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