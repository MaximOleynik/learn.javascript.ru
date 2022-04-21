let calculator = {
    read: function () {
        this.num1 = +prompt("число 1");
        this.num2 = +prompt("число 2");
    },

    sum: function() {
        return this.num1 + this.num2;
    },

    mul: function() {
        return this.num1 * this.num2;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );