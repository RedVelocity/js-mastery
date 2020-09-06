class Brand {
  get brands() {
    return ['boo', 'haha'];
  }

  constructor() {
    return this;
  }
}

const brand = new Brand();
console.log(brand.brands);
