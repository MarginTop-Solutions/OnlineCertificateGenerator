var canvas = new fabric.Canvas('canvas');
var imagePath = document.getElementById('image').value
console.log(imagePath)
function getValue() {
    var canvas = new fabric.Canvas('canvas');
    var heightCanvas = document.getElementById('height').value;
    var widthCanvas = document.getElementById('width').value;
    var ColorCanvas = document.getElementById('color').value;
   
    var rectangle = new fabric.Rect({
        left: 100,
        top: 100,
        width: widthCanvas,
        height: heightCanvas,
        fill: color,
        
    });
    canvas.add(rectangle);
}


fabric.Image.fromURL('my_image.png', function(oImg) {
    canvas.add(oImg);
  });