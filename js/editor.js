function setImageSrc(start) { }
const initCanvas = (first) => {
  return new fabric.Canvas(first, {
    'width': 0x240,
    'height': 0x280,
    'borderColor': 'black',
    'border': 0x3,
    'backgroundColor': "green",
    'preserveObjectStacking': true,
    'selection': true
  });
};
const setBackground = (_0x4d538a, _0x45b9ce) => {
  fabric.Image.fromURL(_0x4d538a, _0xef0b68 => {
    _0x45b9ce.backgroundImage = _0xef0b68;
    _0x45b9ce.renderAll();
  });
};
const toggleMode = _0x2c0f14 => {
  if (_0x2c0f14 === "pan") {
    if (currentMode === "pan") {
      currentMode = '';
    } else {
      currentMode = "pan";
      canvas.isDrawingMode = false;
      canvas.renderAll();
    }
  } else if (_0x2c0f14 === "drawing") {
    if (currentMode === "drawing") {
      currentMode = '';
      canvas.isDrawingMode = false;
      canvas.renderAll();
    } else {
      currentMode = "drawing";
      canvas.freeDrawingBrush.color = "#000000";
      canvas.isDrawingMode = true;
      canvas.renderAll();
    }
  }
  console.log(_0x2c0f14);
};
const setPanEvents = _0x4c4b3a => {

  _0x4c4b3a.on('mouse:move', _0x22b90d => {
    if (mousePressed && currentMode === "pan") {
      _0x4c4b3a.setCursor("grab");
      _0x4c4b3a.renderAll();
      const _0xd922d3 = new fabric.Point(_0x22b90d.e.movementX, _0x22b90d.e.movementY);
      _0x4c4b3a.relativePan(_0xd922d3);
      // console.log('abc')
      const activeObject = _0x4c4b3a.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        // Display the size of the image while moving
        displayImageSize(activeObject);
      }
      // if (tooltip) {
      //   canvas.remove(tooltip);
      // }

    }
  });

  _0x4c4b3a.on("mouse:down", _0x5ccec2 => {
    mousePressed = true;
    if (currentMode === "pan") {
      _0x4c4b3a.setCursor("grab");
      _0x4c4b3a.renderAll();
      const activeObject = _0x4c4b3a.getActiveObject();
      if (activeObject && activeObject.type === 'image') {
        // Display the size of the image while moving
        displayImageSize(activeObject);
      }
    }
  });

  _0x4c4b3a.on("mouse:up", _0x340ad1 => {
    mousePressed = false;
    _0x4c4b3a.setCursor("default");
    _0x4c4b3a.renderAll();
    // console.log('abc')
    const activeObject = _0x4c4b3a.getActiveObject();
    if (activeObject && activeObject.type === 'image') {
      // Display the size of the image while moving
      displayImageSize(activeObject);
    }
  });

  // /siplay image size tooltip

};

function pxToCm(px) {
  // Assuming standard DPI of 96
  const inches = px / 96;
  const cm = inches * 2.54;
  return cm.toFixed(2);
}

function cmToPx(cm) {
  // Assuming standard DPI of 96
  const inches = cm / 2.54;
  const px = inches * 96;
  return px.toFixed(2);
}

function displayImageSize(img) {
  // Create a tooltip element
  if (document.getElementById('dimension-tooltip')) {
    const tooltip = document.getElementById('dimension-tooltip');
    // Remove the tooltip element from its parent
    tooltip.parentNode.removeChild(tooltip);
  }
  const tooltip = document.createElement('div');
  tooltip.id = 'dimension-tooltip';
  // console.log(img.lineCoords)
  // let dimension = calculateDimensions(img.lineCoords)
  tooltip.textContent = '' + pxToCm(img.width * img.scaleX) + 'cm X ' + pxToCm(img.height * img.scaleY) + 'cm';
  tooltip.style.position = 'absolute';
  tooltip.style.fontSize = '16px';
  tooltip.style.color = 'black';

  document.body.appendChild(tooltip);
  updateTooltipPosition();
  // when mouse is clicked
  // canvas.on('mouse:dowm', function (options) {
  //   // if (options.target === img) {
  //     updateTooltipPosition();
  //   // } else {
  //   //   // tooltip.style.display = 'none';
  //   // }
  // });
  // canvas.on('mouse:up', function (options) {
  //   if (options.target === img) {
  //     updateTooltipPosition();
  //   } else {
  //     // tooltip.style.display = 'none';
  //   }
  // });
  canvas.on('mouse:move', function (options) {
    if (options.target === img) {
      updateTooltipPosition();
    } else {
      tooltip.style.display = 'none';
    }
  });
  // img.on('click', updateTooltipPosition)
  img.on('moving', updateTooltipPosition);
  img.on('scaling', updateTooltipPosition);
  // canvas.on('object:modified', function(){
  //   console.log('resize')
  // });
  document.addEventListener('canvasResize', function (event) {
    displayImageSize();
    // updateTooltipPosition();
    // console.log('abc')
    // Add your custom logic here
  });
  document.addEventListener('imageResize', function (event) {
    displayImageSize();
    // console.log('abc')
    // Add your custom logic here
  });



  function updateTooltipPosition() {
    // const activeObject = canvas.activeObject;
    // console.log(activeObject)
    // if (activeObject && activeObject.type === 'image') {
    //   // Display the size of the image while moving
    //   img = activeObject;
    //   console.log(img.left)
    // }
    // console.log(img.left)
    tooltip.style.display = 'block';
    let canvasMain = document.getElementsByClassName('canvas-container')[0];
    // console.log(canvasMain.getBoundingClientRect().x)
    tooltip.style.left = canvasMain.getBoundingClientRect().x + img.left + 'px';
    tooltip.style.top = canvasMain.getBoundingClientRect().y + img.top - 20 + 'px';
  }

  // canvas.add(img);
}

// calculate height and width of bounding box
function calculateDimensions(bbox) {
  // Assuming bbox is an object with tl, tr, bl, and br properties
  const { tl, tr, bl, br } = bbox;

  // Calculate the width as the difference in x-coordinates of the top corners
  const width = Math.abs(tr.x - tl.x).toFixed(2);

  // Calculate the height as the difference in y-coordinates of the top corners
  const height = Math.abs(tl.y - bl.y).toFixed(2);

  return { width, height };
}

function Oadditioncan() {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    var w = activeObject.width * activeObject.scaleX;
    var val = pxToCm(w) + 1;
    document.getElementById("objectWidth").value = val;
    activeObject.set({
      scaleX: val / pxToCm(activeObject.width)
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }
}
function OcanWit(_0x18fd4a) {
  const activeObject = canvas.getActiveObject();
  if (activeObject) { // && activeObject.type === 'image'
    var _0x5f5417 = cmToPx(parseInt(_0x18fd4a));
    activeObject.set({
      scaleX: _0x5f5417 / activeObject.width
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }

}
function Osubstcan() {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    var w = activeObject.width * activeObject.scaleX;
    var val = pxToCm(w) - 1;
    document.getElementById("objectWidth").value = val;
    activeObject.set({
      scaleX: val / pxToCm(activeObject.width)
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }
}


function Ocanhie(_0x2bbe5d) {
  const activeObject = canvas.getActiveObject();
  if (activeObject) { // && activeObject.type === 'image'
    var _0x5f5417 = cmToPx(parseInt(_0x2bbe5d));
    activeObject.set({
      scaleY: _0x5f5417 / activeObject.height
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }
}

function Oadditioncanhie() {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    var w = activeObject.height * activeObject.scaleY;
    var val = pxToCm(w) + 1;
    console.log(pxToCm(w), val);
    document.getElementById("objectHeight").value = val;
    activeObject.set({
      scaleY: val / pxToCm(activeObject.height)
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }
}
function Osubstcanhie() {
  const activeObject = canvas.getActiveObject();
  if (activeObject) {
    var w = activeObject.height * activeObject.scaleY;
    var val = pxToCm(w) - 1;
    document.getElementById("objectHeight").value = val;
    activeObject.set({
      scaleY: val / pxToCm(activeObject.height)
    });
    activeObject.setCoords();
    canvas.renderAll();
    var event = new CustomEvent('imageResize');
    document.dispatchEvent(event);
  }
}


const clearCanvas = (_0x11adff, _0x2c1d60) => {
  _0x2c1d60.value = _0x11adff.toSVG();
  _0x11adff.getObjects().forEach(_0x4f7446 => {
    if (_0x4f7446 !== _0x11adff.backgroundImage) {
      _0x11adff.remove(_0x4f7446);
    }
  });
};
const restoreCanvas = (_0x725a04, _0x29b7b3, _0x2edec8) => {
  if (_0x29b7b3.value) {
    fabric.loadSVGFromString(_0x29b7b3.value, _0x53e51e => {
      _0x53e51e = _0x53e51e.filter(_0x5339aa => _0x5339aa['xlink:href'] !== _0x2edec8);
      _0x725a04.add(..._0x53e51e);
      _0x725a04.requestRenderAll();
    });
  }
};
function deleteSelectedObjectsFromCanvas() {
  var _0x4e29f9 = canvas.getActiveObject();
  if (_0x4e29f9.type === "activeSelection") {
    _0x4e29f9.forEachObject(function (_0x43847d) {
      console.log(_0x43847d);
      canvas.remove(_0x43847d);
    });
  } else {
    canvas.remove(_0x4e29f9);
  }
  canvas.discardActiveObject();
  canvas.requestRenderAll();
}
function groupObjects() {
  if (!canvas.getActiveObject()) {
    return;
  }
  if (canvas.getActiveObject().type !== 'activeSelection') {
    return;
  }
  canvas.getActiveObject().toGroup();
  canvas.requestRenderAll();
}
function ungroupObjects() {
  if (!canvas.getActiveObject()) {
    return;
  }
  if (canvas.getActiveObject().type !== "group") {
    return;
  }
  canvas.getActiveObject().toActiveSelection();
  canvas.requestRenderAll();
}
const imgAdded = _0x40de00 => {
  console.log(_0x40de00);
  const _0x481683 = document.getElementById("myImg");
  const _0x5c305a = _0x481683.files[0x0];
  reader.readAsDataURL(_0x5c305a);
};
const reader = new FileReader();
const inputfile = document.getElementById("myImg");
inputfile.addEventListener("change", imgAdded);
reader.addEventListener("load", () => {
  console.log(reader.result);
  fabric.Image.fromURL(reader.result, _0x111960 => {
    canvas.add(_0x111960);
    canvas.requestRenderAll();
  });
});
var img = document.createElement("img");
var imageSaver = document.getElementById('lnkDownload');
imageSaver.addEventListener("click", saveImage, false);
function saveImage(_0x2895f4) {
  this.href = canvas.toDataURL({
    'format': "png",
    'quality': 0.8
  });
  this.download = "canvas.png";
}

var jsond = document.createElement("json");
var jsonSaver = document.getElementById('JSONDownload'); // Assuming you have an element with the ID 'JSONDownload'
jsonSaver.addEventListener("click", saveJSON, false);

function saveJSON(_0x2895f4) {
  var jsonData = JSON.stringify(canvas);

  // Create a blob from the JSON data
  var blob = new Blob([jsonData], { type: 'application/json' });

  // Create a link element
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'canvas_data.json'; // You can change the filename

  // Trigger a click on the link to download the JSON
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to handle file input change
function handleFileSelect(event) {
  var file = event.target.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var jsonContent = e.target.result;

      // Load JSON content into the canvas
      canvas.loadFromJSON(jsonContent, function () {
        // Render the canvas after loading JSON
        canvas.renderAll();
      });
    };

    // Read the file as text
    reader.readAsText(file);
  }
}

// Attach the event listener to the file input
var jsonFileInput = document.getElementById('jsonFileInput');
jsonFileInput.addEventListener('change', handleFileSelect, false);

const canvas = new fabric.Canvas('zbcanvas', {
  'width': 660,
  'height': 520,
  'borderColor': 'black',
  'border': 0x3,
  'backgroundColor': "white",
  'preserveObjectStacking': true,
  'selection': true
});
let ctx = canvas.getContext('2d');
const svgState = {};
let mousePressed = false;
let color = "#000000";
const group = {};
const bgUrl = '';
let currentMode;
const modes = {
  'pan': "pan",
  'drawing': "drawing"
};
setBackground('', canvas);
setPanEvents(canvas);
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
var cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A";
var deleteImg = document.createElement('img');
deleteImg.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
var cloneImg = document.createElement("img");
cloneImg.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A";
fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = "blue";
fabric.Object.prototype.cornerStyle = 'circle';
fabric.Object.prototype.borderColor = "red";
fabric.Object.prototype.cornerSize = 0xc;
fabric.Object.prototype.padding = 0xa;
fabric.Object.prototype.borderDashArray = [0x3, 0x3];
fabric.Object.prototype.noScaleCache = false;
canvas.uniformScaling = true;
fabric.perfLimitSizeTotal = 0xd693a40;
fabric.maxCacheSideLimit = 0xa7d8c0;
const addtext = _0x47e60d => {
  const _0x9e4222 = _0x47e60d.getCenter();
  const _0x23d6ec = new fabric.IText("Tap and Type", {
    'left': 0x32,
    'top': 0x64,
    'fontFamily': "Arial",
    'fill': "#333",
    'fontSize': 45,
    'left': _0x9e4222.left,
    'top': _0x9e4222.top,
    'originX': 'center',
    'originY': "center"
  });
  _0x47e60d.add(_0x23d6ec);
  _0x47e60d.centerObject(_0x23d6ec);
  _0x47e60d.setActiveObject(_0x23d6ec);
  _0x47e60d.requestRenderAll();
};
const addtextarea = _0x1f3b56 => {
  const _0x301fb4 = _0x1f3b56.getCenter();
  const _0x77f313 = new fabric.Textbox("The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.", {
    'width': 0xc8,
    'height': 0xc8,
    'left': 0x32,
    'top': 0x64,
    'fontFamily': 'Arial',
    'fill': '#333',
    'fontSize': 0x10,
    'left': _0x301fb4.left,
    'top': _0x301fb4.top,
    'originX': "center",
    'originY': "center"
  });
  _0x1f3b56.add(_0x77f313);
  _0x1f3b56.centerObject(_0x77f313);
  _0x1f3b56.setActiveObject(_0x77f313);
  _0x1f3b56.requestRenderAll();
};
$(".add_shape").click(function () {
  var _0x3d3178 = $(this).attr("data-rel");
  if (_0x3d3178 != '') {
    switch (_0x3d3178) {
      case 'rectangle':
        var _0x2a714e = canvas.getCenter();
        var _0x44a3d6 = new fabric.Rect({
          'width': 0x64,
          'height': 0x64,
          'fill': '',
          'stroke': "black",
          'strokeWidth': 0x1,
          'strokeLineJoin': "bevil",
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': "center",
          'strokeUniform': true
        });
        canvas.add(_0x44a3d6);
        canvas.centerObject(_0x44a3d6);
        canvas.setActiveObject(_0x44a3d6);
        break;
      case "circle":
        var _0x2a714e = canvas.getCenter();
        var _0x4a46be = new fabric.Circle({
          'radius': 0x32,
          'fill': '',
          'stroke': "black",
          'strokeWidth': 0x1,
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': "center",
          'strokeUniform': true
        });
        canvas.add(_0x4a46be);
        canvas.centerObject(_0x4a46be);
        canvas.setActiveObject(_0x4a46be);
        break;
      case "ellipse":
        var _0x2a714e = canvas.getCenter();
        var _0x3382f0 = new fabric.Ellipse({
          'rx': 0x50,
          'ry': 0x28,
          'fill': '',
          'stroke': "black",
          'strokeWidth': 0x1,
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': 'center',
          'strokeUniform': true
        });
        canvas.add(_0x3382f0);
        canvas.centerObject(_0x3382f0);
        canvas.setActiveObject(_0x4a46be);
        break;
      case "triangle":
        var _0x2a714e = canvas.getCenter();
        var _0x52f195 = new fabric.Triangle({
          'width': 0x96,
          'height': 0x64,
          'fill': '',
          'stroke': "black",
          'strokeWidth': 0x1,
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': 'center',
          'strokeUniform': true
        });
        canvas.add(_0x52f195);
        canvas.centerObject(_0x52f195);
        canvas.setActiveObject(_0x52f195);
        canvas.requestRenderAll();
        break;
      case 'hexagon':
        var _0x94c529 = [{
          'x': -0x64,
          'y': -0x32
        }, {
          'x': 0x64,
          'y': -0x32
        }, {
          'x': 0x96,
          'y': 0x32
        }, {
          'x': -0x96,
          'y': 0x32
        }];
        var _0xbfa4b4 = [{
          'x': 0x352,
          'y': 0x4b
        }, {
          'x': 0x3be,
          'y': 137.5
        }, {
          'x': 0x3be,
          'y': 262.5
        }, {
          'x': 0x352,
          'y': 0x145
        }, {
          'x': 0x2e6,
          'y': 262.5
        }, {
          'x': 0x2e6,
          'y': 137.5
        }];
        var _0x15cad7 = [{
          'x': 0x0,
          'y': 0x0
        }, {
          'x': 0x64,
          'y': 0x32
        }, {
          'x': 0xc8,
          'y': 0x0
        }, {
          'x': 0x96,
          'y': 0x64
        }, {
          'x': 0xc8,
          'y': 0xc8
        }, {
          'x': 0x64,
          'y': 0x96
        }, {
          'x': 0x0,
          'y': 0xc8
        }, {
          'x': 0x32,
          'y': 0x64
        }, {
          'x': 0x0,
          'y': 0x0
        }];
        var _0x4aba06 = [{
          'x': 0x15e,
          'y': 0x4b
        }, {
          'x': 0x17c,
          'y': 0xa0
        }, {
          'x': 0x1d6,
          'y': 0xa0
        }, {
          'x': 0x190,
          'y': 0xd7
        }, {
          'x': 0x1a7,
          'y': 0x12d
        }, {
          'x': 0x15e,
          'y': 0xfa
        }, {
          'x': 0x115,
          'y': 0x12d
        }, {
          'x': 0x12f,
          'y': 0xd7
        }, {
          'x': 0xe7,
          'y': 0xa1
        }, {
          'x': 0x141,
          'y': 0xa1
        }];
        var _0xfe5cc5 = new Array(_0x94c529, _0xbfa4b4, _0x15cad7, _0x4aba06);
        var _0x2a714e = canvas.getCenter();
        var _0x5003bc = new fabric.Polygon(_0xfe5cc5[0x1], {
          'top': 0xb4,
          'left': 0xc8,
          'fill': '',
          'stroke': "black",
          'strokeWidth': 0x1,
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': 'center',
          'strokeUniform': true
        });
        canvas.add(_0x5003bc);
        canvas.centerObject(_0x5003bc);
        canvas.setActiveObject(_0x5003bc);
        canvas.requestRenderAll();
        break;
      case "star":
        var _0xb80ac1 = _0x4ecddb(0x5, 0x32, 0x19);
        var _0x2a714e = canvas.getCenter();
        var _0x5930c7 = new fabric.Polygon(_0xb80ac1, {
          'fill': '',
          'stroke': 'black',
          'left': 0x64,
          'top': 0xa,
          'strokeWidth': 0x1,
          'strokeLineJoin': 'bevil',
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': "center",
          'originY': "center",
          'strokeUniform': true
        }, false);
        canvas.add(_0x5930c7);
        canvas.centerObject(_0x5930c7);
        canvas.setActiveObject(_0x5930c7);
        canvas.requestRenderAll();
        ;
        function _0x4ecddb(_0x2f9d2b, _0x2286ee, _0xcd5872) {
          var _0x3a79f7 = Math.PI / _0x2f9d2b;
          var _0x3885b1 = [];
          var _0x21841e = 0x0;
          for (var _0x33a2cb = 0x0; _0x33a2cb < _0x2f9d2b; _0x33a2cb++) {
            var _0x5a0571 = _0x2286ee + Math.cos(_0x21841e) * _0x2286ee;
            var _0x14a61a = _0x2286ee + Math.sin(_0x21841e) * _0x2286ee;
            _0x3885b1.push({
              'x': _0x5a0571,
              'y': _0x14a61a
            });
            _0x21841e += _0x3a79f7;
            _0x5a0571 = _0x2286ee + Math.cos(_0x21841e) * _0xcd5872;
            _0x14a61a = _0x2286ee + Math.sin(_0x21841e) * _0xcd5872;
            _0x3885b1.push({
              'x': _0x5a0571,
              'y': _0x14a61a
            });
            _0x21841e += _0x3a79f7;
          }
          return _0x3885b1;
        }
        break;
      case "pentagon":
        var _0x2a714e = canvas.getCenter();
        var _0xbc7fa1 = new fabric.Polyline([{
          'x': 0xc8,
          'y': 0xa
        }, {
          'x': 0xfa,
          'y': 0x32
        }, {
          'x': 0xfa,
          'y': 0xb4
        }, {
          'x': 0x96,
          'y': 0xb4
        }, {
          'x': 0x96,
          'y': 0x32
        }, {
          'x': 0xc8,
          'y': 0xa
        }], {
          'stroke': "black",
          'strokeWidth': 0x1,
          'fill': '',
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': 'center',
          'originY': 'center',
          'statefullCache': "false",
          'strokeUniform': true
        });
        canvas.add(_0xbc7fa1);
        canvas.centerObject(_0xbc7fa1);
        canvas.setActiveObject(_0xbc7fa1);
        canvas.requestRenderAll();
        break;
      case "diamond":
        var _0x2a714e = canvas.getCenter();
        var _0x44c31d = new fabric.Rect({
          'left': 0x64,
          'top': 0x32,
          'fill': '',
          'width': 0x32,
          'height': 0x32,
          'stroke': "black",
          'rx': 0xa,
          'ry': 0xa,
          'angle': 0x2d,
          'scaleX': 0x3,
          'scaleY': 0x3,
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': 'center',
          'originY': "center",
          'hasControls': true,
          'strokeUniform': true
        });
        canvas.add(_0x44c31d);
        canvas.centerObject(_0x44c31d);
        canvas.setActiveObject(_0x44c31d);
        canvas.requestRenderAll();
        break;
      case 'line':
        var _0x2a714e = canvas.getCenter();
        var _0x4bb52f = new fabric.Line([0x32, 0xa, 0xc8, 0x96], {
          'stroke': "black",
          'left': _0x2a714e.left,
          'top': _0x2a714e.top,
          'originX': 'center',
          'originY': 'center',
          'hasControls': true,
          'strokeUniform': true
        });
        canvas.add(_0x4bb52f);
        canvas.centerObject(_0x4bb52f);
        canvas.setActiveObject(_0x4bb52f);
        canvas.requestRenderAll();
        break;
    }
  }
});
function renderIcon(_0x121cbf) {
  return function _0x19644c(_0x2e009a, _0x36834b, _0x238a6c, _0x1c1034, _0x4a430b) {
    var _0x203844 = this.cornerSize;
    _0x2e009a.save();
    _0x2e009a.translate(_0x36834b, _0x238a6c);
    _0x2e009a.rotate(fabric.util.degreesToRadians(_0x4a430b.angle));
    _0x2e009a.drawImage(_0x121cbf, -_0x203844 / 0x2, -_0x203844 / 0x2, _0x203844, _0x203844);
    _0x2e009a.restore();
  };
}
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  'x': 0.5,
  'y': -0.5,
  'offsetY': -0x10,
  'offsetX': 0x10,
  'cursorStyle': "pointer",
  'mouseUpHandler': deleteObject,
  'render': renderIcon(deleteImg),
  'cornerSize': 0x18
});
fabric.Object.prototype.controls.clone = new fabric.Control({
  'x': -0.5,
  'y': -0.5,
  'offsetY': -0x10,
  'offsetX': -0x10,
  'cursorStyle': "pointer",
  'mouseUpHandler': cloneObject,
  'render': renderIcon(cloneImg),
  'cornerSize': 0x18
});
function deleteObject(_0x16fa7c, event) {
  var _0x3a947d = event.target;
  var _0x5a0de0 = _0x3a947d.canvas;
  _0x5a0de0.remove(_0x3a947d);
  _0x5a0de0.renderAll();
}
function cloneObject(_0x2cacf8, _0x371e47) {
  var _0x5c23f6 = _0x371e47.target;
  var _0xb0df09 = _0x5c23f6.canvas;
  _0x5c23f6.clone(function (_0x4e05f1) {
    _0x4e05f1.left += 0xa;
    _0x4e05f1.top += 0xa;
    _0xb0df09.add(_0x4e05f1);
  });
}
document.getElementById("colorPicker2").onchange = function () {
  console.log(this.value);
  canvas.setBackgroundColor(this.value);
  canvas.renderAll();
};
document.getElementById("file2").addEventListener("change", function (_0x382039) {
  var _0x33f7d6 = _0x382039.target.files[0x0];
  var _0x7266d0 = new FileReader();
  _0x7266d0.onload = function (_0x3a008f) {
    var _0x3e533a = _0x3a008f.target.result;
    fabric.Image.fromURL(_0x3e533a, function (_0x156c8a) {
      canvas.setBackgroundImage(_0x156c8a, canvas.renderAll.bind(canvas), {
        'scaleX': canvas.width / _0x156c8a.width,
        'scaleY': canvas.height / _0x156c8a.height
      });
    });
  };
  _0x7266d0.readAsDataURL(_0x33f7d6);
});
function additioncan(_0x18fd4a) {
  var _0x9dade3 = document.getElementById('zbcanvas');
  var _0x55c222 = document.getElementsByClassName('upper-canvas')[0x0];
  var _0xf60d5f = document.getElementById("enterCanvasWidth");
  result = _0xf60d5f;
  var _0x5f5417 = 0x0;
  _0x5f5417 = parseInt(result.value);
  _0x5f5417 = _0x5f5417 + 0x1;
  result.value = _0x5f5417;
  console.log(_0x5f5417);
  console.log(_0xf60d5f.value);
  _0x9dade3.style.width = _0x5f5417 + 'cm';
  _0x55c222.style.width = _0x5f5417 + 'cm';
  canvas.renderAll();
  var event = new CustomEvent('canvasResize');
  document.dispatchEvent(event);
}
function substcan(_0x1198db) {
  var _0x68bcf = document.getElementById("zbcanvas");
  var _0x4bd104 = document.getElementsByClassName("upper-canvas")[0x0];
  var _0x3fcb99 = document.getElementById("enterCanvasWidth");
  result = _0x3fcb99;
  var _0x410738 = 0x0;
  _0x410738 = parseInt(result.value);
  _0x410738 = _0x410738 - 0x1;
  result.value = _0x410738;
  console.log(_0x410738);
  console.log(_0x3fcb99.value);
  _0x68bcf.style.width = _0x410738 + 'cm';
  _0x4bd104.style.width = _0x410738 + 'cm';
  canvas.renderAll();
  var event = new CustomEvent('canvasResize');
  document.dispatchEvent(event);

}
function additioncanhie(_0x2bbe5d) {
  var _0x32d4ff = document.getElementById("zbcanvas");
  var _0xcfc654 = document.getElementsByClassName("upper-canvas")[0x0];
  var _0x24b645 = document.getElementById("enterCanvasHeight");
  result = _0x24b645;
  var _0x1759bc = 0x0;
  _0x1759bc = parseInt(result.value);
  _0x1759bc = _0x1759bc + 0x1;
  result.value = _0x1759bc;
  _0x32d4ff.style.height = _0x1759bc + 'cm';
  _0xcfc654.style.height = _0x1759bc + 'cm';
  canvas.renderAll();
  var event = new CustomEvent('canvasResize');
  document.dispatchEvent(event);
}
function substcanhie(_0x193164) {
  var _0x5639a5 = document.getElementById('zbcanvas');
  var _0x4c85c6 = document.getElementsByClassName('upper-canvas')[0x0];
  var _0x9e621a = document.getElementById('enterCanvasHeight');
  result = _0x9e621a;
  var _0x24fc5c = 0x0;
  _0x24fc5c = parseInt(result.value);
  _0x24fc5c = _0x24fc5c - 0x1;
  result.value = _0x24fc5c;
  _0x5639a5.style.height = _0x24fc5c + 'cm';
  _0x4c85c6.style.height = _0x24fc5c + 'cm';
  canvas.renderAll();
  var event = new CustomEvent('canvasResize');
  document.dispatchEvent(event);
}
radios5 = document.getElementsByName('fonttype');
var i = 0x0;
for (var max = radios5.length; i < max; i++) {
  radios5[i].onclick = function () {
    if (document.getElementById(this.id).checked == true) {
      if (this.id == "text-cmd-bold") {
        canvas.getActiveObject().set('fontWeight', "bold");
      }
      if (this.id == 'text-cmd-italic') {
        canvas.getActiveObject().set('fontStyle', "italic");
      }
      if (this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("underline", true);
        console.log(this.id);
      }
      if (this.id == "text-cmd-linethrough") {
        canvas.getActiveObject().set("linethrough", true);
      }
      if (this.id == "text-cmd-overline") {
        canvas.getActiveObject().set("overline", true);
      }
    } else {
      if (this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", '');
      }
      if (this.id == 'text-cmd-italic') {
        canvas.getActiveObject().set('fontStyle', '');
      }
      if (this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("underline", false);
      }
      if (this.id == 'text-cmd-linethrough') {
        canvas.getActiveObject().set("linethrough", false);
      }
      if (this.id == "text-cmd-overline") {
        canvas.getActiveObject().set('overline', false);
      }
    }
    canvas.renderAll();
  };
}
;
document.getElementById("colorPicker").onchange = function () {
  console.log(this.value);
  canvas.getActiveObject().set("fill", this.value);
  canvas.renderAll();
};
document.getElementById("font-family").onchange = function () {
  canvas.getActiveObject().set('fontFamily', this.value);
  canvas.renderAll();
};
document.getElementById("text-font-size").onchange = function () {
  canvas.getActiveObject().set('fontSize', this.value);
  canvas.renderAll();
};
function txtwidplus(_0x192261) {
  result = document.getElementById("text-font-size");
  var _0xf72f5d = 0x0;
  _0xf72f5d = parseInt(result.value);
  _0xf72f5d = _0xf72f5d + 0x1;
  result.value = _0xf72f5d;
  console.log(_0xf72f5d);
  canvas.getActiveObject().set("fontSize", result.value);
  canvas.renderAll();
}
function txtwidminus(_0x13e0cf) {
  result = document.getElementById("text-font-size");
  var _0x55e078 = 0x0;
  _0x55e078 = parseInt(result.value);
  _0x55e078 = _0x55e078 - 0x1;
  result.value = _0x55e078;
  console.log(_0x55e078);
  canvas.getActiveObject().set("fontSize", result.value);
  canvas.renderAll();
}
function txtstrokeplus(_0x24a5ed) {
  result = document.getElementById("text-stroke-width");
  var _0x224209 = 0x0;
  _0x224209 = parseInt(result.value);
  _0x224209 = _0x224209 + 0x1;
  result.value = _0x224209;
  console.log(_0x224209);
  canvas.getActiveObject().set("strokeWidth", result.value);
  canvas.renderAll();
}
function txtstrokeminus(_0x36e851) {
  result = document.getElementById("text-stroke-width");
  var _0x1f2c00 = 0x0;
  _0x1f2c00 = parseInt(result.value);
  _0x1f2c00 = _0x1f2c00 - 0x1;
  result.value = _0x1f2c00;
  console.log(_0x1f2c00);
  canvas.getActiveObject().set("strokeWidth", result.value);
  canvas.renderAll();
}
document.getElementById('text-align').onchange = function () {
  canvas.getActiveObject().set("textAlign", this.value);
  canvas.renderAll();
};
document.getElementById("text-lines-bg-color").onchange = function () {
  console.log(this.value);
  canvas.getActiveObject().set('textBackgroundColor', this.value);
  canvas.renderAll();
};
document.getElementById("text-stroke-color").onchange = function () {
  console.log(this.value);
  canvas.getActiveObject().set("stroke", this.value);
  canvas.renderAll();
};
document.getElementById("colorPicker1").onchange = function () {
  console.log(this.value);
  canvas.getActiveObject().set("fill", this.value);
  canvas.renderAll();
};
document.getElementById("storkeColor").onchange = function () {
  console.log(this.value);
  canvas.getActiveObject().set("stroke", this.value);
  canvas.renderAll();
};
$("#control_border").change(function () {
  var _0x3ba1a0 = parseInt($(this).val());
  var _0x36288d = canvas.getActiveObject();
  if (_0x36288d == undefined) {
    alert("Please select the Object");
    return false;
  }
  _0x36288d.set({
    'strokeWidth': _0x3ba1a0
  });
  canvas.renderAll();
});
var objectToSendBack;
var objectBringToFront;
canvas.on("selection:created", function (_0x331b48) {
  objectToSendBack = _0x331b48.target;
});
canvas.on("selection:updated", function (_0x576644) {
  objectToSendBack = _0x576644.target;
});
var sendSelectedObjectBack = function () {
  console.log(event.target);
  canvas.sendToBack(objectToSendBack);
};
canvas.on('selection:created', function (_0x298ebb) {
  objectBringToFront = _0x298ebb.target;
});
canvas.on("selection:updated", function (_0x5bfb79) {
  objectBringToFront = _0x5bfb79.target;
});
var sendSelectedObjectforward = function () {
  console.log(event.target);
  canvas.bringForward(objectBringToFront);
};

function updateObjectProperty(object) {
  var objprop = document.getElementById("shapespop");
  //console.log(object);
  objprop.querySelector("#objectWidth").value = pxToCm(object.width * object.scaleX);
  objprop.querySelector("#objectHeight").value = pxToCm(object.height * object.scaleY);
}

canvas.on("selection:cleared", function () {
  document.getElementById("shapespop").style.display = "none";
})

canvas.on("selection:created", onObjectSelected);
function onObjectSelected() {
  var _0x2c4d0f = canvas.getActiveObject().type ? canvas.getActiveObject().type : '';
  console.log(_0x2c4d0f);
  if (_0x2c4d0f == "i-text") {
    document.getElementById("mydiv").style.display = "block";
    document.getElementById("shapespop").style.display = "none";
  } else if (_0x2c4d0f == "textbox") {
    document.getElementById("mydiv").style.display = 'block';
    document.getElementById("shapespop").style.display = 'none';
  } else {
    document.getElementById("mydiv").style.display = "none";
    document.getElementById("shapespop").style.display = "block";
    updateObjectProperty(canvas.getActiveObject());
  }
};

canvas.on('object:scaling', function (e) {
  updateObjectProperty(e.target);
});

canvas.on('selection:updated', onObjectSelected);
function onObjectSelected() {
  var _0x33ff20 = canvas.getActiveObject().type ? canvas.getActiveObject().type : '';
  if (_0x33ff20 == "i-text") {
    document.getElementById("mydiv").style.display = 'block';
    document.getElementById("shapespop").style.display = "none";
  } else if (_0x33ff20 == 'textbox') {
    document.getElementById('mydiv').style.display = 'block';
    document.getElementById("shapespop").style.display = 'none';
  } else {
    document.getElementById("mydiv").style.display = "none";
    document.getElementById("shapespop").style.display = "block";
    updateObjectProperty(canvas.getActiveObject());
  }

  const activeObject = _0x33ff20;
  if (activeObject && activeObject.type === 'image') {
    // Display the size of the image while moving
    displayImageSize(activeObject);
  }
}
;
var isRedoing = false;
var h = [];
canvas.on("object:added", function () {
  if (!isRedoing) {
    h = [];
  }
  isRedoing = false;
});
document.onkeyup = function (_0x1dfc93) {
  event.preventDefault();
  if (_0x1dfc93.ctrlKey && _0x1dfc93.which == 0x43) {
    canvas.getActiveObject().clone(function (_0x17e805) {
      _clipboard = _0x17e805;
    });
  } else {
    if (_0x1dfc93.ctrlKey && _0x1dfc93.which == 0x56) {
      _clipboard.clone(function (_0xc6d90f) {
        canvas.discardActiveObject();
        _0xc6d90f.set({
          'left': _0xc6d90f.left + 0xa,
          'top': _0xc6d90f.top + 0xa,
          'evented': true
        });
        if (_0xc6d90f.type === "activeSelection") {
          _0xc6d90f.canvas = canvas;
          _0xc6d90f.forEachObject(function (_0x2b6c09) {
            canvas.add(_0x2b6c09);
          });
          _0xc6d90f.setCoords();
        } else {
          canvas.add(_0xc6d90f);
        }
        _clipboard.top += 0xa;
        _clipboard.left += 0xa;
        canvas.setActiveObject(_0xc6d90f);
        canvas.requestRenderAll();
      });
    } else {
      if (_0x1dfc93.which == 0x2e) {
        var _0x3c4a54 = canvas.getActiveObject();
        if (_0x3c4a54.type === "activeSelection") {
          _0x3c4a54.forEachObject(function (_0x51e858) {
            console.log(_0x51e858);
            canvas.remove(_0x51e858);
          });
        } else {
          canvas.remove(_0x3c4a54);
        }
        canvas.discardActiveObject();
        canvas.requestRenderAll();
      } else {
        if (_0x1dfc93.ctrlKey && _0x1dfc93.which == 0x5a) {
          if (canvas._objects.length > 0x0) {
            h.push(canvas._objects.pop());
            canvas.renderAll();
          }
        } else {
          if (_0x1dfc93.ctrlKey && _0x1dfc93.which == 0x59) {
            if (h.length > 0x0) {
              isRedoing = true;
              canvas.add(h.pop());
            }
          } else {
            if (_0x1dfc93.altKey && _0x1dfc93.which == 0x47) {
              if (!canvas.getActiveObject()) {
                return;
              }
              if (canvas.getActiveObject().type !== "activeSelection") {
                return;
              }
              canvas.getActiveObject().toGroup();
              canvas.requestRenderAll();
            } else {
              if (_0x1dfc93.altKey && _0x1dfc93.which == 0x55) {
                if (!canvas.getActiveObject()) {
                  return;
                }
                if (canvas.getActiveObject().type !== "group") {
                  return;
                }
                canvas.getActiveObject().toActiveSelection();
                canvas.requestRenderAll();
              }
            }
          }
        }
      }
    }
  }
};