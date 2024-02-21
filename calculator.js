    function calculate(x, operator, y) {
        let result;
    
        switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y !== 0 ? x / y : 'Error: Division by zero';
            break;
        case '%':
            result = y !== 0 ? x % y : 'Error: Modulus by zero';
            break;
        default:
            result = 'Error: Invalid operator';
            break;
        }
    
        return result;
    }

    function isNumeric(value) {
        return !isNaN(value) && isFinite(value);
    }

    function calcLoop() {
        const table = document.createElement('table');
        table.innerHTML = '<tr bgcolor="black"><th width="100" style="color: white;">x</th><th width="100" style="color: white;">operator</th><th width="100" style="color: white;">y</th><th width="100" style="color: white;">result</th></tr>';

        const totalTable = document.createElement('table');
        totalTable.innerHTML = '<tr bgcolor="black"><th width="100" style="color: white;">Min</th><th width="100" style="color: white;">Max</th><th width="100" style="color: white;">Avg</th><th width="100" style="color: white;">Total</th></tr>';
        const totals = [];

        while (true) {
            const xInput = prompt("Enter the first number x");
            const opInput = prompt("Enter either +,-,/,*,%");
            const yInput = prompt("Enter the second number y");
            
            const x = parseFloat(xInput);
            const y = parseFloat(yInput);
            
            const result = calculate(x,opInput,y);

            if(!isNumeric(x) || !isNumeric(y)) {
                const row = table.insertRow();
                row.style.backgroundColor = "#006400";
                row.style.color = 'white';
                row.innerHTML = `<td width="100" style="text-align: center;">${xInput}</td><td width="100" style="text-align: center;">${opInput}</td><td width="100" style="text-align: center;">${yInput}</td><td width="100" style="text-align: center;">${"Wrong character input"}</td>`;
            } else {
                const row = table.insertRow();
                row.style.backgroundColor = "#006400";
                row.style.color = 'white';
                row.innerHTML = `<td width="100" style="text-align: center;">${x}</td><td width="100" style="text-align: center;">${opInput}</td><td width="100" style="text-align: center;">${y}</td><td width="100" style="text-align: center;">${result}</td>`;
                totals.push(result);
            } 

            const end = confirm("Continue?");
            if (!end) {
                // User clicked cancel, exit the loop
                break;
            }
        }

        const results = totals.filter(isNumeric);
        const totalRow = totalTable.insertRow();
        totalRow.style.backgroundColor = "gold";
        totalRow.innerHTML = `<td width="100" style="text-align: center;">${Math.min(...results)}</td><td width="100" style="text-align: center;">${Math.max(...results)}</td><td width="100" style="text-align: center;">${results.reduce((acc, num) => acc + num, 0) / results.length}</td><td width="100" style="text-align: center;">${results.reduce((acc, num) => acc + num, 0)}</td>`

        document.body.appendChild(table);
        document.body.appendChild(totalTable);
    }

window.onload = calcLoop;