var loggedIn = false;

function loginForm() {
    var loginNavItem = document.createElement('li');
    loginNavItem.className = "nav-item dropdown";

    var loginOption = document.createElement('a');
    loginOption.className = "nav-link dropdown-toggle";
    loginOption.href = '#';
    loginOption.id = 'Login';
    loginOption.setAttribute("data-toggle", "dropdown");
    loginOption.setAttribute("aria-haspopup", "true");
    loginOption.setAttribute("aria-expanded", "false");
    loginOption.innerHTML = "Login";
    loginNavItem.appendChild(loginOption);

    var loginFormContainer = document.createElement('div');
    loginFormContainer.className = "dropdown-menu dropdown-menu-right";
    loginFormContainer.id = 'LoginForm';
    loginFormContainer.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
    loginNavItem.appendChild(loginFormContainer);

    var loginForm = document.createElement('form');
    loginForm.className = "form-inline";
    loginFormContainer.appendChild(loginForm);

    var loginUsernameInput = document.createElement('input');
    loginUsernameInput.className = "form-control mr-sm-2";
    loginUsernameInput.type = "text";
    loginUsernameInput.id = "loginUsername";
    loginUsernameInput.placeholder = "Username";
    loginForm.appendChild(loginUsernameInput);

    var loginPasswordInput = document.createElement('input');
    loginPasswordInput.className = "form-control mr-sm-2";
    loginPasswordInput.type = "password";
    loginPasswordInput.placeholder = "Password";
    loginForm.appendChild(loginPasswordInput);

    var loginButton = document.createElement('button');
    loginButton.className = "btn btn-outline-success my-2 my-sm-0";
    loginButton.type = "submit";
    loginButton.style = "margin: auto; background-color: white;";
    loginButton.id = "loginButton";
    loginButton.innerHTML = "Login";
    $(loginButton).click(logIn);
    loginForm.appendChild(loginButton);

    return loginNavItem;
}

function signupForm() {
    var signupNavItem = document.createElement('li');
    signupNavItem.className = "nav-item dropdown";

    var signupOption = document.createElement('a');
    signupOption.className = "nav-link dropdown-toggle";
    signupOption.href = '#';
    signupOption.id = 'Signup';
    signupOption.setAttribute("data-toggle", "dropdown");
    signupOption.setAttribute("aria-haspopup", "true");
    signupOption.setAttribute("aria-expanded", "false");
    signupOption.innerHTML = "Sign Up";
    signupNavItem.appendChild(signupOption);

    var signupFormContainer = document.createElement('div');
    signupFormContainer.className = "dropdown-menu dropdown-menu-right";
    signupFormContainer.id = 'SignupForm';
    signupFormContainer.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
    signupNavItem.appendChild(signupFormContainer);

    var signupForm = document.createElement('form');
    signupForm.className = "form-inline";
    signupFormContainer.appendChild(signupForm);

    var signupUsernameInput = document.createElement('input');
    signupUsernameInput.className = "form-control mr-sm-2";
    signupUsernameInput.type = "text";
    signupUsernameInput.id = "signupUsername";
    signupUsernameInput.placeholder = "Username";
    signupForm.appendChild(signupUsernameInput);

    var signupPasswordInput = document.createElement('input');
    signupPasswordInput.className = "form-control mr-sm-2";
    signupPasswordInput.type = "password";
    signupPasswordInput.placeholder = "Password";
    signupForm.appendChild(signupPasswordInput);

    var signupPasswordInput2 = document.createElement('input');
    signupPasswordInput2.className = "form-control mr-sm-2";
    signupPasswordInput2.type = "password";
    signupPasswordInput2.placeholder = "Confirm Password";
    signupForm.appendChild(signupPasswordInput2);

    var signupEmailInput = document.createElement('input');
    signupEmailInput.className = "form-control mr-sm-2";
    signupEmailInput.type = "text";
    signupEmailInput.id = "signupEmail";
    signupEmailInput.placeholder = "Email";
    signupForm.appendChild(signupEmailInput);

    var signupButton = document.createElement('button');
    signupButton.className = "btn btn-outline-success my-2 my-sm-0";
    signupButton.type = "submit";
    signupButton.style = "margin: auto; background-color: white;";
    signupButton.id = "signupButton";
    signupButton.innerHTML = "Create an Account";
    signupForm.appendChild(signupButton);

    return signupNavItem;
}

function signupLogin() {
    document.getElementById('userInfo').innerHTML = '';
    document.getElementById('userInfo').appendChild(loginForm());
    document.getElementById('userInfo').appendChild(signupForm());
    loggedIn = false;
}


/********** login sign up stuff  ***************/

function logIn(userInputElement=document.getElementById('loginUsername')) {
	var username = userInputElement.value;
	if(username.length < 1)
		return;
    var li = document.createElement('li');
	li.className = 'nav-item dropdown';

	var a = document.createElement('a');
    a.innerHTML = username;
	a.className = 'nav-link';
	a.href = '#';
	li.appendChild(a);

	var li2 = document.createElement('li');
	li2.className = 'nav-item dropdown';

	var a2 = document.createElement('a');
	a2.innerHTML = 'Logout';
	a2.className = 'nav-link';
    a2.href = '#';
    $(a2).click(signupLogin);
	li2.appendChild(a2);

	document.getElementById('userInfo').innerHTML = '';
	document.getElementById('userInfo').appendChild(li);
    document.getElementById('userInfo').appendChild(li2);
    loggedIn = true;
}

signupLogin();