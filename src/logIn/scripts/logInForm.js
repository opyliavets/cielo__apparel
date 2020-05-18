export class LogInForm{
    constructor(root, className) {
        this.root = root;
        this.className = className;
        this.renderSignUp();
        this.renderSignUpWithEmail();

    }

    renderSignUp() {
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
        this.buttonsBlock = document.createElement('div');
        this.buttonsBlock.classList.add(this.className + '__buttons-block');
        this.signUpFacebookBlock = document.createElement('button');
        this.signUpFacebookBlock.classList.add(this.className + '__with-facebook');
        this.signUpFacebookBlock.classList.add('btn-form');
        this.signUpFacebookBlock.insertAdjacentHTML('afterbegin', `<a class='sign-up__facebook'><div class = 'icon-box__facebook'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.89 266.89">
        <g>
            <g>
                <path style="fill:#fff;" d="M252.16,0H14.73A14.73,14.73,0,0,0,0,14.73V252.16a14.73,14.73,0,0,0,14.73,14.73H142.55V163.57H107.77V123.29h34.82V93.58c0-34.47,21.06-53.24,51.81-53.24a285.41,285.41,0,0,1,31.08,1.59v36H204.15c-16.76,0-20,8-20,19.61v25.72H224l-5.16,40.28H184.15V266.89h68a14.73,14.73,0,0,0,14.73-14.73V14.73A14.73,14.73,0,0,0,252.16,0Z"></path>
                <path style="fill:#3b5998;" d="M218.84,163.54,224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.41,285.41,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89h41.6V163.54Z"></path>
            </g>
        </g>
    </svg></div><p class = 'sign-up__descrip'>Sign Up with Facebook</p></a>`);
        this.signUpGoogleBlock = document.createElement('button');
        this.signUpGoogleBlock.classList.add(this.className + '__with-google');
        this.signUpGoogleBlock.classList.add('btn-form');
        this.signUpGoogleBlock.insertAdjacentHTML('afterbegin', `<a class='sign-up__google'><div class = 'icon-box__google'><svg class="login-svg" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 512 512" aria-label="Sign up with Google">
        <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
        <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
        <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
        <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"></path>
    </svg></div><p class = 'sign-up__descrip'>Sign Up with Google</p></a>`);
        this.or = document.createElement('span');
        this.or.classList.add(this.className + '__or');
        this.or.insertAdjacentHTML('afterbegin','or');
        this.signUpEmailBlock = document.createElement('button');
        this.signUpEmailBlock.classList.add(this.className + '__with-email');
        this.signUpEmailBlock.classList.add('btn-form');
        this.signUpEmailBlock.insertAdjacentHTML('afterbegin', `<p class = 'sign-up__email'>Sign up with email</p>`); 
        this.signUpEmailBlock.addEventListener('click', () => {
            this.buttonsBlock.style.display = 'none';
        this.emailForm.style.display = 'flex';
        });
        this.titleBlock.append(this.title, this.description);
        this.buttonsBlock.append(this.signUpFacebookBlock, this.signUpGoogleBlock, this.or, this.signUpEmailBlock);
        this.block.append(this.titleBlock, this.buttonsBlock);
        this.root.append(this.block);
    }

    renderSignUpWithEmail(){
        this.emailForm = document.createElement('div');
        this.emailForm.classList.add(this.className + '__emailForm');
        this.email = document.createElement('input');
        this.email.classList.add(this.className + '__email');
        this.email.placeholder = 'Email';
        this.password = document.createElement('input');
        this.password.classList.add(this.className + '__password');
        this.password.placeholder = 'Password';
        this.signUpButton = document.createElement('button');
        this.signUpButton.classList.add(this.className + '__signUpButton');
        this.signUpButton.insertAdjacentHTML('afterbegin', 'Sign Up');
        this.orSignUp = document.createElement('span');
        this.orSignUp.classList.add(this.className + '__orSignUp');
        this.orSignUp.insertAdjacentHTML('afterbegin', 'or sign up with')
        this.networksBlock = document.createElement('div');
        this.networksBlock.classList.add(this.className + '__networks')
        this.facebook = document.createElement('div');
        this.facebook.classList.add(this.className + '__facebook-icon');
        this.facebook.insertAdjacentHTML('afterbegin', `<svg class="login-svg" width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.89 266.89" aria-label="Sign up with Facebook">
        <g>
            <rect style="fill:#3b5998;" width="266.89" height="266.89" rx="14.73" ry="14.73"></rect>
            <path style="fill:#fff;" d="M184.15,266.89V163.54h34.69L224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.42,285.42,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89Z"></path>

        </g>
    </svg>`);
        this.google = document.createElement('div');
        this.google.classList.add(this.className + '__google-icon');
        this.google.insertAdjacentHTML('afterbegin', `<svg class="login-svg" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 512 512" aria-label="Sign up with Google">
        <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
        <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
        <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
        <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
C318.115,0,375.068,22.126,419.404,58.936z"></path>
    </svg>`);
        this.networksBlock.append(this.facebook, this.google);
        this.emailForm.append(this.email, this.password, this.signUpButton, this.orSignUp, this.networksBlock);
        this.block.append(this.emailForm);
        this.emailForm.style.display = 'none';
    }

}