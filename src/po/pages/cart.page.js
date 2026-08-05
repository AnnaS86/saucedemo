const HeaderComponent = require('./../components/common/header.component');

class CartPage {

    constructor() {
        this.header = new HeaderComponent();
    }

    get checkoutButton() {
        return $('button[data-test="checkout"]');
    }

    get firstNameField() {
        return $('input[data-test="firstName"]');
    }

    get lastNameField() {
        return $('input[data-test="lastName"]');
    }

    get continueButton() {
        return $('input[data-test="continue"]');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    async startCheckout() {
        await this.checkoutButton.click();
    }

    async fillCheckoutInfo(firstName, lastName) {
        await this.firstNameField.setValue(firstName); // Используем новые имена геттеров
        await this.lastNameField.setValue(lastName);
        await this.continueButton.click();
    }
}

module.exports = CartPage;