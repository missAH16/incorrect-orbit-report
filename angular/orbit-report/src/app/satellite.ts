

export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;
    constructor(name:string, type:string, launchDate:string, orbitType:string, operational:true){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
    }
}
