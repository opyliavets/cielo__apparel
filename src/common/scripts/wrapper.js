import { Header } from './header.js';
import { Content } from './content.js'
import { Footer } from './footer.js';
import './tabs.js'


export class Wrapper {
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
    }

    render() {
        this.page = document.createElement('div');
        this.page.classList.add(this.className);
        this.root.append(this.page);
        this.header = new Header(this.page, 'header',);
        this.content = new Content(this.page, 'content');
        this.footer = new Footer(this.page, 'footer');
    }
}