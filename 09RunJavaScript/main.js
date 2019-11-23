function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    return this;
};

function Mouse(name) {
    this.name = name;
}

var Lem = new Cat('Lem');
var Mickey = new Mouse('Chiếp Chiếp');
Lem.eat(Mickey);

console.log(Lem);