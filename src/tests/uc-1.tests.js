// UC-1 Form Validation (Negative Testing):
// o Attempt to login with empty Username and Password. Verify error: "Username is required".
// o Attempt to login with Username only. Verify error: "Password is required".
// o Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.

describe('UC-1 Form Validation (Negative Testing)', () => {
    beforeEach(async () => {
         await browser.url('/');
         await $('input[data-test="username"]').setValue('');
         await $('input[data-test="password"]').setValue('');
    });

    it('Attempt to login with empty Username and Password. Verify error: "Username is required"', async () => {
        await $('input[data-test="login-button"]').click();
        const errorUsername = await $('h3[data-test="error"]');
        await expect(errorUsername).toHaveText(expect.stringContaining('Username is required'));
    });

     it('Attempt to login with Username only. Verify error: "Password is required"', async () => {
        await $('input[data-test="username"]').setValue('standard_user');
        await $('input[data-test="login-button"]').click();
        const errorPassword = await $('h3[data-test="error"]');
        await expect(errorPassword).toHaveText(expect.stringContaining('Password is required'));
    });

    //  it('Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.', async () => {

    // });
});
