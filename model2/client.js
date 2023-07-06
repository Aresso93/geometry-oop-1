class Client{
    
    constructor(name, surname, address){
        this.personalInfo = new PersonalInfo(name, surname); // va a sostituire il super
        this.address = address;
    }

    toString(){
        return this.personalInfo.toString()+
        'Indirizzo: ' + this.address + '\n';
    }

}