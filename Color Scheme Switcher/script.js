const colorBtns = document.querySelector('.color-container');

const changeBodyBackgroundColor = (e) => {
    const color = e.target;

    if(color.classList.contains('grey')) {
        document.body.style.backgroundColor = "#808080";
    }
    else if(color.classList.contains('white')) {
        document.body.style.backgroundColor = "#fff";
    }
    else if(color.classList.contains('blue')) {
        document.body.style.backgroundColor = "#0000ff";
    }
    else if(color.classList.contains('yellow')) {
        document.body.style.backgroundColor = "#ffff00";
    }
};

colorBtns.addEventListener('click', changeBodyBackgroundColor);