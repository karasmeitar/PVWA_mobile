export class LoginData{
 password :string;
 userName: string;

 public constructor(userName: string,password:string){
   this.password = password;
   this.userName = userName;
 }
}
