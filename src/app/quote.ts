export class Quote {

    showDetails: boolean;
    constructor(public id:number,public name: string,public details: string ){
        this.showDetails=false;
    }
}