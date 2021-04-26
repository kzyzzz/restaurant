const renderMenu = () => {
    const menu = [
        {
            name: `Joguet, "Les Petites Roches" 2017`,
            description: `Following the typical Charles Joguet style, the 2017 Chinon Les Petites Roches is muscular with decadent aromas of cranberries, black pepper, violets, fennel, and a little smoke. It seems to mingle perfectly at the table with autumnal flavors.`,
            price: `$60`,
        },
        {
            name: `Barnett Vineyards 2017`,
            description: `The 2017 Spring Mountain Cabernet Sauvignon is one of the darkest we’ve made. Big black raspberry jumps from the glass as well as blueberry jam and black pepper. There is a bright chocolate element surrounded by cedar notes. The mouthfeel is rich and lush`,
            price: `$92`,
        },
        {
            name: `Broadside 2018`,
            description: `Brilliant violet. Spice-accented cherry and dark berry aromas show very good clarity and a subtle smoky nuance. Sappy and focused on the palate, offering bitter cherry and black currant flavors that become sweeter with air. Shows very good energy and clarity on the finish, which is firmed by supple, slow-building tannins.`,
            price: `$40`,
        },
        {
            name: `De Toren, "Fusion V" 2017`,
            description: `The iconic Left Bank-based blend from De Toren, Fusion V is meticulously crafted from Bordeaux’s ‘Noble Five’ varietals and, with its complex flavours of liquorice, black cherry, cedar and dark berries, it offers a stylish departure for sophisticated oenophilic tastes.Soft as spun silk, with a lingering hint of sweet fruit on the back palate, this is a wine that will only improve with age.`,
            price: `$100`,
        },
        {
            name: `Frog's Leap Estate Grown 2017`,
            description: `A wine with all the hallmarks of the legendary Cabernets of Rutherford: deep, cassis currant aromas, the classic notes of Rutherford Dust, earthen flavors of cedar and black olive and a velvety, plush mouthfeel.`,
            price: `$140`,
        },
        {
            name: `Horizon de Lynch 2016`,
            description: `The wine gives the expression of the soil and the noble grape varieties that grow on it: the Cabernet Sauvignon and the Merlot. Very pleasant wine with dark fruits, light spice, vanilla, and a smooth, dry finish.`,
            price: `$48`,
        },
        {
            name: `Lake Sonoma 2017`,
            description: `It is where these gravelly loam soils straddle the river to create optimal growing conditions that our Cabernet Sauvignon grapes are selected and crafted into this complex, inviting wines.`,
            price: `$64`,
        },
        {
            name: `Leviathan 2018`,
            description: `An intense mix of fresh boysenberry, black cherry and plum jump from the glass with cocoa powder, allspice and nutmeg. Its earthy elements of our rocky northern California hillsides include Bay Laurel, sage, cedar, dry red earth which speak to its origins. Supple and balanced tannins of this rich wine lead to a long savory finish with hints of graphite and star anise.`,
            price: `$80`,
        },

    ];
    const main = document.querySelector('.main');

    main.textContent = "";

    let menuHeader = document.createElement('h1');
    menuHeader.textContent = "Menu";
    menuHeader.style.textAlign = "center";
    main.appendChild(menuHeader);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menu.forEach((wine) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item-card');

        let menuItemHeader = document.createElement('div');
        menuItemHeader.classList.add('menu-item-header');
        menuItemHeader.textContent = wine.name;
        menuItem.appendChild(menuItemHeader);

        let menuItemDescription = document.createElement('div');
        menuItemDescription.textContent = wine.description;
        menuItemDescription.classList.add('menu-item-description');
        menuItem.appendChild(menuItemDescription);

        let menuItemPrice = document.createElement('div');
        menuItemPrice.textContent = wine.price;
        menuItem.appendChild(menuItemPrice);
    
        menuContainer.appendChild(menuItem);
    });

    main.appendChild(menuContainer);


};



export default renderMenu;