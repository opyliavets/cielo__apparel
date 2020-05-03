export class Item {
    constructor(root, itemsClassName, itemName, innerHTML) {
        this.root = root;
        this.itemClassName = itemsClassName;
        this.innHTML = innerHTML;
        this.itemName = itemName;
        this.render();
    }

    render() {
        this.item = document.createElement('li');
        this.item.classList.add(this.itemClassName);
        this.item.classList.add(this.itemName);
        this.item.innerHTML = this.innHTML;
        this.root.append(this.item);
    }
}