class Circle {
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
}

const activities = document.getElementById("svgFormatting");

activities.addEventListener("change", testFunction);

function testFunction() {
    const value = activities.value;
    addActivityItem(value);
};


function addActivityItem(value) {

    const divForSVG = document.querySelector('#inputSVG');

    if (value === 'rectangle') {
        divForSVG.innerHTML = `
        <label for="width">Width:</label>
        <input type="number" id="width" name="width"><br><br>
        <label for="height">Height:</label>
        <input type="number" id="height" name="height"><br><br>`;
    }

    if (value === 'circle') {
        divForSVG.innerHTML = `
        <label for="cx">cx:</label>
        <input type="number" id="cx" name="cx"><br><br>
        <label for="cy">cy:</label>
        <input type="number" id="cy" name="cy"><br><br>
        <label for="R">R:</label>
        <input type="number" id="R" name="R"><br><br>`;
    }

    if (value === 'line') {
        divForSVG.innerHTML = `
        <label for="x1">x1:</label>
        <input type="number" id="x1" name="x1"><br><br>
        <label for="x2">x2:</label>
        <input type="number" id="x2" name="x2"><br><br>
        <label for="y1">y1:</label>
        <input type="number" id="y1" name="y1"><br><br>
        <label for="y2">y2:</label>
        <input type="number" id="y2" name="y2"><br><br>`;
    }

    if (value === 'elipse') {
        divForSVG.innerHTML = `
        <label for="cx">cx:</label>
        <input type="number" id="cx" name="cx"><br><br>
        <label for="cy">cy:</label>
        <input type="number" id="cy" name="cy"><br><br>
        <label for="rx">rx:</label>
        <input type="number" id="rx" name="rx"><br><br>
        <label for="ry">ry:</label>
        <input type="number" id="ry" name="ry"><br><br>`;
    }

    if (value === 'polygon') {
        divForSVG.innerHTML = `
        <label for="width">Width:</label>
        <input type="number" id="width" name="width"><br><br>
        <label for="height">Height:</label>
        <input type="number" id="height" name="height"><br><br>`;
    }

    if (value === 'polyline') {
        divForSVG.innerHTML = `
        <label for="width">Width:</label>
        <input type="number" id="width" name="width"><br><br>
        <label for="height">Height:</label>
        <input type="number" id="height" name="height"><br><br>`;
    }
}
