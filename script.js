const mainContainer = document.querySelector('.main-container'); 

const deleteBtn = document.getElementById('clear');
const slider = document.getElementById('color-slider');
const sliderLabel = document.getElementById('slider-label');
const colorPicker = document.getElementById('colorPicker');
const eraserButton = document.getElementById('eraser');

let pixelColor = colorPicker.value;
let pixelNumber = slider.value;
sliderLabel.textContent = `${pixelNumber} x ${pixelNumber}`;


let pixelSize = 480 / pixelNumber;
console.log(pixelSize);
console.log(pixelNumber);
drawBoard();

function resizeBoard() {
    clearBoard();
    const pixels = document.querySelectorAll('.pixel');
    pixelNumber = slider.value;
    sliderLabel.textContent = `${pixelNumber} x ${pixelNumber}`;
    pixelSize = 480 / pixelNumber;
    deleteBoard();
    drawBoard();
}

slider.addEventListener('change', resizeBoard);

 function deleteBoard(){
     const pixels = document.querySelectorAll('.pixel');
     pixels.forEach(pixel => pixel.remove());

 }

function drawBoard() {
    for (let i = 1; i <= (pixelNumber * pixelNumber); i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`;
    pixel.style.backgroundColor = 'rgb(255,255,255)';
    pixel.id = i;
    mainContainer.appendChild(pixel);
    }
}

colorPicker.addEventListener('change', () => {
    pixelColor = colorPicker.value;
})


function changeColor(e) {
    const pixelToChange = document.getElementById(e.path[0].id);
    if (pixelToChange === null || !pixelToChange.classList.contains('pixel')) return;
    pixelToChange.style.backgroundColor = pixelColor;
}



function clearBoard() {
    // pixels.forEach(pixel => pixel.style.backgroundColor = 'rgba(255,255,255,1)');
    deleteBoard();
    drawBoard();
}

deleteBtn.addEventListener('click', clearBoard);

function eraser() {
    pixelColor = 'white';
}

eraserButton.addEventListener('click', eraser); 

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => addEventListener('mouseover', changeColor));