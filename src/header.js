export default function header() {
    const element = document.createElement('header');
    
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Ferro';
    element.appendChild(logo);

    const orderBtnDiv = document.createElement('div');
    orderBtnDiv.id = 'orderBtn';
    const orderBtn = document.createElement('button');
    orderBtn.textContent = 'Order now';
    orderBtnDiv.appendChild(orderBtn);
    element.appendChild(orderBtnDiv);
    // console.log(element);
    return element;
}