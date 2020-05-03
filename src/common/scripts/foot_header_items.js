import { Logo } from './C_A_logo_title.js';
import { Menu } from './C_A_menu.js';
export class FootHeader {
    constructor(root, classNameImg, classNameMenu) {
        this.root = root;
        this.classNameImg = classNameImg;
        this.classNameMenu = classNameMenu;
        this.render();
    }

    render() {
        this.logoBlock = document.createElement('div');
        this.logoBlock.classList.add(this.classNameImg);
        this.root.append(this.logoBlock);
        this.logo = new Logo(
            this.logoBlock,
            'header__logo',
            'header__title'
        );

        this.menuBlock = document.createElement('div');
        this.menuBlock.classList.add(this.classNameMenu);
        this.root.append(this.menuBlock);
        this.menu = new Menu(
            this.menuBlock,
            'menu',
            'idMenu'
        );
        
    }
}