const LoginFormComponent = require('./../components/login-form.component');

class LoginPage {
    constructor() {
        this.loginForm = new LoginFormComponent();
    }

    async open() {
        await browser.url('/');
    }
}

module.exports = LoginPage;