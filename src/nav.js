export default function nav() {
    const element = document.createElement('div');
    element.id = 'nav-container';

    const navLinks = ['Home','Menu','Reservations','About',]
    const list = document.createElement('ul');
    list.classList.add("tab");
    
    navLinks.forEach((link) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.id =link;
        a.href = '#';
        li.appendChild(a);
        a.textContent = link;
        list.appendChild(li);
    })
    element.appendChild(list);


    return element;
}