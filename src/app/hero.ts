export class Hero {
    public id: number;
    public nick: string;
    public img: string;
    public prof: string;
    constructor(id: number, nick: string, img: string, prof: string) {
      this.id = id;
      this.nick = nick;
      this.img = img;
      this.prof = prof;
    }
  }