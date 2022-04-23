function Calculator () {
    this.read = function() {
        this.a = prompt("чило 1");
        this.b = prompt("число 2");
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}