window.addEventListener("load", function () {
  // get the canvas HTML element
  const canvas = document.querySelector("canvas");
  // create a 'rendering context' for that canvas
  // we can use this to draw on the canvas element
  const canvasRenderingContext = canvas.getContext("2d");
  canvasRenderingContext.rect(0, 0, 800, 500);
  canvasRenderingContext.fillStyle = "#FFFFFF";
  canvasRenderingContext.fill();
  let drawing = false;

  function startDrawing(e) {
    drawing = true;
    canvasRenderingContext.beginPath();
    draw(e);
  }

  canvas.addEventListener("mousedown", startDrawing);
  function endDrawing(e) {
    drawing = false;
  }

  canvas.addEventListener("mouseup", endDrawing);
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(),
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;

    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  }

  function draw(e) {
    if (!drawing) return;

    let { x, y } = getMousePos(canvas, e);

    canvasRenderingContext.lineTo(x, y);
    canvasRenderingContext.stroke();
  }

  canvas.addEventListener("mousemove", draw);

  const black = document.getElementById("Black");
  black.addEventListener("click", function () {
    changecolour("#000000");
  });

  const blue = document.getElementById("Blue");
  blue.addEventListener("click", function () {
    changecolour("#0096FF");
  });

  const red = document.getElementById("Red");
  red.addEventListener("click", function () {
    changecolour("#C70039");
  });

  const green = document.getElementById("Green");
  green.addEventListener("click", function () {
    console.log("green clicked")
    changecolour("#228B22");
  });

  const white = document.getElementById("Erase");
  white.addEventListener("click", function () {
    changecolour("#FFFFFF");
  });

  const width = document.getElementById("width");
  width.addEventListener("change", function () {
    canvasRenderingContext.lineWidth = width.value;
  });

  const clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    for (let i = 0; i < 5; i++){ 
        canvasRenderingContext.rect(0, 0, 800, 500);
    canvasRenderingContext.fillStyle = "#FFFFFF";
    canvasRenderingContext.fill();}
 
  });


  const color = document.getElementById("colour");

  color.addEventListener("click", function () {
    console.log("changed to pick your own colour on click")
    color.select();
    const newcolour = document.querySelector("#colour").value.trim();
    changecolour(newcolour);
  });
  color.addEventListener("change", function () {
    console.log("changed to pick your own colour on change")
    color.select();
    const newcolour = document.querySelector("#colour").value.trim();
    changecolour(newcolour);
  });

  const toPng = document.getElementById("png");
  toPng.addEventListener("click", function () {
    window.location = canvas.toDataURL("myImage.png");
  });

  function changecolour(newColour) {
    canvasRenderingContext.strokeStyle = newColour;
    //draw();
  }
});
