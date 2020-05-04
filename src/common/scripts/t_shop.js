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
        let goodName = `I'm a product`;
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
        );
        //Block with shop goods
        this.innerElement.goods = new Blocks(
            this.innerElement.catalogue.elements[1],
            16,
            'shop__goods',
            'idShopGoods',
            'div'
        );
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[0],
            3,
            'shop__goods_items-1-',
            'idShopGoodsItems-1-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[1],
            3,
            'shop__goods_items-2-',
            'idShopGoodsItems-2-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[2],
            3,
            'shop__goods_items-3-',
            'idShopGoodsItems-3-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[3],
            3,
            'shop__goods_items-4-',
            'idShopGoodsItems-4-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[4],
            3,
            'shop__goods_items-5-',
            'idShopGoodsItems-5-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[5],
            3,
            'shop__goods_items-6-',
            'idShopGoodsItems-6-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[6],
            3,
            'shop__goods_items-7-',
            'idShopGoodsItems-7-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[7],
            3,
            'shop__goods_items-8-',
            'idShopGoodsItems-8-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[8],
            3,
            'shop__goods_items-9-',
            'idShopGoodsItems-9-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[9],
            3,
            'shop__goods_items-10-',
            'idShopGoodsItems-10-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[10],
            3,
            'shop__goods_items-11-',
            'idShopGoodsItems-11-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[11],
            3,
            'shop__goods_items-12-',
            'idShopGoodsItems-12-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[12],
            3,
            'shop__goods_items-13-',
            'idShopGoodsItems-13-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[13],
            3,
            'shop__goods_items-14-',
            'idShopGoodsItems-14-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[14],
            3,
            'shop__goods_items-15-',
            'idShopGoodsItems-15-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;
        this.innerElement.item = new Blocks(
            this.innerElement.catalogue.elements[1].children[15],
            3,
            'shop__goods_items-16-',
            'idShopGoodsItems-16-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = goodName;

    }
}