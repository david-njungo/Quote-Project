export class Quotess {
    showDescription:boolean;
    constructor(public authorName:string,public authorEmail:string,public quote:string,public sendwhen:Date){ 
        this.showDescription=false    
    }
}
