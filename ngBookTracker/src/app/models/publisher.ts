export class Publisher {
  id: number;
  name: string;

  constructor(id: number = 1, name: string = "Scholastic Inc.") {
    this.id = id;
    this.name = name;
  }
}
