const clock = document.querySelector('#clock');

setInterval(() => {
    const date = new Date();
    if(clock.childNodes.length !== 0) clock.childNodes[0].remove();
    clock.append(document.createTextNode(date.toLocaleTimeString().toUpperCase()));
}, 1000);