import { Blocks } from '../../common/scripts//t_main_elements.js';
import { LogInForm } from './logInForm.js';

export class Wrapper {
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
    }

    render() {
        this.main = document.createElement('main');
        this.main.classList.add(this.className);
        this.inner = new Blocks(
            this.main,
            1,
            'login__div',
            'inner-block',
            'div'
        )
        this.root.append(this.main);
        this.inner.logInForm = new LogInForm(
            this.inner.elements[0],
            'logInForm'
        );
    }
}