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

        menuItem.addEventListener('click', (e) => {

            switch (e.target.innerText) {
                case 'Home':
                    renderHome();
                    break;

                case 'Menu':

                    break;
                
                case 'Contact':
                    renderContact();
                    break;                
            }

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

const renderSite = () => {
    let content = document.getElementById("content");
    console.log(content)

    let container = createContainer();
    container.appendChild(createNav());
    container.appendChild(createMain());

    content.appendChild(container);

    renderHome();

}

export default renderSite;