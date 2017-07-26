export class User {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: Number,
      lng: Number
    }
  }
  phone: String;
  website: String;
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }

  constructor (user: User) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.address = user.address;
    this.phone = user.phone;
    this.website = user.website;
    this.company = user.company;
  }

}
