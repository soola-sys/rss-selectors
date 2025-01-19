export function component () {
    const element = document.createElement('p');
    element.textContent = 'Some text';
    element.classList.add('test-class');
    return element;
}
