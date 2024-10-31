const sheeps = [0, 1, 0, 1.1, 1, 1, 0, 0, 1, 0, 1]
let emptyBarn= []
for (let x = 0; x <= sheeps.length - 1; x++) {
    if (!sheeps[x]) {
        emptyBarn.push(sheeps[x])
    }
}
console.log(emptyBarn)