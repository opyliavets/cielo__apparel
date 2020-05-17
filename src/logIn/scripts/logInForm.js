export class LogInForm{
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.render();
    }

    render() {
        this.block = document.createElement('div');
        this.block.classList.add(this.className);
        this.titleBlock = document.createElement('span')
        this.titleBlock.classList.add(this.className + '__title-block');
        this.title = document.createElement('h3');
        this.title.classList.add(this.className + '__title');
        this.title.innerHTML = `Sign Up`;
        this.description = document.createElement('p');
        this.description.classList.add(this.className + '__description');
        this.description.innerHTML = `Already a member?<a href = '' class = 'signIn-link'>Log In</a>`;
        this.signUpFacebookBlock = document.createElement('button');
        this.signUpFacebookBlock.classList.add(this.className + '__with-facebook');
        this.signUpFacebookBlock.classList.add('btn-form');
        this.signUpFacebookBlock.insertAdjacentHTML('afterbegin', `<a class='sign-up__facebook'><div class = 'icon-box__facebook'></div><p class = 'sign-up__descrip'>Sign Up with Facebook</p></a>`);
        this.signUpGoogleBlock = document.createElement('button');
        this.signUpGoogleBlock.classList.add(this.className + '__with-google');
        this.signUpGoogleBlock.classList.add('btn-form');
        this.signUpGoogleBlock.insertAdjacentHTML('afterbegin', `<a class='sign-up__google'><div class = 'icon-box__google'></div><p class = 'sign-up__descrip'>Sign Up with Google</p></a>`);
        this.or = document.createElement('span');
        this.or.classList.add(this.className + '__or');
        this.or.insertAdjacentHTML('afterbegin','or');
        this.signUpEmailBlock = document.createElement('button');
        this.signUpEmailBlock.classList.add(this.className + '__with-email');
        this.signUpEmailBlock.classList.add('btn-form');
        this.signUpEmailBlock.insertAdjacentHTML('afterbegin', `<p class = 'sign-up__google'>Sign Up with Email</p>`);
        this.titleBlock.append(this.title, this.description);
        this.block.append(this.titleBlock, this.signUpFacebookBlock, this.signUpGoogleBlock, this.or, this.signUpEmailBlock);
        this.root.append(this.block);
    }
}