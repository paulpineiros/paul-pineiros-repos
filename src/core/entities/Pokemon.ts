export class Pokemon {
    id: number;
    name: string;
    imageSrc: string;
    weight: number;
    types: string[];
    moves: string[]
    sprites: string[];
  
    constructor(
      id: number, 
      name: string, 
      imageSrc: string,
      weight: number,
      types: string[],
      moves: string[],
      sprites: string[]

    ) {
      this.id = id;
      this.name = name;
      this.imageSrc = imageSrc,
      this.weight = weight,
      this.types = types,
      this.moves = moves,
      this.sprites = sprites
    }
  }