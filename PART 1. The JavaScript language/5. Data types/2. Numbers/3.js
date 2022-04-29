function readNumber() {
    let num;
    do {
        num = prompt("введите число");
        if (num === "" || num === null) return null;
    } while (typeof num != Number)
    return +num;
}