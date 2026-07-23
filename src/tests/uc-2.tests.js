// UC-2 Handling Latency (Wait Strategies):
// o Login using performance_glitch_user (This user has a built-in delay).
// o Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.
// o Reset the App State via the Burger Menu.
// o Logout.

describe('UC-2 Handling Latency (Wait Strategies)', () => {
    beforeEach(async () => {
         await browser.url('/');
         await $('input[data-test="username"]').setValue('');
         await $('input[data-test="password"]').setValue('');
    });

    it('login with performance_glitch_user, reset app state, and logout successfully', async () => {
        //Autorization
        await $('input[data-test="username"]').setValue('performance_glitch_user');
        await $('input[data-test="password"]').setValue('secret_sauce');
        await $('input[data-test="login-button"]').click();
        //Burger Menu
        await $('button[id="react-burger-menu-btn"]').click();
        //Reset
        await $('a[data-test="reset-sidebar-link"]').click();
        //Logout
        await $('a[data-test="logout-sidebar-link"]').click();
        //Form is Visible
        const loginForm = await $('div[data-test="login-container"]');
        await expect(loginForm).toBeDisplayed();
    });
});