export class Quote {

showQuote:boolean ;

  constructor(
    public id: number,
    public name: string,
    public details: string,
    public submitter: string,
    public completeDate: Date) {
      this.showQuote=false
}
}