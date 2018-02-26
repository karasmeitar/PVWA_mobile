export class LoginData{
 from :number;
 to: number;
 request: string;

 public constructor(userName: string,password:string){
   this.password = password;
   this.userName = userName;
 }
}
