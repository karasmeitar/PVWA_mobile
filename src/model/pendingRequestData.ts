export class PendingRequestData{
 requestedBy :string;
 accountName: string;
 timeFrame: string;
 reason: string;

 public constructor(accountName: string,requestedBy:string, timeFrame:string, reason: string){
   this.requestedBy = requestedBy;
   this.accountName = accountName;
   this.timeFrame = timeFrame;
   this.reason = reason;
 }
}
