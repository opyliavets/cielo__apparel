import { FooterBlock } from './footer_blocks.js'
export class Footer {
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
        this.addBlocks();
    }

    render() {
        this.footer = document.createElement('footer');
        this.footer.classList.add(this.className);
        this.root.append(this.footer);
    }

    addBlocks() {
        this.block = new FooterBlock(
            this.footer,
            'footer__top-block',
            'footer__copyrights-block',
            '© 2023 by Cielo Apparel. Proudly created with Wix.com',
            'copyright-style'
        )
    }
}