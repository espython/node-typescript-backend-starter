import hello from "./hello";
hello;

console.log("hello I am  node app from typescript");
console.log("hello I am  node app from typescript");

class Name {
  // private name: string;
  constructor(private name: string) {
    this.name = name;
    console.log("my name is ==> ", this.name);
  }
  public setName(name: string): void {
    this.name = name;
    console.log("my name is ==> ", this.name);
  }
  /**
   * getName
   */
  public getName(): string {
    return this.name;
  }
}

const myName = new Name(`eslam`);
console.log(myName.getName());
myName.setName("farida");
