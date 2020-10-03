class Foo {
  get Bar() {
    this.bar = ['foo', 'bar'];
    return this.bar;
  }

  constructor() {
    return this;
  }
}

const foo = new Foo();
console.log(foo.Bar);
console.log('hello' || 'world');
console.log('foo' && 'bar');
