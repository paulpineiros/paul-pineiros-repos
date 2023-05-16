export class Pokemon {
    id: number;
    name: string;
    imageSrc: string
  
    constructor(id: number, name: string, imageSrc: string) {
      this.id = id;
      this.name = name;
      this.imageSrc = imageSrc
    }
  }