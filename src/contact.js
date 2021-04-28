const renderContact = () => {
    const main = document.querySelector('.main');

    main.textContent = "";

    const contact = document.createElement('div');
    contact.classList.add('contact');

    
    const leftText = document.createElement('div'); 

    const map = document.createElement('img');
    map.src = '../img/map.png';
    map.id = 'map';
    leftText.appendChild(map);


    // leftText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    //                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    //                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const rightText = document.createElement('div');
    
    rightText.innerHTML = `<h1>Contact Us</h1>
                           <p><i class="fa fa-map-marker" aria-hidden="true"></i> Friday Harbor Washington 98250 United States</p>
                           <p><i class="fa fa-envelope-o" aria-hidden="true"></i> wine@loremipsum.com</p>`;

    rightText.style.paddingRight = '1rem';
    
    contact.appendChild(rightText);
    contact.appendChild(leftText);
    
    
    main.appendChild(contact);
};

export default renderContact;
