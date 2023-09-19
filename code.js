function sum(a) {
    var sum = 0; //found plus one error caused by a[0]
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
