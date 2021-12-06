

for (let line of diagonal_lines) {
    console.log(line);
    seabed.plot_diagonal_line(line);
}

seabed.render(10,10);

two_or_more = [...seabed.vents.values()].filter(x => x>=2).length;

document.write(`Vents with 2 or more lines: ${two_or_more}`)