// use in controller:
// const user = this.useService...
// if(user) return new Seialized(user);
import { Exclude } from 'class-transformer';

// exemple
export class Serialized {
  id: number;
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<Serialized>) {
    Object.assign(this, partial);
  }
}
