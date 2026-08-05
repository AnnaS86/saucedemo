const BaseComponent = require('./base.component');
class SideMenuComponent extends BaseComponent {
    constructor() {
        super('.bm-menu-wrap');
    }

    item(param) {
        const selectors = {
            logout: 'a[data-test="logout-sidebar-link"]',
            reset: 'a[data-test="reset-sidebar-link"]'
        };
        return this.rootEl.$(`${selectors[param.toLowerCase()]}`);
    }
}

module.exports = SideMenuComponent;