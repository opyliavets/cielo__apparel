import { topBlock } from './header_blocks.js';
export class Header {
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
        this.addBlocks();
    }

    render() {
        this.element = document.createElement('header');
        this.element.classList.add(this.className);
        this.root.append(this.element);
    }

    addBlocks() {
        this.topBlock = new topBlock(
            this.element,
            'header__top-block',
            'header__foot-block',
            'Get 15% OFF - Use Coupon Code CIELO',
            'header__top-block_title-style'
        )
    }
}