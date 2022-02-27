class Box{
    constructor(x,y,z,r){
        this.boxVector = new createVector(x, y, z);
        this.r = r;
    }

    Merge(){
        let boxes = [];
        let newR = this.r / 3;
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                for(let k = -1; k < 2; k++){
                    if(abs(i) + abs(j) + abs(k) > 1){
                        boxes.push(new Box(this.boxVector.x + i * newR, this.boxVector.y + j * newR, this.boxVector.z + k * newR, newR));
                    }
                }
            }
        }
        return boxes;
    }

    Show(){
        push();

        translate(this.boxVector.x,this.boxVector.y,this.boxVector.z);
        box(this.r);

        pop();
    }
}