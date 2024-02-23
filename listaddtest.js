var counter = 0
var tbr = 0

function addrow() {
    tbr += 1
    var table = document.getElementById("table1");
    var newitem = document.createElement("tr");
    newitem.setAttribute("id", "tbr"+tbr)
    table.appendChild(newitem);
}

function addcell() {
    if(counter<= 2){
        var inp = prompt("Enter a string");
        var table = document.getElementById("table1");
        var newitem = document.createElement("td");
        newitem.innerText=inp;
        table.appendChild(newitem);
        counter += 1;
    }
    else if (counter >= 2){
        counter = 0;
        alert("You have reached the maximum cells for this row.");
    }
}

function removerow() {
    var tablerow = document.getElementById("table1");
    table1.removeChild("table1:last-child");
}

function removecell() {
    document.getElementById("table1").removeChild("table1:last-child");
}

/* 
1. Date, Location, Time
2. If you click on add table row, add a table row
3. table row must be 
*/