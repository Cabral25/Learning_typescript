function odd_even(number: number): string {
    if (number % 2 == 0) {
        return 'even'
    }
    return 'odd'
}

let test = odd_even(92)
console.log(test)