
export default function home() {
    const element = document.createElement('div');
    element.id = "home-container"

    const image = document.createElement('img');
    image.style.width = '600px';
    image.src = '../images/image-1.jpg';
    image.alt = 'Pizza Picture';

    const p = document.createElement('p');
    p.textContent = "Since opening in 2015, FERRO has been one of Idyllwild’s leading restaurants, applauded for both its gracious service and casual take on fine dining."
    
    element.appendChild(image);
    element.appendChild(p);

    return element;
}