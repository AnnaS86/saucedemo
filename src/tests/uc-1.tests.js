const LoginPage = require('./../po/pages/login.page');
const InventoryPage = require('./../po/pages/inventory.page');
const CartPage = require('./../po/pages/cart.page');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

describe('UC-1 Form Validation (Negative Testing)', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.loginForm.usernameInput.setValue('');
        await loginPage.loginForm.passwordInput.setValue('');
    });

    it('Attempt to login with empty Username and Password. Verify error: "Username is required"', async () => {
        await loginPage.loginForm.loginButton.click();
        const errorUsername = await loginPage.loginForm.errorMessage;
        await expect(errorUsername).toHaveText(expect.stringContaining('Username is required'));
    });

     it('Attempt to login with Username only. Verify error: "Password is required"', async () => {
        await loginPage.loginForm.usernameInput.setValue('standard_user');
        await loginPage.loginForm.loginButton.click();
        const errorPassword = await loginPage.loginForm.errorMessage;
        await expect(errorPassword).toHaveText(expect.stringContaining('Password is required'));
    });

     it('Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.', async () => {
        //Autorization
        await loginPage.loginForm.usernameInput.setValue('standard_user');
        await loginPage.loginForm.passwordInput.setValue('secret_sauce');
        await loginPage.loginForm.loginButton.click();
        //Add backpack
        await inventoryPage.addBackpackButton.click();
        await inventoryPage.header.cartLink.click();
        await cartPage.checkoutButton.click();
        //Cart
        await cartPage.firstNameField.setValue('Name');
        await cartPage.lastNameField.setValue('Surname');
        await cartPage.continueButton.click();
        // Error
        const errorPostalCode = await cartPage.errorMessage;
        await expect(errorPostalCode).toHaveText(expect.stringContaining('Postal Code is required'));
    });
});