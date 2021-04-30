const renderHome = () => {
    const main = document.querySelector('.main');

    main.textContent = "";

    const header = document.createElement('h1');
    const text = document.createElement('p');

    header.textContent = "Lorem Ipsum Wine Bar";
    text.innerHTML =    `<p> Lorem ipsum is fueled by a collection of individuals passionate about creating a space for people to connect. 
                         Our restaurants are an ode to our communities – providing familiar yet inspired surroundings, wine appropriate 
                         for both the most casual and sacred of gatherings, and a menu that satisfies all your cravings. Our mission is to 
                         make every moment that we’re a part of, one that leaves people feeling crazy-good.</p> <br>
                         <p>Morbi vitae leo in lectus euismod egestas. Mauris odio quam, tempus in convallis vitae, 
                         mollis nec arcu. Integer elit mauris, accumsan vitae fermentum id, consectetur vitae nisi. 
                         Duis euismod fringilla mauris, vel tincidunt massa faucibus vel. Ut sollicitudin purus quis ex 
                         placerat venenatis eu a tortor. Sed dictum tristique tellus quis rhoncus. Donec sagittis congue 
                         vehicula. Suspendisse ac purus vitae lacus ultricies sodales. Aliquam enim lectus, molestie vitae 
                         feugiat et, lobortis vitae risus.</p>
                         `;

    main.appendChild(header);
    main.appendChild(text);

};

export default renderHome;
