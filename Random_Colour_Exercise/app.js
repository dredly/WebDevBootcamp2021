function getRandColor(clrFormat) {
    console.log(clrFormat.value);
    rgbArray.splice(0, rgbArray.length);
    for (i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255));
    }
    rgbStr = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    body.style.backgroundColor = rgbStr;
    changeTxt(clrFormat);
}

function changeTxt(clrFormat) {
    if (clrFormat.value === 'rgb') {
        h1.innerText = rgbStr;
    } else if (clrFormat.value === 'hsl') {
        h1.innerText = RGBToHSL(...rgbArray);
    } else h1.innerText = RGBToHEX(...rgbArray);
}

function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function RGBToHEX(r, g, b) {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

const rgbArray = [];
let rgbString = '';

const body = document.querySelector('body')
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const radio = document.querySelector('.formatSelect');
let checkedRadio = document.querySelector('input[type="radio"]:checked');

btn.addEventListener('click', () => getRandColor(checkedRadio));
radio.addEventListener('click', () => {
    checkedRadio = document.querySelector('input[type="radio"]:checked')
    changeTxt(checkedRadio);
});
