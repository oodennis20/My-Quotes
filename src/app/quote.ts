export class Quote {

    public showDetails: boolean;
    constructor(public id:number,public name: string,public details: string, public completeDate: Date){
        this.showDetails=false;
    }
}