class Location {
  constructor(city) {
    this._city = city;
  }

  getCity() {
    return this._city;
  }

  setCity(value) {
    if (!value) {
      throw new Error("City cannot be empty");
    }
    this._city = value;
  }
}

export default Location;
