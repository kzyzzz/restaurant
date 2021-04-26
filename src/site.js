import renderHome from "./home"
import renderContact from "./contact"
import renderMenu from "./menu"

const createContainer = () => {
    let container = document.createElement('div');
    container.classList.add('container');

    return container;
}

const createNav = () => {
    let menuItems = ["Home", "Menu", "Contact"];

    let menu = document.createElement('nav');
    menu.classList.add('main-menu');

    let menuUl = document.createElement('ul');
    

    menuItems.forEach((item) => {
        let menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        menuItem.textContent = item;
        menuItem.id = item;

        if (menuItem.id == "Home") menuItem.classList.add('menu-item-active');

        menuItem.addEventListener('click', (e) => {

            let menuActive = document.querySelector('.menu-item-active');
            if (menuActive) menuActive.classList.remove('menu-item-active');

            e.target.classList.add('menu-item-active');

            let main = document.querySelector('.main');
            main.style.animation = 'none';

            setTimeout(function() {
                main.style.animation = '';
            }, 1);

            switch (e.target.innerText) {
                case 'Home':
                    renderHome();
                    break;

                case 'Menu':
                    renderMenu();
                    break;
                
                case 'Contact':
                    renderContact();
                    break;                
            };
        });

        menuUl.appendChild(menuItem);
    });

    menu.appendChild(menuUl);

    return menu;

}

const createMain = () => {
    let main = document.createElement('div');
    main.classList.add('main');

    return main;
}

const createFooter = () => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let footerDiv = document.createElement('div');
    footerDiv.textContent = 'Developed by Vladimir Baraev'

    let links = document.createElement('div');
    links.innerHTML = '<a href="https://github.com/kzyzzz"><i class="fa fa-github" aria-hidden="true"></i></a>';

    footer.appendChild(footerDiv);
    footer.appendChild(links);

    return footer;
}

const renderSite = () => {
    let content = document.getElementById("content");

    let container = createContainer();
    container.appendChild(createNav());
    container.appendChild(createMain());
    container.appendChild(createFooter());

    content.appendChild(container);    

    renderHome();

}

export default renderSite;