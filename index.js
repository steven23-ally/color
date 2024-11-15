const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.addEventListener('click', () => {
    
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    colorBox.style.backgroundColor = randomColor;
});