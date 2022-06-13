n = 10
i = n - 1

while (true) {
    if (i > 0) {
        n *= i
        i--
    }else {
        break
    }
}

console.log(n)