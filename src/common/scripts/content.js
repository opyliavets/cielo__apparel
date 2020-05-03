import { Main } from './t_main.js';
import { Shop } from './t_shop.js'
import { About } from './t_about.js'
import { Contact } from './t_contact.js'
export class Content {
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
    }

    render() {
        this.page = document.createElement('div');
        this.page.classList.add(this.className);
        this.homePage = new Main(this.page, 'home', 'tab');
        this.shopPage = new Shop(this.page, 'shop', 'tab');
        this.aboutPage = new About(this.page, 'about', 'tab');
        this.contactPage = new Contact(this.page, 'contact', 'tab');
        this.root.append(this.page);
    }
}