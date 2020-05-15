import './index.css';
import './styles/styles.scss';
import '../common/styles/base.scss';
import '../common/styles/header.scss';
import '../common/styles/home_page.scss';
import '../common/styles/shop_page.scss';
import '../common/styles/about_page.scss';
import '../common/styles/contact_page.scss';
import '../common/styles/footer.scss';
import '../common/styles/content.scss';
import '../common/styles/normalize.scss';
import '../common/styles/hamburger.scss';


import '../../assets/fonts/stylesheet.css';
import { Wrapper } from '../common/scripts/wrapper.js';

const root = document.querySelector('body');
new Wrapper(root, 'wrapper');




