function sum() {
    return this.a + this.b;
}


console.log(sum.call({a: 1, b: 2})); // 3