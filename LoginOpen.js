class LoginOpen {
	constructor() {
		this.openLoginLink = document.querySelector('#open-login')
		this.loginContainer = document.querySelector('.container')
		this.closeIcon = document.querySelector('.close-icon')
		this.events()
	}

	//Events

	events() {
		this.openLoginLink.addEventListener("click", () => this.openLogin())
		this.closeIcon.addEventListener("click", () => this.closeLogin())
	}

	openLogin() {
		this.loginContainer.classList.add('container--is-visible')
	}

	closeLogin() {
		this.loginContainer.classList.remove('container--is-visible')
	}
}

new LoginOpen()