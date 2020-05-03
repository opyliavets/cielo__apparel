import { Blocks } from './t_main_elements.js';
export class Contact {
    constructor(root, className, classNameAll) {
        this.root = root;
        this.className = className;
        this.classNameAll = classNameAll;
        this.render();
    }

    render() {
        this.homePage = document.createElement('div');
        this.homePage.classList.add(this.className);
        this.homePage.classList.add(this.classNameAll);
        this.root.append(this.homePage);
        this.innerElement = new Blocks(
            this.homePage,
            1,
            'contact__blocks',
            'idContactPageBlock',
            'div'
        );
        this.innerElement.content = new Blocks(
            this.innerElement.elements[0],
            2,
            'contact__intro',
            'idContactIntro',
            'div'
        );
        this.innerElement.content.wrapper = new Blocks(
            this.innerElement.content.elements[0],
            1,
            'contact__wrapper',
            'idContactWrapper',
            'div'
        );
        this.innerElement.content.wrapper.elements[0].innerHTML = `
        <h3 class='about__intro_title'>CONTACT</h3>
        <h4 class='contact__intro_header'>VISIT OUR STORES</h4>
        <p class='contact__intro_descrip'>
        Address: 500 Terry Francois Street</br>
        San Francisco, CA 94158</br>      
        Phone: 123-456-7890</br>        
        Email:  info@my-domain.com</br></p>
        <div class='contact__user-data-block'>
        <div class='contact__name-and-email'>
        <input class='contact__input' placeholder='Name*'>
        <input class='contact__input' placeholder='Email*'>
        </div>
        <textarea class='contact__comment' placeholder='Type your message here...'></textarea>
        <button class='contact__subbtn'>Submit</button></div>
        <h4 class='contact__intro_header'>STOCKLISTS</h4>
        <p class='contact__intro_descrip'>
        Store 1</br>
        Address: 500 Terry Francois Street</br>
        San Francisco, CA 94158</br>      
        Phone: 123-456-7890</br>        
        Email:  info@my-domain.com</br></p></br>
        <p class='contact__intro_descrip'>
        Store 2</br>
        Address: 500 Terry Francois Street</br>
        San Francisco, CA 94158</br>      
        Phone: 123-456-7890</br>        
        Email:  info@my-domain.com</br></p></br>
        <p class='contact__intro_descrip'>
        Store 3</br>
        Address: 500 Terry Francois Street</br>
        San Francisco, CA 94158</br>      
        Phone: 123-456-7890</br>        
        Email:  info@my-domain.com</br></p></br>
        <p class='contact__intro_descrip'>
        Store 4</br>
        Address: 500 Terry Francois Street</br>
        San Francisco, CA 94158</br>      
        Phone: 123-456-7890</br>        
        Email:  info@my-domain.com</br></p>
        `;
    }
}