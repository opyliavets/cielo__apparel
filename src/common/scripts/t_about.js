import { Blocks } from './t_main_elements.js';
export class About {
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
            'about__blocks',
            'idAboutPageBlock',
            'div'
        );
        this.innerElement.content = new Blocks(
            this.innerElement.elements[0],
            2,
            'about__intro',
            'idAboutIntro',
            'div'
        );
        this.innerElement.content.elements[0].innerHTML = `
        <h3 class='about__intro_title'>ABOUT</h3>
        <p class='about__intro_paragraph'>I'm a paragraph. Click here to add your</br>
        own text and edit me. It’s easy. Just click</br>
        “Edit Text” or double click me to add your</br>
        own content and make changes to the font.</br>
        Feel free to drag and drop me anywhere you</br>
        like on your page. I’m a great place for you</br>
        to tell a story and let your users know a</br>
        little more about you.</br>
        </br>     ​
        This is a great space to write long text about</br>
        your company and your services. You can use</br>
        this space to go into a little more detail</br>
        about your company. Talk about your team and</br>
        what services you provide. Tell your visitors</br>
        the story of how you came up with the idea for</br>
        your business and what makes you different from</br>
        your competitors. Make your company stand out</br>
        and show your visitors who you are.</p>`;
    }
}