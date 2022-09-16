function fibonacci(num) {
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    console.log(fibonacci);
}

fibonacci(6)