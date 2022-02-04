console.log(this);

function sample() {
    console.log(this);
}

// sample()

var display = function() {
    console.log(this)
}

// display()

function test() {
    this.newVariable = 'Hello';
}

test()

console.log(newVariable)

var obj = {
    name: 'sumit kushwah',
    log: function() {
        console.log(this);
        var self = this;
        function updateName() {
            self.name = 'amit kushwah';
            console.log(self);
        }
        updateName();
    }
}

console.log(obj.log())

