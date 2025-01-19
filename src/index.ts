import './style.css';
function component (text: string) {
    const element = document.createElement('p');
    element.textContent = text;
    element.classList.add('test-class');
    return element;
}
document.body.append(component('Hello'));
