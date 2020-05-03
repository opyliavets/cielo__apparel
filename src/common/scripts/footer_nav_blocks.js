import { Title } from './footer_nav_elems.js';
export class FooterNavBlock {
    constructor(root, classNameBlocks, classNameSpan, classNameBlock, titleName, id) {
        this.root = root;
        this.blocksClassName = classNameBlocks;
        this.classNameSpan = classNameSpan;
        this.classNameBlock = classNameBlock;
        this.titleName = titleName;
        this.id = id;
        this.render();
    }

    render() {
        this.block = document.createElement('div');
        this.block.classList.add(this.blocksClassName);
        this.block.id = this.id;
        this.span = document.createElement('span');
        this.span.classList.add(this.classNameSpan);
        this.span.textContent = this.titleName;
        this.content = document.createElement('div');
        this.content.classList.add(this.classNameBlock);
        this.block.append(this.span, this.content)
        this.root.append(this.block);

    }
}

