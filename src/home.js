const renderHome = () => {
    const main = document.querySelector('.main');

    main.textContent = "";

    const header = document.createElement('h1');
    const text = document.createElement('p');

    header.textContent = "Lorem Ipsum Wine Bar";
    text.textContent = ` Lorem ipsum is fueled by a collection of individuals passionate about creating a space for people to connect. 
                         Our restaurants are an ode to our communities – providing familiar yet inspired surroundings, wine appropriate 
                         for both the most casual and sacred of gatherings, and a menu that satisfies all your cravings. Our mission is to 
                         make every moment that we’re a part of, one that leaves people feeling crazy-good.`;

    main.appendChild(header);
    main.appendChild(text);

};

export default renderHome;
