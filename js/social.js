var social_stage = {
    stage0: {
		col1: "100%",
	},
	stage1: {
		col1: "30%",
		col2: "70%"
    },
    stage2: {
		col1: "30%",
        col2: "15%",
        col3: "55%"
    }
}

var currentStage = social_stage.stage1;
var social_col_1; 
var social_col_2;
var social_col_3;
var social_page;
var queue = true;

var social_stage_functions = {
    stageC: function() {
		currentStage = social_stage.stage2;
		if(social_col_3 == undefined) {
			social_col_3 = generateColumns();
			social_page.append(social_col_3.parentElement);
			social_populate_col_3_recipe();
			changeTheme(currentTheme);
        } else {
            $(social_col_3).css('display', 'block');
        }
        $(social_col_1.parentElement).css("width", currentStage.col1);
        $(social_col_2.parentElement).css("width", currentStage.col2);
        $(social_col_3.parentElement).css("width", currentStage.col3);
		$('#social_search').click(social_stage_functions.stageB);
	},
    // social search splash
	stageB: function() {
		currentStage = social_stage.stage1;
		if(social_col_1 == undefined) {
			social_col_1 = generateColumns();
			social_page.append(social_col_1.parentElement);
			social_populate_col_1_menu();
			changeTheme(currentTheme);
        }
        if(social_col_2 == undefined){
			social_col_2 = generateColumns();
            social_page.append(social_col_2.parentElement);
            social_populate_col_1_menu();
            social_populate_col_2_profile();
			//put populate col 2 here
			changeTheme(currentTheme);
        }
        if(social_col_3 != undefined) {
            $(social_col_3).css('display', 'none');
        }
        $(social_col_1.parentElement).css("width", currentStage.col1);
        $(social_col_2.parentElement).css("width", currentStage.col2);
		$('#social_search').click(social_stage_functions.stageB);
	},

	// social search splash
	stageA: function() {
		currentStage = social_stage.stage0;
        if(loggedIn) {
            social_stage_functions.stageB();
            return;
        }

        if(social_col_1 == undefined) {
			social_col_1 = generateColumns();
            social_page.append(social_col_1.parentElement);
        }
        social_populate_col_1_splash();
        changeTheme(currentTheme);
        $(social_col_1.parentElement).css("width", currentStage.col1);
	}
}
var social_friends_page;
var social_recipes_page;
var social_profile_page;


function social_friends_page_hide() {
    if(social_friends_page != undefined)
        $(social_friends_page).css("display", "none");
}
function social_recipes_page_hide() {
    if(social_recipes_page != undefined)
        $(social_recipes_page).css("display", "none");
}
function social_profile_page_hide() {
    if(social_profile_page != undefined)
        $(social_profile_page).css("display", "none");
}
function social_populate_col_3_recipe() {
    social_col_3.innerHTML = '';

    var recipeImg = document.createElement('img');
    recipeImg.src = "img/cooknook_recipePage.png";
    recipeImg.style = "margin: 25px 0px 25px 0px; max-width:100%;"
    social_col_3.appendChild(recipeImg);

    $('.recipe-box').css('width', 'auto');
    $('.recipe-box').removeClass('text-left');
    $('.recipe-box').addClass('text-center');

    $('.recipe_img').css('float', 'none');
    $('.recipe_img').css('margin', '5px');
}
function social_populate_col_2_recipes() {
    social_friends_page_hide();
    social_profile_page_hide();
    if(social_recipes_page == undefined) {
        social_recipes_page = document.createElement('div');
        social_col_2.appendChild(social_recipes_page);

        var manage = document.createElement('div');
        manage.className = " text-right";
        social_recipes_page.appendChild(manage);

        var manage_anchor = document.createElement('a');
        manage_anchor.innerHTML = 'Manage';
        manage_anchor.href = '#';
        manage.appendChild(manage_anchor);

        var title = document.createElement("h3");
        title.innerHTML = "My Recipes";
        social_recipes_page.appendChild(title);

        var searchFor = document.createElement('div');
        searchFor.className = "container";
        social_recipes_page.appendChild(searchFor);

        var searchInput = document.createElement('input');
        searchInput.type = "text";
        searchInput.style = "width: 85%; border:none; background-color:" + social_search_theme.secondaryColor;
        searchInput.placeholder = " Find a recipe...";
        searchFor.appendChild(searchInput);

        var searchButton = document.createElement('button');
        searchButton.type ="button";
        searchButton.style = "border-radius:7px; margin: 10px; border:none; background-color:" + social_search_theme.secondaryColor + ";color:" + social_search_theme.textColor;
        searchButton.innerHTML = "Search";
        searchFor.appendChild(searchButton);

        social_recipes_page.appendChild(document.createElement("hr"));

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
            $(recipe_box).click(social_stage_functions.stageC);
            recipe_box.style = "width: 45%;  margin: 10px; background-color: white; float: left; padding: 10px 0px 10px 0px; border-radius: 7px;"
            social_recipes_page.appendChild(recipe_box);

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
            recipe_name.style = 'color: ' + social_search_theme.secondaryColor ;
            recipe_name.innerHTML = recipe.name;
            recipe_description.appendChild(recipe_name);

            var ratings = document.createElement('img');
            ratings.src = recipe.ratings;
            $(ratings).css('max-width', '100px');
            // ratingsTitle.style = 'color: ' + social_search_theme.secondaryColor ;
            // ratingsTitle.innerHTML = 'Last Cooked:'
            recipe_description.appendChild(ratings);

            recipe_description.appendChild(document.createElement('br'));

            var btn = document.createElement('img');
            // btn.style = 'color: ' + social_search_theme.secondaryColor ;
            $(btn).css('max-width', '100%');
            btn.src = 'img/ingr_buttons.jpg';
            recipe_description.appendChild(btn);


        }
    }
    else {
        $(social_recipes_page).css("display", "block");

        $('.recipe-box').css('width', '45%');
        $('.recipe-box').addClass('text-left');
        $('.recipe-box').removeClass('text-center');

        $('.recipe_img').css('float', 'left');
        $('.recipe_img').css('margin', '0px 20px 0px 10px;');
    }
}
function social_populate_col_2_friends() {
    social_recipes_page_hide();
    social_profile_page_hide();
    if(social_friends_page == undefined) {
        social_friends_page = document.createElement('div');
        social_col_2.appendChild(social_friends_page);

        var manage = document.createElement('div');
        manage.className = " text-right";
        social_friends_page.appendChild(manage);

        var manage_anchor = document.createElement('a');
        manage_anchor.innerHTML = 'Manage';
        manage_anchor.href = '#';
        manage.appendChild(manage_anchor);

        var title = document.createElement("h3");
        title.innerHTML = "Friends";
        social_friends_page.appendChild(title);

        var searchFor = document.createElement('div');
        searchFor.className = "container";
        social_friends_page.appendChild(searchFor);

        var searchInput = document.createElement('input');
        searchInput.type = "text";
        searchInput.style = "width: 85%; border:none; background-color:" + social_search_theme.secondaryColor;
        searchInput.placeholder = " Find a friend...";
        searchFor.appendChild(searchInput);

        var searchButton = document.createElement('button');
        searchButton.type ="button";
        searchButton.style = "border-radius:7px; margin: 10px; border:none; background-color:" + social_search_theme.secondaryColor + ";color:" + social_search_theme.textColor;
        searchButton.innerHTML = "Search";
        searchFor.appendChild(searchButton);

        var hr = document.createElement("hr");
        social_friends_page.appendChild(hr);

        var friends = [
            {
                "name": "Minda",
                "lastCooked": "Chicken Wings",
                "src": "https://i.pinimg.com/736x/f8/d8/7e/f8d87ee862e85909f7848b1b51bddb6b--wedding-planning-ideas-wedding-tips.jpg"
            },
            {
                "name": "Joanne",
                "lastCooked": "Chicken Wings",
                "src": "https://www.bethatwoman.net/wp-content/uploads/2017/07/older-lady-100x100.jpg"
            },
            {
                "name": "Glinda",
                "lastCooked": "Chicken Feet",
                "src": "https://media.creativemornings.com/uploads/user/avatar/250180/small_Foto.JPG"
            },
            {
                "name": "Jason",
                "lastCooked": "Chicken Feet",
                "src": "https://i.pinimg.com/236x/0a/b9/95/0ab99562690beee79b59fbd5b64dc2b0.jpg"
            },
            {
                "name": "John",
                "lastCooked": "Chicken Tenders",
                "src": "https://media.creativemornings.com/uploads/user/avatar/281341/small_14086230_10101121043447475_4216168292196128320_o.jpg"
            },
            {
                "name": "Linda",
                "lastCooked": "Chicken Tenders",
                "src": "http://pinkhope.org.au/wp-content/uploads/2017/07/shutterstock_178971761-100x100.jpg"
            },
            {
                "name": "Belinda",
                "lastCooked": "Chicken Soup",
                "src": "https://foodal.com/wp-content/uploads/2015/08/Lori-Jo-Hendrix-100x100.jpg"
            },


            {
                "name": "Jenny",
                "lastCooked": "Chicken Soup",
                "src": "https://www.ecouterre.com/wp-content/uploads/2017/01/2017-deanna-clark-100x100.jpg"
            },

        ]

        for (var friend of friends) {
            var friend_box = document.createElement('div');
            friend_box.className = 'container text-left';
            friend_box.style = "width: 45%;  margin: 10px; background-color: white; float: left; padding: 10px 0px 10px 0px; border-radius: 7px;"
            social_friends_page.appendChild(friend_box);

            var friend_img = document.createElement('img');
            friend_img.width = 100;
            friend_img.height = 100;
            friend_img.src = friend.src;
            friend_img.style = 'float:left; margin: 0px 20px ';
            friend_box.appendChild(friend_img);

            var friend_description = document.createElement('div');
            friend_description.style = 'float:left;';
            friend_box.appendChild(friend_description);
            
            var friend_name = document.createElement('h6');
            friend_name.style = 'color: ' + social_search_theme.secondaryColor ;
            friend_name.innerHTML = friend.name;
            friend_description.appendChild(friend_name);

            // var hr = document.createElement("hr")
            // hr.size = 5;
            // friend_description.appendChild(hr);

            var lastCookedTitle = document.createElement('div');
            lastCookedTitle.style = 'color: ' + social_search_theme.mainColor ;
            lastCookedTitle.innerHTML = 'Last Cooked:'
            friend_description.appendChild(lastCookedTitle);

            var lastCooked = document.createElement('div');
            lastCooked.style = 'color: ' + social_search_theme.mainColor ;
            lastCooked.innerHTML = friend.lastCooked;
            friend_description.appendChild(lastCooked);


        }
    } else 
        $(social_friends_page).css("display", "block");
}
function social_populate_col_2_profile() {
    social_recipes_page_hide();
    social_friends_page_hide();

    if(social_profile_page == undefined) {
        social_profile_page = document.createElement('div');
        social_col_2.appendChild(social_profile_page);

        var title = document.createElement("h3");
        title.innerHTML = "Hi, Kelly!";
        social_profile_page.appendChild(title);

        var hr = document.createElement("hr");
        social_profile_page.appendChild(hr);
        
        var bio_title = document.createElement("h5");
        bio_title.innerHTML = "Biography";
        bio_title.style = 'width: 100%;';
        social_profile_page.appendChild(bio_title);

        var bio = document.createElement("textarea");
        bio.placeholder = "Let the world know who you are...";
        bio.style = 'width: 100%; min-height: 100px;';
        social_profile_page.appendChild(bio);

        var pref_shop = document.createElement('div');
        pref_shop.style = 'width: 100%; margin: 20px 0px 20px 0px;'
        social_profile_page.appendChild(pref_shop);

        var pref = document.createElement('form');
        pref.className = 'container text-left';
        pref.style = 'float: left; width: 50%; ';
        pref_shop.appendChild(pref);

        var shop = document.createElement('form');
        shop.className = 'container text-left';
        shop.style = 'float: left; width: 50%;';
        pref_shop.appendChild(shop);

        var pref_title = document.createElement('h6');
        pref_title.innerHTML = 'My Dietary Preferences';
        pref.appendChild(pref_title);
        pref.appendChild(document.createElement("hr"));

        var shop_title = document.createElement('h6');
        shop_title.innerHTML = 'My Shopping List';
        shop.appendChild(shop_title);
        shop.appendChild(document.createElement("hr"));

        var dietOptions = ['Pescatarian', 'Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Shellfish-free'];
        for(var dOption of dietOptions) {
            var div = document.createElement('div');
            div.style = "width: 50%;";
            pref.appendChild(div);

            var option = document.createElement('input');
            option.type = 'checkbox';
            div.appendChild(option);

            var label = document.createElement('label');
            pref.appendChild(label);
            label.innerHTML = '&nbsp;&nbsp;&nbsp;' + dOption;
            label.htmlFor = option;
            div.appendChild(label);
        }

        // TODO: anchor element?
        var pref_others = document.createElement('div');
        pref_others.style = 'width: 50%';
        pref_others.innerHTML = '<i><u>Add a preference</u></i>';
        pref.appendChild(pref_others);


        var shoppingList = {
            'Guacamole': ['Salsa', 'Lemon', 'Onion'],
            'Wrap': ['Tortilla', 'Lettuce'],
        }

        for(var recipe in shoppingList) {

            var panel_group = document.createElement('div');
            panel_group.style = 'padding: 5px;'
            panel_group.className = 'panel-group'
            shop.appendChild(panel_group);

            var panel = document.createElement('panel');
            panel.className = 'panel panel-default';
            panel_group.appendChild(panel);

            var panel_heading = document.createElement('div');
            panel_heading.className = 'panel-heading';
            panel.appendChild(panel_heading);

            var panel_title = document.createElement('h7');
            panel_title.className = 'panel-title';
            panel_title.style = 'background-color: ' + social_search_theme.secondaryColor + '; border-radius:7px; border: 5px; padding: 5px; margin: 20px 0px 20px 0px'

            panel_heading.appendChild(panel_title);

            var collapse_title = document.createElement('a');
            collapse_title.style = 'color: white;'
            collapse_title.setAttribute('data-toggle', "collapse");
            collapse_title.href = '#' + recipe.replace(' ', '') + '_list';
            collapse_title.innerHTML = recipe;
            panel_title.appendChild(collapse_title);

            var panel_collapse = document.createElement('div');
            panel_collapse.id = recipe.replace(' ', '') + '_list';
            panel_collapse.className = "panel-collapse collapse show";
            panel.appendChild(panel_collapse);

            var list_group = document.createElement('ul');
            list_group.className = 'list-group';
            panel_collapse.appendChild(list_group);

            for(var ingredient of shoppingList[recipe]) {
                var ingredientName = document.createElement('li');
                ingredientName.innerHTML = ingredient;
                panel_collapse.appendChild(ingredientName);
            }
        }
    }
    else 
        $(social_profile_page).css("display", "block");
}
function social_populate_col_1_signup() {
    social_col_1.innerHTML = '';

    var backToLogin = document.createElement('div');
    backToLogin.className = " text-left";
    social_col_1.appendChild(backToLogin);

    var backToLogin_anchor = document.createElement('a');
    backToLogin_anchor.innerHTML = 'Back to Login';
    backToLogin_anchor.href = '#';
    backToLogin.appendChild(backToLogin_anchor);
    $(backToLogin_anchor).click(social_populate_col_1_splash);

    var header1 = document.createElement('h1');
    header1.innerHTML = "Create My Account";
    social_col_1.appendChild(header1);

    social_col_1.appendChild(document.createElement('hr'));

    var signupForm = document.createElement('form');
    social_col_1.appendChild(signupForm);

    var loginUsernameInput = document.createElement('input');
    loginUsernameInput.className = "form-control mr-sm-2";
    loginUsernameInput.type = "text";
    loginUsernameInput.style = "margin: 10px 0px;";
    loginUsernameInput.placeholder = "Username";
    signupForm.appendChild(loginUsernameInput);

    var emailInput = document.createElement('input');
    emailInput.className = "form-control mr-sm-2";
    emailInput.type = "text";
    emailInput.style = "margin: 10px 0px;";
    emailInput.placeholder = "Email Address";
    signupForm.appendChild(emailInput);

    var loginPasswordInput1 = document.createElement('input');
    loginPasswordInput1.className = "form-control mr-sm-2";
    loginPasswordInput1.style = "margin: 10px 0px;";
    loginPasswordInput1.type = "password";
    loginPasswordInput1.placeholder = "Password";
    signupForm.appendChild(loginPasswordInput1);

    var loginPasswordInput2 = document.createElement('input');
    loginPasswordInput2.className = "form-control mr-sm-2";
    loginPasswordInput2.style = "margin: 10px 0px;";
    loginPasswordInput2.type = "password";
    loginPasswordInput2.placeholder = "Confirm Password";
    signupForm.appendChild(loginPasswordInput2);

    var signupButton = document.createElement('button');
    // loginButton.className = "btn btn-outline-success my-2 my-sm-0";
    signupButton.type = "submit";
    signupButton.style = "width: 100%; border-radius:15px; margin: 10px 0px 10px 0px; background-color: " + social_search_theme.secondaryColor;;
    // loginButton.id = "loginButton";
    signupButton.innerHTML = "Sign Up";
    $(signupButton).click(function(){
        if(loginUsernameInput.value.length > 0
            && loginPasswordInput1.value.length > 0
            && loginPasswordInput1.value == loginPasswordInput2.value 
            && emailInput.value.length > 0) {
                logIn(loginUsernameInput);
                social_stage_functions.stageB();
            }
    });
    signupForm.appendChild(signupButton);

}
function social_populate_col_1_splash() {
    social_col_1.innerHTML = '';
    var header1 = document.createElement('h1');
    header1.innerHTML = "Log In";
    social_col_1.appendChild(header1);

    social_col_1.appendChild(document.createElement('hr'));

    var loginForm = document.createElement('form');
    social_col_1.appendChild(loginForm);

    var loginUsernameInput = document.createElement('input');
    loginUsernameInput.className = "form-control mr-sm-2";
    loginUsernameInput.type = "text";
    loginUsernameInput.style = "margin: 10px 0px;";
    loginUsernameInput.placeholder = "Username";
    loginForm.appendChild(loginUsernameInput);

    var loginPasswordInput = document.createElement('input');
    loginPasswordInput.className = "form-control mr-sm-2";
    loginPasswordInput.style = "margin: 10px 0px;";
    loginPasswordInput.type = "password";
    loginPasswordInput.placeholder = "Password";
    loginForm.appendChild(loginPasswordInput);

    var forgot = document.createElement('div');
    loginForm.appendChild(forgot);

    var forgot_anchor = document.createElement('a');
    forgot_anchor.innerHTML = 'Forgot username or password?';

    var loginButton = document.createElement('button');
    // loginButton.className = "btn btn-outline-success my-2 my-sm-0";
    loginButton.type = "submit";
    loginButton.style = "width: 100%; border-radius:15px; margin: 10px 0px 10px 0px; background-color: " + social_search_theme.secondaryColor;;
    // loginButton.id = "loginButton";
    loginButton.innerHTML = "Login";
    $(loginButton).click(function(){
        logIn(loginUsernameInput);
        social_stage_functions.stageB();
    });
    loginForm.appendChild(loginButton);

    var or = document.createElement('div');
    or.innerHTML = '<i>or</i>'
    loginForm.appendChild(or);
    
    var signupButton = document.createElement('button');
    // loginButton.className = "btn btn-outline-success my-2 my-sm-0";
    signupButton.type = "button";
    signupButton.style = "width: 100%; border-radius:15px; margin: 10px 0px 10px 0px; background-color: " + social_search_theme.secondaryColor;;
    // loginButton.id = "loginButton";
    signupButton.innerHTML = "Create An Account";
    $(signupButton).click(function(){
        social_populate_col_1_signup();
    });
    loginForm.appendChild(signupButton);

}
function social_populate_col_1_menu() {
    social_col_1.innerHTML = '';
	// var title = document.createElement("h5");
    // title.innerHTML = "Granny Smith";
    // social_col_1.appendChild(title);

    var profilePic = document.createElement('img');
    profilePic.width = 250;
    profilePic.height = 250;
    profilePic.src = "https://bdn-data.s3.amazonaws.com/uploads/2014/02/10005301_H11898131-250x250.jpg";
    profilePic.style = "margin: 25px 0px 25px 0px"
    social_col_1.appendChild(profilePic);

    var button1 = document.createElement('button');
    button1.style = "width: 100%; border-radius:7px; border:none; margin: 5px 0px 5px 0px; background-color:" + social_search_theme.secondaryColor + ";color:" + social_search_theme.textColor;
    button1.innerHTML = "My Profile";
    button1.className = "social-menu-btn";
    button1.onclick = social_populate_col_2_profile;
    social_col_1.appendChild(button1);

    var button2 = document.createElement('button');
    button2.style = "width: 100%; border-radius:7px; border:none; margin: 5px 0px 5px 0px; background-color:" + social_search_theme.secondaryColor + ";color:" + social_search_theme.textColor;
    button2.innerHTML = "My Friends";
    button2.className = "social-menu-btn";
    button2.onclick = social_populate_col_2_friends;
    social_col_1.appendChild(button2);

    var button3 = document.createElement('button');
    button3.style = "width: 100%; border-radius:7px; border:none; margin: 5px 0px 5px 0px; background-color:" + social_search_theme.secondaryColor + ";color:" + social_search_theme.textColor;
    button3.innerHTML = "My Recipes";
    button2.className = "social-menu-btn";
    button3.onclick = social_populate_col_2_recipes;
    social_col_1.appendChild(button3);

    $('.social-menu-btn').click(function(){
        social_stage_functions.stageB();
    });
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
    if(loggedIn)
        social_stage_functions.stageA();

    $(social_page).css("display", "block");
}