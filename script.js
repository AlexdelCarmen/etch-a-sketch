const mainContainer = document.querySelector('.main-container');
let pixelNumber = 16; 

for (let i = 1; i <= (pixelNumber * pixelNumber); i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    mainContainer.appendChild(pixel);
}

