let boxes = [];
let spinCount = 0;

function setup(){
    createCanvas(400, 400, WEBGL);
    normalMaterial();

    let box = new Box(0,0,0,200);
    boxes.push(box);
}

function mousePressed(){
    
    let tempBoxes = [];
    for(let box of boxes){
        tempBoxes = tempBoxes.concat(box.Merge());
    }
    boxes = tempBoxes;
}

function draw(){
    background(0);

    rotateX(spinCount * 0.01);
    rotateY(spinCount * 0.01);
    rotateZ(spinCount * 0.01);

    for(let box of boxes){
        box.Show();
    }

    spinCount++;
}