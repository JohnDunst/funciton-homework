function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
console.log (maxOfThree (22,90,68));
