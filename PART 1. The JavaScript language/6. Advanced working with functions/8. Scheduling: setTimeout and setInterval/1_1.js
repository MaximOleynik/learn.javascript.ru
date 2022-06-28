function printNumbers(from, to) {
    function f() {
        if(from <= to) {
            alert(from++);
        }
    }

    setInterval(f, 1000, from, to);
}

printNumbers(1, 3);