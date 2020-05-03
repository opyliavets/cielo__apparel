import { Blocks } from './t_main_elements.js';
import { Menu } from './shop__menu.js';
export class Shop {
    constructor(root, className, classNameAll) {
        this.root = root;
        this.className = className;
        this.classNameAll = classNameAll;
        this.render();
    }

    render() {
        this.homePage = document.createElement('div');
        this.homePage.classList.add(this.className);
        this.homePage.classList.add(this.classNameAll);
        this.root.append(this.homePage);
        this.innerElement = new Blocks(
            this.homePage,
            2,
            'shop__blocks',
            'idShopPageBlock',
            'div'
        );
        this.innerElement.content = new Blocks(
            this.innerElement.elements[0],
            2,
            'shop__intro',
            'idShopIntro',
            'div'
        );
        this.innerElement.content.elements[0].innerHTML =
            `<h3 class='about__intro_title shop__title'>SHOP</h3>`;
        
        this.innerElement.catalogue = new Blocks(
            this.innerElement.elements[1],
            2,
            'shop__catalogue',
            'idShopShop',
            'div'
            
        );
        this.innerElement.catalogue.elements[0].innerHTML = `<h3 class='catalogue__filterBy'>Filter by</h3>`;
        this.innerElement.shopMenu = new Blocks(
            this.innerElement.catalogue.elements[0],
            1,
            'catalogue__filters',
            'idCatalogueFilters',
            'div'
        );
        this.innerElement.catalogue.menu = new Menu(
            this.innerElement.shopMenu.elements[0],
            'catalogue__span',
            'catalogue__ul',
            'catalogue__li'
        )
    }
}