const mainContainer = document.querySelector('.main-container');
let pixelNumber = 16; 
let pixelSize = 480 / pixelNumber;

for (let i = 1; i <= (pixelNumber * pixelNumber); i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`;
    pixel.id = i;
    mainContainer.appendChild(pixel);
}

const pixels = document.querySelectorAll('.pixel');

function changeColor(e) {
    const pixelToChange = document.getElementById(e.path[0].id);
    if (pixelToChange === null) return;
    pixelToChange.style.backgroundColor = 'rgba(255,0,0,1)';
}

pixels.forEach(pixel => addEventListener('mouseover', changeColor));

