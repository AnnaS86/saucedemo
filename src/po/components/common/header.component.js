class HeaderComponent {
    get rootEl() {
        return $('div[data-test="primary-header"]');
    }

    get burgerButton() {
        return this.rootEl.$('button[id="react-burger-menu-btn"]');
    }

    get cartLink() {
        return this.rootEl.$('a[data-test="shopping-cart-link"]');
    }

    get cartBadge() {
        return this.rootEl.$('span[data-test="shopping-cart-badge"]');
    }
}

module.exports = HeaderComponent;