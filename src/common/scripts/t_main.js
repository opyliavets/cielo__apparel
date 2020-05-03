import { Blocks } from './t_main_elements.js';

export class Main {
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
//Here will be addition of all blocks for 1 PAGE "Home"
        this.innerElement = new Blocks(
            this.homePage,
            6,
            'home__blocks',
            'idHomePageBlock',
            'div'
        );
//First introduction block on home page
        this.innerElement.content = new Blocks(
            this.innerElement.elements[0],
            2,
            'home__intro',
            'idHomeIntro',
            'div'
        );

        this.innerElement.title = new Blocks(
            this.innerElement.elements[0].children[0],
            1,
            'home__title',
            'idHomeTitle',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'Introducing Your New Workout Wardrobe';

        this.innerElement.button = new Blocks(
            this.innerElement.elements[0].children[0],
            1,
            'home__button',
            'idHomeButton',
            'button'
        );
        this.innerElement.button.elements[0].innerHTML = 'Start Shopping';
// Second block - SECTIONS
        this.innerElement.content = new Blocks(
            this.innerElement.elements[1],
            3,
            'home__sections',
            'idHomeSectio',
            'div'
        );
        this.innerElement.title = new Blocks(
            this.innerElement.elements[1].children[0],
            1,
            'home__sections_titles',
            'idHomeCieloStory',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'The Cielo Story';

        this.innerElement.title = new Blocks(
            this.innerElement.elements[1].children[1],
            1,
            'home__sections_titles',
            'idHomeViewCollect',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'View Our Collection';

        this.innerElement.title = new Blocks(
            this.innerElement.elements[1].children[2],
            1,
            'home__sections_titles',
            'idHomeJoinOurCom',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'Join Our Community';
// Third block - LATEST ARRIVALS
        this.innerElement.content = new Blocks(
            this.innerElement.elements[2],
            1,
            'home__latest',
            'idHomeLatest',
            'div'
        );
        this.innerElement.title = new Blocks(
            this.innerElement.elements[2].children[0],
            1,
            'home__latest_title',
            'idHomeLatestTitle',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'Latest arrivals';
// Fourth block - LATEST ARRIVALS - ITEMS - GOODS
        this.innerElement.content = new Blocks(
            this.innerElement.elements[3],
            4,
            'home__goods',
            'idHomeGoods',
            'div'
        );
        this.innerElement.item = new Blocks(
            this.innerElement.elements[3].children[0],
            3,
            'home__goods_items-1-',
            'idHomeGoodsItems-1-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = 'Running Top';
        this.innerElement.item = new Blocks(
            this.innerElement.elements[3].children[1],
            3,
            'home__goods_items-2-',
            'idHomeGoodsItems-2-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = 'Running Shorts';
        this.innerElement.item = new Blocks(
            this.innerElement.elements[3].children[2],
            3,
            'home__goods_items-3-',
            'idHomeGoodsItems-3-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = 'Seamless Bra';
        this.innerElement.item = new Blocks(
            this.innerElement.elements[3].children[3],
            3,
            'home__goods_items-4-',
            'idHomeGoodsItems-4-',
            'div'
        );
        this.innerElement.item.elements[2].innerHTML = 'Printed Leggins';

// Fifth block - GIRLS
        this.innerElement.content = new Blocks(
            this.innerElement.elements[4],
            5,
            'home__girls',
            'idHomeGirls',
            'div'
        );
//Sixth blocks - FOLLOW US ON INSTAGRAM
        this.innerElement.content = new Blocks(
            this.innerElement.elements[5],
            1,
            'home__follow',
            'idHomeFollow',
            'div'
        );
        this.innerElement.title = new Blocks(
            this.innerElement.elements[5].children[0],
            1,
            'home__latest_title',
            'idHomeFollowUsTitle',
            'span'
        );
        this.innerElement.title.elements[0].innerHTML = 'FOLLOW US ON </br> INSTAGRAM';
    }
}