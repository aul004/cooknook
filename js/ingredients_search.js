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

var ingredients_col1_ABD; 
var ingredients_col1_C;
var ingredients_col2_BCD;
var ingredients_col3_CD;

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
		ingredients_populate_col_1();
		$(ingredients_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 300, queue: queue });

		$(ingredients_search_col_1).click(function(){});
		$(ingredients_search_col_2).click(ingredients_search_stage_functions.stageC);
		$(ingredients_search_col_3).click(function(){});
	},
	// ingredients + *search results + *recipe
	stageC: function() {
		currentStage = ingredients_search_stage.stage2;
		$(ingredients_search_col_1.parentElement).stop().animate({
			width: currentStage.col1
		}, { duration: 200, queue: queue });
		ingredients_populate_col_1_hidden();	
		$(ingredients_search_col_2.parentElement).stop().animate({
			width: currentStage.col2
		}, { duration: 200, queue: queue });

		if(ingredients_search_col_3 == undefined) {
			ingredients_search_col_3 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_3.parentElement);
			ingredients_search_populate_col_3_recipe();
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
		// ingredients_populate_col_1();
		if(ingredients_search_col_2 == undefined){
			ingredients_search_col_2 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_2.parentElement);
			ingredients_search_populate_col_2_recipes();
		}
		$(ingredients_search_col_2.parentElement).css("width", currentStage.col2);
	},
	// ingredients search splash
	stageA: function() {
		currentStage = ingredients_search_stage.stage0;
		if(ingredients_search_col_1 == undefined) {
			ingredients_search_col_1 = generateColumns();
			ingredients_search_page.append(ingredients_search_col_1.parentElement);
			ingredients_populate_col_1();
		}
		$(ingredients_search_col_1.parentElement).css("width", currentStage.col1);
	}
}

function ingredients_search_populate_col_3_recipe() {
	ingredients_search_col_3.innerHTML = '';
	if(ingredients_col3_CD == undefined) {
		ingredients_col3_CD = document.createElement('div');
		var recipe = document.createElement("img");
		recipe.src = "img/rresult.png";
		recipe.id = 'img2';
		ingredients_col3_CD.appendChild(recipe);
	}
	ingredients_search_col_3.appendChild(ingredients_col3_CD);
}

function ingredients_search_populate_col_2_recipes() {
    // social_friends_page_hide();
    // social_profile_page_hide();
    if(ingredients_col2_BCD == undefined) {
        ingredients_col2_BCD = document.createElement('div');

        var title = document.createElement("h3");
        title.innerHTML = "You can make...";
        ingredients_col2_BCD.appendChild(title);

        var filterBar = document.createElement('div');
        filterBar.className = "container";
        ingredients_col2_BCD.appendChild(filterBar);

        var filterOptions = {
            'sort': ['Best Match', 'Cooking Time', 'Difficulty Level', 'Fewest Missing Ingredients', 'Calories'],
            'cuisine': ['Italian', 'German', 'Korean'],
            'type' : ['Appetizer', 'Soup', 'Salad', 'Entree']
        }

        for( var filterOption in filterOptions) {
			var dropdownMenu = document.createElement('select');
			ingredients_col2_BCD.appendChild(dropdownMenu);

			for (var option of filterOptions[filterOption]) {
				var opt = document.createElement('option');
				opt.value = option;
				opt.innerHTML = option;
				dropdownMenu.appendChild(opt);
			}
        }

        ingredients_col2_BCD.appendChild(document.createElement("hr"));

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
            recipe_box.className = 'container ingredients-recipe-box text-left';
            $(recipe_box).click(ingredients_search_stage_functions.stageC);
            recipe_box.style = "width: 45%;  margin: 10px; background-color: white; float: left; padding: 10px 0px 10px 0px; border-radius: 7px; color: " + ingredients_search_theme.mainColor;
            ingredients_col2_BCD.appendChild(recipe_box);

            var ingredients_recipe_img_container = document.createElement('div');
            ingredients_recipe_img_container.className = 'text-center';
            recipe_box.appendChild(ingredients_recipe_img_container);

            var ingredients_recipe_img = document.createElement('img');
            $(ingredients_recipe_img).css('max-width', '100%');
            ingredients_recipe_img.src = recipe.src;
            ingredients_recipe_img.style = 'float:left; margin: 0px 20px 0px 10px;';
            ingredients_recipe_img.className = 'ingredients_recipe_img';
            ingredients_recipe_img_container.appendChild(ingredients_recipe_img);

            var recipe_description = document.createElement('div');
            recipe_description.style = 'float:left;';
            recipe_box.appendChild(recipe_description);
            
            var recipe_name = document.createElement('h6');
            recipe_name.style = 'color: ' + ingredients_search_theme.secondaryColor ;
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
        $(ingredients_col2_BCD).css("display", "block");

        $('.ingredients-recipe-box').css('width', '45%');
        $('.ingredients-recipe-box').addClass('text-left');
        $('.ingredients-recipe-box').removeClass('text-center');

        $('.ingredients_recipe_img').css('float', 'left');
        $('.ingredients_recipe_img').css('margin', '0px 20px 0px 10px;');
	}
	
	ingredients_search_col_2.appendChild(ingredients_col2_BCD);
}

function ingredients_populate_col_1_hidden() {
	if(ingredients_col1_ABD != undefined /*&& ingredients_col1_ABD.parentElement == ingredients_search_col_1*/)
		ingredients_search_col_1.removeChild(ingredients_col1_ABD);
	if(ingredients_col1_C == undefined) {
		ingredients_col1_C = document.createElement('div');
		ingredients_col1_C.className = 'row'
		
		var expandBtn = document.createElement('div');
		expandBtn.innerHTML = '+';
		$(expandBtn).css('top', '50%')
		expandBtn.className = 'btn col';
		ingredients_col1_C.appendChild(expandBtn);
	}

	ingredients_search_col_1.appendChild(ingredients_col1_C);
}
function ingredients_populate_col_1() {
if(ingredients_col1_C != undefined /*&& ingredients_col1_C.parentElement == ingredients_search_col_1*/)
		ingredients_search_col_1.removeChild(ingredients_col1_C);
	if(ingredients_col1_ABD == undefined) {
		ingredients_col1_ABD = document.createElement('div');

		var title = document.createElement("h3");
		title.innerHTML = "What's in your pantry today?";
		title.style.paddingTop="10%";
		ingredients_col1_ABD.appendChild(title);
		
		var input = document.createElement("input");
		input.style.height="50px";
		input.style.width="60%";
		input.style.fontSize="14pt";
		input.id = 'ingredient';
		input.style.marginTop="30px";
		ingredients_col1_ABD.appendChild(input);

		var list = document.createElement('ul');
		list.id = 'ingList';
		list.style.paddingTop="2%";
		ingredients_col1_ABD.appendChild(list);

		var searchdiv = document.createElement("div");
		searchdiv.setAttribute("class", "container");
		searchdiv.style.marginTop="20px";
		ingredients_col1_ABD.appendChild(searchdiv);

		var button = document.createElement('button');
		button.setAttribute("class", "searchbutton");
		button.id = 'addIngredient';
		button.innerHTML = 'Add Ingredient +';
		button.onclick = function () {
			var text = input.value;
			if (text.length < 1)
				return;
			var li = document.createElement('div');
			list.appendChild(li);

			var label = document.createElement('label');
			label.innerHTML = text;
			li.appendChild(label);

			var deleteButton = document.createElement('button');
			deleteButton.className = 'delete';
			deleteButton.innerHTML = '-';
			deleteButton.onclick = function(){
				list.removeChild(this.parentElement);
			}
			li.appendChild(deleteButton);
			ingredients_search_stage_functions.stageB();
		};
		searchdiv.appendChild(button);
	}
	ingredients_search_col_1.appendChild(ingredients_col1_ABD);
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