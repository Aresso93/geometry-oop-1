class Employee{    
    constructor(name, surname, department){
        this.personalInfo = new PersonalInfo(name, surname); // va a sostituire il super
        this.department = department;
    }

// abbiamo utilizzato la composizione come alternativa all'ereditarietà
// (non hanno una classe generica dal quale ereditare)
    toString(){
        return this.personalInfo.toString() +
        'Dipartimento: ' + this.department + '\n';
    }
    
}