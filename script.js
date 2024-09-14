function insert_Row() {
    let btn = document.querySelector('input[type="button"]');
    btn.addEventListener("click",function() {
        let tab = document.getElementById("sampleTable");
        let row = tab.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "New Cell1"; // changed from "NEW CELL1"
        cell2.innerHTML = "New Cell2"; // changed from "NEW CELL2"
    });
}

window.onload = function() {
    insert_Row();
}

