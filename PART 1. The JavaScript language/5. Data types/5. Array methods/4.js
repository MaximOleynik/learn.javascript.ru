function descendingSort(arr) {
    return arr.sort( (a, b) => b - a );
}

let arr = [5, 2, 1, -10, 8];
descendingSort(arr);
alert( arr ); // 8, 5, 2, 1, -10