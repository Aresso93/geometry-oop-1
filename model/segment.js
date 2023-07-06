console.log('segment');
// insieme di 2 punti 
// creo le coordinate
class Segment{ // composto da una classe precedente (Point)
    constructor(xA, yA, xB, yB){
        this.pointA = new Point(xA, yA);
        this.pointB = new Point(xB, yB);
    }

// funzione: getLength()
    // getLength(){ 
    //     const deltaX = this.pointA.x - this.pointB.x;
    //     const deltaY = this.pointA.y - this.pointB.y;

    //     const length = Math.sqrt(deltaX ** deltaY ** 2);
    //     return length;
    // }

// proprietà getter --> 

get length(){
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;

        const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        return length;
}




    /*
    
    // se avessi già i punti potrei scrivere così:
    static fromPoints(pointA, pointB){
        const newSegment = new Segment(pointA.x, pointA.y, pointB.x, pointB.y)
        return newSegment;
    }
    
    */
    
}