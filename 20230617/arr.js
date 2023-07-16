const arr = [1, 2, 3, 4, 5]
let i = 0
let output = []
while (i < arr.length) {
    output = output + (arr[i] * arr[i]) + ' '
    i = i + 1
}
console.log(output)