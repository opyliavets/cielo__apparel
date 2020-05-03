export class Blocks {
    constructor(root, numberOfBlocks, classNameBlocks, id, typeOfElem) {
        this.root = root;
        this.number = numberOfBlocks;
        this.className = classNameBlocks;
        this.id = id;
        this.type = typeOfElem;
        this.render();
    }

    render() {
        this.elements = new Array(this.number);
        for (let i = 0; i < this.number; i++){
            this.elements[i] = document.createElement(this.type);
            this.elements[i].classList.add(this.className);
            this.elements[i].classList.add(this.className + [i]);
            this.elements[i].id = this.id + [i];
            this.root.append(this.elements[i]);
        }
    }
}


