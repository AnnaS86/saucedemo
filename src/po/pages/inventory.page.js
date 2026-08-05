const HeaderComponent = require('./../components/common/header.component');
const SideMenuComponent = require('./../components/common/sidemenu.component');

class InventoryPage {
    constructor() {
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }

    get addBackpackButton() {
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }
}

module.exports = InventoryPage;