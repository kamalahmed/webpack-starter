
function sayHello(name) {
    const body = document.querySelector('body');
    const h1 = document.createElement('h2');
    h1.innerHTML = 'Hello '+ name;
    body.appendChild(h1);
}

export default sayHello;