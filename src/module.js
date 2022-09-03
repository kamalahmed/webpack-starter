function sayHello(name) {
    const body = document.querySelector('body');
    body.innerHTML = 'Hello '+ name;
}

export default sayHello;