import { List } from './footer_nav_elems.js';
import { FooterNavBlock } from './footer_nav_blocks.js';
export class FooterBlock {
    constructor(root, classNameFirst, classNameSecond, copyRightText, copyRightTextclass) {
        this.root = root;
        this.classNameFirst = classNameFirst;
        this.classNameSecond = classNameSecond;
        this.copyRightText = copyRightText;
        this.copyRightTextClass = copyRightTextclass;
        this.renderFirst();
        this.renderSecond();
    }

// renderFirst створює верхній блок з навігаційними блоками

    renderFirst() {
        this.element = document.createElement('div');
        this.element.classList.add(this.classNameFirst);
        this.root.append(this.element);
        this.cieApp = new FooterNavBlock(
            this.element,
            'footer__nav-block',
            'footer__title',
            'footer__content',
            'Cielo Apparel',
            'idFooterMenu'
        );
        this.cieApp.innerContent = new List(
            this.cieApp.content,
            'a',
            5,
            'Home',
            'Shop',
            'About',
            'Contact',
            'Forum'
        );

        this.explore = new FooterNavBlock(
            this.element,
            'footer__nav-block',
            'footer__title',
            'footer__content',
            'Explore',
            'idExplore'
        );
        this.explore.innerContent = new List(
            this.explore.content,
            'a',
            4,
            'FAQ',
            'Shipping and Returns',
            'Store Policy',
            'Payment Methods',
            ''
        );

        this.joinUs = new FooterNavBlock(
            this.element,
            'footer__nav-block',
            'footer__title',
            'footer__content',
            'Join Our NewsLetter',
            'idJoinUs'
        );
        this.joinUs.innerContent = new List(
            this.joinUs.content,
            'b',
            0
        );
        this.joinUs.innerContent.email.placeholder = 'Enter your email here*';
        this.followUs = new FooterNavBlock(
            this.element,
            'footer__nav-block',
            'footer__title',
            'footer__content',
            'Follow Us',
            'idFollowUs'
        );
        this.followUs.innerContent = new List(
            this.followUs.content,
            'a',
            4,
            'Facebook',
            'Twitter',
            'Instagram',
            'Pinterest',
            ''
        );

    }
// renderSecond створює нижній блок з copyrigths

    renderSecond() {
        this.element = document.createElement('div');
        this.innerContent = document.createElement('span');
        this.innerContent.classList.add(this.copyRightTextClass);
        this.innerContent.textContent = this.copyRightText;
        this.element.classList.add(this.classNameSecond);
        this.element.append(this.innerContent);
        this.root.append(this.element);
    }
}

