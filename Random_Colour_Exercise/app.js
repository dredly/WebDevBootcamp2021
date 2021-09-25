function getRandRgb() {
    const rgbArray = [];
    for (i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255));
    }
    h1.innerText = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    body.style.backgroundColor = h1.innerText;

}

const body = document.querySelector('body')
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', getRandRgb);