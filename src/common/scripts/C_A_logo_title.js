export class Logo{
    constructor(root, classNameLogo, classNameTitle) {
        this.root = root;  
        this.logoclass = classNameLogo;
        this.titleclass = classNameTitle;
        this.render();
    }

    render() {
        this.logo = document.createElement('div');
        this.logo.classList.add(this.logoclass);
        this.logo.innerHTML = '<svg preserveAspectRatio="xMidYMid meet" data-bbox="73.5 60 53 80" viewBox="73.5 60 53 80" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img"><g><path d="M95.1 74l-21.6 32h9.4l21.6-32h-9.4z"></path><path d="M108 69c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path><path d="M112.2 74l-34.7 52h9.3l34.7-52h-9.3z"></path><path d="M117.1 94l-21.6 32h9.4l21.6-32h-9.4z"></path><path d="M92 140c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path></g></svg>'
        this.root.append(this.logo);
        this.title = document.createElement('span');
        this.title.classList.add(this.titleclass);
        this.title.textContent = 'Cielo Apparel'
        this.root.append(this.title);
    }

}