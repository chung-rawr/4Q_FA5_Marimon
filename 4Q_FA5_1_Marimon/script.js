function generateShape() {
    let number = prompt("Please enter a number:");

    while (isNaN(number) || number.trim() === "") {
        number = prompt("Invalid input. Please enter a valid number:");
    }

    number = parseInt(number, 10);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Number inputted: ${number}</p>`;

    if (number % 2 !== 0) {
        for (let i = number; i >= 1; i--) {
            let row = "";
            for (let j = 0; j < number; j++) {
                row += i + " ";
            }
            const rowDiv = document.createElement('div');
            rowDiv.textContent = row.trim();
            outputDiv.appendChild(rowDiv);
        }
    } else {
        for (let i = number; i >= 1; i--) {
            let row = "";
            for (let j = 0; j < i; j++) {
                row += i + " ";
            }
            const rowDiv = document.createElement('div');
            rowDiv.textContent = row.trim();
            outputDiv.appendChild(rowDiv);
        }
    }
}
