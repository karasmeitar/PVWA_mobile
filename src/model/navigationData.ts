export class NavigationData {
  name :string;
  count: number;
  translatedName: string;

  public constructor(name: string,count:number, translatedName?: string){
    this.name = name;
    this.count = count;
    this.translatedName = translatedName;
  }
}
