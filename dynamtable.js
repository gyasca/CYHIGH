ordercount = 1;

function addstudent() {
    //retrieve data from form
    var order = document.form1.order.value;
    var date = document.form1.dates.value;
    var location = document.form1.location.value;
    var time = document.form1.time.value;

    //create row
    var tr = document.createElement("tr");

    //create cells and append it to row parent.
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));

    //assign a id to order cells
    td1.setAttribute("id","ordercell");

    //assign the values of the order, date, time and location into the table cells
    td1.innerHTML = order;
    td2.innerHTML = date;
    td3.innerHTML = location;
    td4.innerHTML = time;
    td5.innerHTML = '<input type="button" name="add" value="&times;" onclick="delstudent(this);" class="btndel">';

    //append this row(already filled with the valued cells) into the table
    document.getElementById("tbl").appendChild(tr);
    

    //remove fields of the form1 inputs
    document.getElementById("field1").value=parseInt(order)+ordercount;
    document.getElementById("field2").value="";
    document.getElementById("field3").value="";
    document.getElementById("field4").value="";

    //listen for order click then run the orderchange function
    document.getElementById("ordercell").addEventListener("click", orderchange);
}

//remove row
function delstudent(item){
    //get the delete button's parent's(td) parent(tr).
    var s = item.parentNode.parentNode;
    //get up to the tbody, then remove the tr.
    s.parentNode.removeChild(s);
}




function orderchange(){
    neworder = parseInt(prompt("Enter a new order number"));
    while(neworder.isNum == false){
        alert("Please enter a numeric value!");
        neworder = parseInt(prompt("Enter a new order number"));
    }
    document.getElementById("ordercell").innerText=neworder;
}
