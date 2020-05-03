export class InnerEl{
    constructor(idOfRoot, numberofBlocks, blocksClass, idOfElem) {
        this.rootId = idOfRoot;
        this.number = numberofBlocks;
        this.className = blocksClass;
        this.id = idOfElem;
        this.render();
    }

    render() {
        this.root = document.getElementById(this.rootID);
        for (let i = 0; i < this.number; i++){
            this.element = document.createElement('div');
            this.element.classList.add(this.className);
            this.element.classList.add(this.className + [i]);
            this.element.id = this.id + [i];
        }
        this.root.append(this.element);
    }
}