window.onload = function() {
    function insert_Row() {
        let btn = document.querySelector('input[type="button"]');
        btn.addEventListener("click",function() {
            let tab = document.getElementById("sampleTable");
            let row = tab.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";
        });
    }
    insert_Row(); // Call the function here
}

