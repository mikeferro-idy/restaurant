import data from './pizzas.csv';

function MenuItem(name,description,price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

function menuBuilder() {
    let menuArray = [];

    data.forEach((item) => menuArray.push( new MenuItem(item[0],item[1],item[2])));

    return menuArray.slice(1,menuArray.length);
}

export default function menu() {
    const element = document.createElement('div');
    element.id = "menu-container";
    element.textContent = "Menu";

    const menuItems = document.createElement('div');
    menuItems.id = "menu-items";
    element.appendChild(menuItems);
    
    const menu = menuBuilder();

    menu.forEach((item) => {
        const menuItem = document.createElement('div');
        const itemName = document.createElement('div');
        const itemDescription = document.createElement('div');
        const itemPrice = document.createElement('div');

        menuItem.classList.add("menu-item");
        itemName.classList.add("item-name");
        itemDescription.classList.add('item-description');
        itemPrice.classList.add('item-price');

        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
    
        menuItems.appendChild(menuItem);
    })

    return element;
}