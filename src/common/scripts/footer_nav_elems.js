export class List {
    constructor(root, typeOfContentAorB, numberOfAelements, nameFirst, nameSecond, nameThird, nameFourth, nameFifth) {
        this.root = root;
        this.type = typeOfContentAorB;
        this.number = numberOfAelements;
        this.name = [nameFirst, nameSecond, nameThird, nameFourth, nameFifth];
        this.render();
    }

    render() {
        if (this.type === 'a') {
            this.element = document.createElement('ul');
            for (let i = 0; i < this.number; i++) {
                this.listEl = document.createElement('li');
                this.listEl.classList.add('footer__list' + [i], 'footer__list');
                this.listEl.textContent = this.name[i];
                this.element.append(this.listEl);
            }
        this.root.append(this.element);

        } else if (this.type === 'b') {
            this.email = document.createElement('input');
            this.email.style.placeholder = 'Enter your email here*';
            this.email.classList.add('footer__email');
            this.button = document.createElement('button');
            this.button.textContent = 'Subscribe now';
            this.button.classList.add('home__button', 'footer__button');
            this.root.append(this.email, this.button);
        }
    }
}