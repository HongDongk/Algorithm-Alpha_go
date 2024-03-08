class Person {
  constructor(name) {
    this.name = name;
    this.age = 'age';
  }

  static sayHi() {
    console.log('안녕! 코린아');
  }

  static sayError() {
    console.log(this.name, this.age);
  }
}

let person = new Person('Dongkeun');

// Person.sayHi(); // 안녕! 코린아
Person.sayError(); // 안녕! 코린아
