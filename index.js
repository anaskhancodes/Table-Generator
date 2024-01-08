function generateTable(event) {
    event.preventDefault();

    let HTML_input_1 = document.getElementById('table-num');
    let HTML_input_2 = document.getElementById('how-much-table-num');

    document.getElementById('table-box').innerHTML = "";

    let table = parseInt(HTML_input_1.value);
    let howMuchTable = parseInt(HTML_input_2.value);

    if (!isNaN(table) && !isNaN(howMuchTable)) {
        let tableElement = document.createElement('table');

        for (let i = 1; i <= howMuchTable; i++) {
            let row = tableElement.insertRow();

            let cell = row.insertCell();

            cell.textContent = ` ${table} x ${i} = ${table * i}`;
        }
        document.getElementById('table-box').appendChild(tableElement);
    }

    if (!table || !howMuchTable) {
        // console.log('Please select')
        let Element = document.createElement('h1');
        console.log('Please fill the given input fields');
        // let h1 = document.querySelector('h1');

        document.getElementById('table-box').appendChild(Element);
    }

}
