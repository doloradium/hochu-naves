const form = document.forms.calc;

const typeOfFerm = form.typeOfFerm;
const width = form.width;
const height = form.height;
const length = form.length;
// const convexity = form.convexity;
const sizeOfColumn = form.sizeOfColumn;
const colorOfFrame = form.colorOfFrame;
const colorOfPolycarbon = form.colorOfPolycarbon;
const setup = form.setup;

const typeOfFermTD = document.getElementById('typeOfFermTD');
const widthTD = document.getElementById('widthTD');
const lengthTD = document.getElementById('lengthTD');
const heightTD = document.getElementById('heightTD');
const heightArcTD = document.getElementById('heightArcTD');
const boldTD = document.getElementById('boldTD');
const densityTD = document.getElementById('densityTD');
const colorOfPolycarbonTD = document.getElementById('colorOfPolycarbonTD');
const colorFrameTD = document.getElementById('colorFrameTD');
const sizeOfColumnTD = document.getElementById('sizeOfColumnTD');
const pillarTD = document.getElementById('pillarTD');
const lagTD = document.getElementById('lagTD');
const doubleArcTD = document.getElementById('doubleArcTD');
const horizontallPipeTD = document.getElementById('horizontallPipeTD');
const setupTD = document.getElementById('setupTD');
const moldingFarmLugTD = document.getElementById('moldingFarmLugTD');
const moldingSupportCrossbarTD = document.getElementById('moldingSupportCrossbarTD');

const priceTD = document.getElementById('priceTD');
const discountTD = document.getElementById('discountTD');
const totalTD = document.getElementById('totalTD');

form.addEventListener('submit', () => {
    console.log(typeOfFerm.value);
    console.log(width.value);
    console.log(height.value);
    console.log(length.value);
    console.log(convexity.value);
    console.log(sizeOfColumn.value);
    console.log(colorOfFrame.value);
    console.log(colorOfPolycarbon.value);
    console.log(setup.value);

    typeOfFermTD.textContent = typeOfFerm.value;
    widthTD.textContent = width.value + " м";
    heightTD.textContent = height.value + " м";
    lengthTD.textContent = length.value + "  м";
    // convexityTD.textContent = convexity.value + " м";
    sizeOfColumnTD.textContent = sizeOfColumn.value;
    colorFrameTD.textContent = colorOfFrame.value;
    colorOfPolycarbonTD.textContent = colorOfPolycarbon.value;
    setupTD.textContent = setup.value;
});
