export interface UserProps {
  id: string;
  name: string;
  dob: Date;
  address: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

class User {
  private readonly id: string | undefined;
  private readonly name: string;
  private readonly dob: Date;
  private readonly address: string;
  private readonly description: string;

  constructor(props: UserProps, id?: string) {
    this.id = id;
    this.name = props.name;
    this.dob = props.dob;
    this.address = props.address;
    this.description = props.description;
  }

  toJson(): Partial<UserProps> {
    return {
      id: this.id,
      name: this.name,
      dob: this.dob,
      address: this.address,
      description: this.description,
    };
  }
}

export default User;
