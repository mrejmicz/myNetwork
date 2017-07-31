export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  }
  phone: string;
  website: string;
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }

  constructor () {

    this.username="";
    this.email="";
    this.address={
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: null,
        lng: null
      }

    };
    this.phone="";
    this.website="";
    this.company = {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  }

}
