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
        await $('button[id="react-burger-menu-btn"]').waitForDisplayed({ timeout: 6000 });
        //Burger Menu
        await $('button[id="react-burger-menu-btn"]').click();
        await $('a[data-test="reset-sidebar-link"]').waitForDisplayed({ timeout: 6000 });
        //Reset
        await $('a[data-test="reset-sidebar-link"]').click();
        const shoppingCartBadge = await $('span[data-test="shopping-cart-badge"]');
        await expect(shoppingCartBadge).not.toBeDisplayed();
        //Logout
        await $('a[data-test="logout-sidebar-link"]').click();
        //Form is Visible
        const loginForm = await $('div[data-test="login-container"]');
        await expect(loginForm).toBeDisplayed();
    });
});