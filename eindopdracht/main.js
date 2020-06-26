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
        <input type="number" id="width" name="width" class="form-control" required><br>
        <label for="height">Height:</label>
        <input type="number" id="height" name="height" class="form-control" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control"><br>`;
    }

    if (value === 'circle') {
        divForSVG.innerHTML = `
        <label for="cx">cx:</label>
        <input type="number" id="cx" name="cx" class="form-control" required><br>
        <label for="cy">cy:</label>
        <input type="number" id="cy" name="cy" class="form-control" required><br>
        <label for="r">r:</label>
        <input type="number" id="r" name="r" class="form-control" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control"><br>`;
    }

    if (value === 'line') {
        divForSVG.innerHTML = `
        <label for="x1">x1:</label>
        <input type="number" id="x1" name="x1" class="form-control" required><br>
        <label for="y1">y1:</label>
        <input type="number" id="y1" name="y1" class="form-control" required><br>
        <label for="x2">x2:</label>
        <input type="number" id="x2" name="x2" class="form-control" required><br>
        <label for="y2">y2:</label>
        <input type="number" id="y2" name="y2" class="form-control" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control"><br>`;
    }

    if (value === 'ellipse') {
        divForSVG.innerHTML = `
        <label for="cx">cx:</label>
        <input type="number" id="cx" name="cx" class="form-control" required><br>
        <label for="cy">cy:</label>
        <input type="number" id="cy" name="cy" class="form-control" required><br>
        <label for="rx">rx:</label>
        <input type="number" id="rx" name="rx" class="form-control" required><br>
        <label for="ry">ry:</label>
        <input type="number" id="ry" name="ry" class="form-control" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control"><br>`;
    }

    if (value === 'polygon') {
        divForSVG.innerHTML = `
        <label for="points">Points:</label>
        <input type="text" id="points" name="points" placeholder="example: 15,20 20,15 10,30" class="form-control" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control required" required><br>`;
    }

    if (value === 'polyline') {
        divForSVG.innerHTML = `
        <label for="points">Points:</label>
        <input type="text" id="points" name="points" placeholder="example: 15,20 20,15 10,30" class="form-control required" required><br>
        <label for="color">Colorcode:</label>
        <input type="text" id="color" name="color" class="form-control" required><br>
        `;
    }
}

document.getElementById("AJAXform").addEventListener("click", function(event){
  event.preventDefault();
  // console.log('default prohibited');
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // SVG includen
    }
  };
  xhttp.open("POST", "main.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&test=moeder");
}

function drawFunction() {
    const selectSVG = document.querySelector('#svgFormatting');

    console.log(selectSVG.value);

    if (selectSVG.value === 'rectangle') {
        const height = document.querySelector('#height');
        const width = document.querySelector('#width');
        const color = document.querySelector('#color');

        console.log(height.value);
        console.log(width.value);
        console.log(color.value);

        drawSVG.innerHTML = `
           <rect width="${width.value}" height="${height.value}" style="fill:#${color.value};" />
        `;
    }

    if (selectSVG.value === 'circle') {
        const cx = document.querySelector('#cx');
        const cy = document.querySelector('#cy');
        const r = document.querySelector('#r');
        const color = document.querySelector('#color');

        console.log(cx.value);
        console.log(cy.value);
        console.log(r.value);
        console.log(color.value);

        drawSVG.innerHTML = `
           <circle cx="${cx.value}" cy="${cy.value}" r="${r.value}" style="fill:#${color.value};" />
        `;
    }

    if (selectSVG.value === 'ellipse') {
        const cx = document.querySelector('#cx');
        const cy = document.querySelector('#cy');
        const rx = document.querySelector('#rx');
        const ry = document.querySelector('#ry');
        const color = document.querySelector('#color');

        console.log(cx.value);
        console.log(cy.value);
        console.log(rx.value);
        console.log(ry.value);
        console.log(color.value);

        drawSVG.innerHTML = `
           <ellipse  cx="${cx.value}" cy="${cy.value}" rx="${rx.value}" ry="${ry.value}" style="fill:#${color.value};" />
        `;
    }

    if (selectSVG.value === 'line') {
        const x1 = document.querySelector('#x1');
        const y1 = document.querySelector('#y1');
        const x2 = document.querySelector('#x2');
        const y2 = document.querySelector('#y2');
        const color = document.querySelector('#color');

        console.log(x1.value);
        console.log(y1.value);
        console.log(x2.value);
        console.log(y2.value);
        console.log(color.value);

        drawSVG.innerHTML = `
           <line x1="${x1.value}" y1="${y1.value}" x2="${x2.value}" y2="${y2.value}" style="stroke:#${color.value};stroke-width:2" />
        `;
    }

    if (selectSVG.value === 'polygon') {
        const points = document.querySelector('#points');
        const color = document.querySelector('#color');

        console.log(points.value);
        console.log(color.value);

        drawSVG.innerHTML = `
        <polygon points="${points.value}" style="fill:#${color.value};stroke-width:1" />
        `;
    }

    if (selectSVG.value === 'polyline') {
        const points = document.querySelector('#points');
        const color = document.querySelector('#color');

        console.log(points.value);
        console.log(color.value);

        drawSVG.innerHTML = `
        <polyline points="${points.value}" style="fill:none;stroke:#${color.value};stroke-width:3" />
        `;
    }
}

window.saveToServer = function() {
  // SVG as string
  let s = new XMLSerializer();
  let svgString = s.serializeToString(document.getElementById('drawSVG'));

  let formData = new FormData();
  formData.append('svg', svgString)

  let xhr = new XMLHttpRequest();
  xhr.open("POST", './index.php', true);

  xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE) {
          var status = xhr.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(xhr.responseText);
          } else {
            // Oh no! There has been an error with the request!
          }
        }
  }

  xhr.send(formData);

}

window.saveSVGtoFile = function() {

  let s = new XMLSerializer();
  let str = s.serializeToString(document.getElementById('drawSVG'));
  let text = str,
      blob = new Blob([text], { type: 'image/svg+xml' }),
      anchor = document.createElement('a');

  anchor.download = "download.svg";
  anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
  anchor.dataset.downloadurl = ['image/svg+xml' , anchor.download, anchor.href].join(':');
  anchor.click();
}
