describe('Saucedemo Login Test', () => {
    it('should open login page', async () => {
        await browser.url('/');
        const title = await browser.getTitle();
        console.log(title);
    });
});