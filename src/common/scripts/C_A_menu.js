import { Item } from './create_menu_element.js'
export class Menu {
    constructor(root, classNameUl, id) {
        this.root = root;  
        this.ulclassname = classNameUl;
        this.ulid = id;
        this.render();
    }

    render() {
        this.ul = document.createElement('ul');
        this.ul.classList.add(this.ulclassname);
        this.ul.id = this.ulid;
        this.root.append(this.ul);
        this.itemHome = new Item (
            this.ul,
            'menu__item',
            'menu__home',
            'HOME'
        );

        this.itemShop = new Item (
            this.ul,
            'menu__item',
            'menu__shop',
            'SHOP'
        );

        this.itemAbout = new Item (
            this.ul,
            'menu__item',
            'menu__about',
            'ABOUT'
        );

        this.itemContact = new Item (
            this.ul,
            'menu__item',
            'menu__contact',
            'CONTACT'
        );

        this.itemLogIn = new Item (
            this.ul,
            'menu__item',
            'menu__login',
            `<div class="menu__login_svg"><svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" role="img">
            
                <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
            
                </svg></div><p class="menu__login_title">Log In</p>`
        );

        this.itemBasket = new Item (
            this.ul,
            'menu__item',
            'menu__basket',
            `<div class="menu__basket_svg"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="132.7 354.3 329.7 134.5" data-hook="svg-icon-6"><path class="m8g_G" d="M414.3 357.3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C341.7 367.4 378.6 347.1 414.3 357.3z"></path><polygon points="275.6 447.1 186.9 447.1 156 365 136.9 365 132.7 354.3 163.1 354.3 194.7 436.4 267.9 436.4 286.9 385.2 198.2 385.2 194.1 374.5 302.4 374.5 "></polygon><rect x="206.6" y="473.3" width="42" height="6"></rect><rect x="165.8" y="439.15" transform="matrix(-0.3557 -0.9346 0.9346 -0.3557 -158.2731 774.512)" width="44.1" height="6"></rect><path d="M196.4 460.2c-7.7 0-14.3 6.5-14.3 14.3 0 7.7 6.5 14.3 14.3 14.3 7.7 0 14.3-6.5 14.3-14.3C210.7 466.8 204.2 460.2 196.4 460.2zM196.4 482.9c-4.8 0-8.3-3.6-8.3-8.3 0-4.8 3.6-8.3 8.3-8.3 4.8 0 8.3 3.6 8.3 8.3C204.8 479.3 201.2 482.9 196.4 482.9z"></path><path d="M261.9 460.2c-7.7 0-14.3 6.5-14.3 14.3 0 7.7 6.5 14.3 14.3 14.3 7.7 0 14.3-6.5 14.3-14.3C276.2 466.8 269.7 460.2 261.9 460.2zM261.9 482.9c-4.8 0-8.3-3.6-8.3-8.3 0-4.8 3.6-8.3 8.3-8.3 4.8 0 8.3 3.6 8.3 8.3C270.3 479.3 266.7 482.9 261.9 482.9z"></path><text x="395" y="423" dy=".35em" text-anchor="middle" class="_1INsc" data-hook="items-count">0</text></svg></div><span class="menu__basket_counter">0</span>`
        );  
        
    }
}

