function insert_Row() {
    let tab = document.getElementById("sampleTable");
    let row = tab.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "New Cell1"; 
    cell2.innerHTML = "New Cell2"; 
}

window.onload = function() {
    let btn = document.querySelector('input[type="button"]');
    btn.addEventListener("click", insert_Row);
}
