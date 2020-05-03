export class Menu {
    constructor(root,classNameSpan, classNameUl, classNameLi) {
        this.root = root;  
        this.spanclassname = classNameSpan;
        this.ulclassname = classNameUl;
        this.liclassname = classNameLi;
        this.render();
    }

    render() {
        this.collection = document.createElement('span');
        this.collection.innerHTML = 'Collection';
        this.collection.classList.add(this.spanclassname);
        this.ul = document.createElement('ul');
        this.ul.classList.add(this.ulclassname);
        this.collectionBlock = document.createElement('div');
        this.collectionBlock.classList.add('catalogue__collection-block');
        this.collectionBlock.append(this.collection, this.ul);
        this.price = document.createElement('span');
        this.price.innerHTML = 'Price';
        this.price.classList.add(this.spanclassname);
        this.priceContent = document.createElement('div');
        this.priceContent.classList.add('catalogue__price-content');
        this.priceBlock = document.createElement('div');
        this.priceBlock.classList.add('catalogue__price-block');
        this.priceBlock.append(this.price, this.priceContent);
        this.color = document.createElement('span');
        this.color.innerHTML = 'Color';
        this.color.classList.add(this.spanclassname);
        this.colorContent = document.createElement('div');
        this.colorContent.classList.add('catalogue__color-content');
        this.colorBlock = document.createElement('div');
        this.colorBlock.classList.add('catalogue__color-block');
        this.colorBlock.append(this.color, this.colorContent);
        this.size = document.createElement('span');
        this.size.innerHTML = 'Size';
        this.size.classList.add(this.spanclassname);
        this.sizeContent = document.createElement('div');
        this.sizeContent.classList.add('catalogue__size-content');
        this.sizeBlock = document.createElement('div');
        this.sizeBlock.classList.add(`catalogue__size-block`);
        this.sizeBlock.append(this.size, this.sizeContent);

        this.root.append(this.collectionBlock, this.priceBlock, this.colorBlock, this.sizeBlock);
        this.li = new createCollection(
            this.ul,
            'catalogue__list',
            'hidden'
        );
        this.range = new createPrice(
            this.priceContent,
            'catalogue__range',
            'hidden'
        );
        this.colors = new createColors(
            this.colorContent,
            'catalogue__colors',
            'hidden'
        );
        this.sizes = new createSize(
            this.sizeContent,
            'catalogue__sizes',
            'hidden'
        );

      
    }
}

class createCollection{
    constructor(root, classNameLi, classHidden) {
        this.root = root;
        this.liclassname = classNameLi;
        this.hiddenclass = classHidden;
        this.render();
    }
        render(){
            this.all = document.createElement('li');
            this.all.innerHTML = 'All';
            this.all.classList.add(this.liclassname);
            this.sportbras = document.createElement('li');
            this.sportbras.innerHTML = 'Sport bras';
            this.sportbras.classList.add(this.liclassname);
            this.leggins = document.createElement('li');
            this.leggins.innerHTML = 'Leggins';
            this.leggins.classList.add(this.liclassname);
            this.shirts = document.createElement('li');
            this.shirts.innerHTML = 'Shirts';
            this.shirts.classList.add(this.liclassname);
            this.shorts = document.createElement('li');
            this.shorts.innerHTML = 'Shorts';
            this.shorts.classList.add(this.liclassname);
            this.newarrivals = document.createElement('li');
            this.newarrivals.innerHTML = 'New Arrivals';
            this.newarrivals.classList.add(this.liclassname);
            this.bestsellers = document.createElement('li');
            this.bestsellers.innerHTML = 'Best Sellers';
            this.bestsellers.classList.add(this.liclassname);
            this.root.classList.add(this.hiddenclass);
            this.root.append(this.all, this.sportbras, this.leggins, this.shirts, this.shorts, this.newarrivals, this.bestsellers);
        };

}
class createPrice{
    constructor(root, classNameInput, classHidden) {
        this.root = root;
        this.classNameInput = classNameInput;
        this.hiddenclass = classHidden;
        this.render();
    }
    
    render() {
        this.input = document.createElement('input');
        this.input.type = 'range';
        this.input.max = '40';
        this.input.min = '0';
        this.input.step = '1';
        this.input.value = '1';
        this.input.classList.add(this.classNameInput);
        this.root.classList.add(this.hiddenclass);
        this.root.append(this.input);
    }
}

class createColors{
    constructor(root, classNameColors, classHidden) {
        this.root = root;
        this.classNameColors = classNameColors;
        this.hiddenclass = classHidden;
        this.render();        
    }

    render() {
        let colors = [];
        for (let i = 0; i < 12; i++){
            colors[i] = document.createElement('div');
            colors[i].classList.add(this.classNameColors, 'color#' + [i]);
            this.root.classList.add(this.hiddenclass);
            this.root.append(colors[i]);
        }
        
    }
}

class createSize{
    constructor(root, classNameElement, classHidden) {
        this.root = root;
        this.classNameEl = classNameElement;
        this.hiddenclass = classHidden;
        this.render()
    }
    
    render() {
        this.small = document.createElement('input');
        this.small.type = 'checkbox';
        this.small.value = 'Small';
        this.small.name = 'small';
        this.small.id = 'small';
        this.small.classList.add(this.classNameEl);
        this.medium = document.createElement('input');
        this.medium.type = 'checkbox';
        this.medium.value = 'Medium';
        this.medium.name = 'medium';
        this.medium.id = 'medium';
        this.medium.classList.add(this.classNameEl);
        this.large = document.createElement('input');
        this.large.type = 'checkbox';
        this.large.value = 'Large';
        this.large.name = 'large';
        this.large.id = 'large';
        this.large.classList.add(this.classNameEl);        
        this.root.append(this.small, this.medium, this.large);
        this.root.classList.add(this.hiddenclass);
        this.addLabel();       

    }

    addLabel(){
        this.checkBoxArray = [this.small, this.medium, this.large];
        for (let i = 0; i < this.checkBoxArray.length; i++){
            let label = document.createElement('label');
            label.setAttribute('for', this.checkBoxArray[i].name);
            label.innerHTML = this.checkBoxArray[i].value;
            this.checkBoxArray[i].after(label);
        }
    }

}

