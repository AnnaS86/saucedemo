const BaseComponent = require('./../common/base.component');
class LoginFormComponent extends BaseComponent {
    constructor() {
        super('.login-box');
    }

    get usernameInput() {
        return this.rootEl.$('input[data-test="username"]');
    }

    get passwordInput() {
        return this.rootEl.$('input[data-test="password"]');
    }

    get loginButton() {
        return this.rootEl.$('input[data-test="login-button"]');
    }

    get errorMessage() {
        return this.rootEl.$('h3[data-test="error"]');
    }
}

module.exports = LoginFormComponent;