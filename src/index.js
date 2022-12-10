import './style.css';
import header from './header.js';
import nav from './nav.js';
import home from './home.js'
import menu from './menu.js';


const content = document.querySelector("body");
content.appendChild(header());
content.appendChild(nav());
content.appendChild(menu());


const navBtns = document.querySelector('#nav-container');
navBtns.addEventListener('click', (e) => {
    if(e.target.id == 'Home') {
        content.removeChild(content.lastChild);
        content.appendChild(home());
    }
    if(e.target.id === 'Menu') {
        content.removeChild(content.lastChild);
        content.appendChild(menu());
    }
})
