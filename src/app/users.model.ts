
export class User {
  constructor(public first: string, public last: string, public eyecolor: string){
    this.first = first;
    this.last = last;
    this.eyecolor = eyecolor;
  }

  users: User[] = [
    new User("Alex","Vlash","blue"),
    new User("John","Doe","green"),
    new User("Andy","Gomez","green"),
    new User("Nicu","Ploaie","brown"),
    new User("Linda","Cunning","brown"),
    new User("Gus","Fring","blue"),
    new User("Josh","Norring","green"),
    new User("Ruben","Growings","brown")
  ]
}
