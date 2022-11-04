let duck = {
  name: 'Дональд',
  color: 'белый',
  age: '1 год',
  text: 'кря кря!',
  getStr: function () {
      console.log(`${this.name}, ${this.color}, ${this.age}`)
  },
  dialog: function () {
      console.log(`${this.text}`)
  },
};

duck.getStr();
duck.dialog();

