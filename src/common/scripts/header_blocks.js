import { FootHeader } from './foot_header_items.js';
export class topBlock {
    constructor(root, classNameFirst, classNameSecond, advText, advTextclass) {
        this.root = root;
        this.classNameFirst = classNameFirst;
        this.classNameSecond = classNameSecond;
        this.advertText = advText;
        this.advertTextClass = advTextclass;
        this.renderFirst();
        this.renderSecond();
    }

// renderFirst створює верхній блок з рекламним надписом в header
    renderFirst() {
        this.element = document.createElement('div');
        this.innerContent = document.createElement('span');
        this.innerContent.classList.add(this.advertTextClass);
        this.innerContent.textContent = this.advertText;
        this.element.classList.add(this.classNameFirst);
        this.element.append(this.innerContent);
        this.root.append(this.element);
    }
// renderSecond створює нижній блок з лого і меню в header
    renderSecond() {
        this.element = document.createElement('div');
        this.element.classList.add(this.classNameSecond);
        this.root.append(this.element);
        this.innerBlock = new FootHeader(
            this.element,
            'header__logo-block',
            'header__menu-block'
        )
    }
}