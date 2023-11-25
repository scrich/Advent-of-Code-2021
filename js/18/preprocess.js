snail_numbers = input.split(/\n/);

console.log(snail_numbers);

snail_array  = []

for (const snail_number of snail_numbers) {
    snail_array.push(JSON.parse(snail_number))
}

console.log(snail_numbers);