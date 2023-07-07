console.log('triangle');

class Triangle{ // composto da una classe precedente (Segment)
    constructor(xA, yA, xB, yB, xC, yC){
        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }
    // perimetro
    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }


// ESERCIZIO ----------------------------
// funzione Area(){} // formula di erone
// semiperimetro
// 3 lati

    get area(){
        let semiPerimeter = (this.segmentAB.length + this.segmentBC.length + this.segmentCA.length) / 2;
        let area = (Math.sqrt(semiPerimeter * (semiPerimeter - this.segmentAB.length)*(semiPerimeter - this.segmentBC.length)*(semiPerimeter - this.segmentCA.length)));
        return area;
    }

    isRectangle(){ // return boolean

        // if ((AB**2 === (BC **2) + (CA ** 2)) || (BC**2 === (CA**2) + (AB**2)) || (CA**2 === (AB**2) + (BC**2))) {
        //     return true;           
        // } else {
        //     return false;
        // }

        if ((this.segmentAB.length **2 === (this.segmentBC.length **2) + (this.segmentCA.length ** 2)) || (this.segmentBC.length **2 === (this.segmentCA.length **2) + (this.segmentAB.length ** 2)) || (this.segmentCA.length **2 === (this.segmentAB.length **2) + (this.segmentBC.length **2))) {
            return true;           
        } else {
            return false;
        }
    }

        //qui sotto la stessa cosa di sopra fatta da me e Francesca in classe però un po' più ordinato e leggibile

    isRectangle2(){
        const isHypotenuseAB = this.segmentAB.length **2 === (this.segmentBC.length **2) + (this.segmentCA.length ** 2);
        const isHypotenuseBC = this.segmentBC.length **2 === (this.segmentCA.length **2) + (this.segmentAB.length ** 2);
        const isHypotenuseCA = this.segmentCA.length **2 === (this.segmentAB.length **2) + (this.segmentBC.length ** 2);
        if (isHypotenuseAB || isHypotenuseBC || isHypotenuseCA){
            return true;
        }

        return false;
    }



}