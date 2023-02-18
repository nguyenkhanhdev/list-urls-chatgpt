function saveData() {
	var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
    var price = document.getElementById("price").value;
    var address = document.getElementById("address").value;
    var description = document.getElementById("description").value;
    var url = document.getElementById("url").value;
    var data = {
        id: id,
        name: name,
        phone: phone,
        price: price,
        address: address,
        description: description,
        url: url
    };
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadData();
        }
    };
    xmlhttp.open("POST", "save.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("data=" + JSON.stringify(data));
    
    document.getElementById("myForm").reset();
    
}

function loadData() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var data = JSON.parse(this.responseText);
var table = document.getElementById("myTable");
var tbody = table.getElementsByTagName("tbody")[0];
tbody.innerHTML = "";

for (var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");

    var tdId = document.createElement("td");
    tdId.innerText = data[i].id;
    tr.appendChild(tdId);

    var tdName = document.createElement("td");
    tdName.innerText = data[i].name;
    tr.appendChild(tdName);

    var tdPhone = document.createElement("td");
    tdPhone.innerText = data[i].phone;
    tr.appendChild(tdPhone);

    var tdPrice = document.createElement("td");
    tdPrice.innerText = data[i].price;
    tr.appendChild(tdPrice);

    var tdAddress = document.createElement("td");
    tdAddress.innerText = data[i].address;
    tr.appendChild(tdAddress);

    var tdDescription = document.createElement("td");
    tdDescription.innerText = data[i].description;
    tr.appendChild(tdDescription);

    var tdUrl = document.createElement("td");
    tdUrl.innerHTML = "<a href='" + data[i].url + "' target='_blank'>" + data[i].url + "</a>";
    tr.appendChild(tdUrl);

    var tdAction = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("data-id", data[i].id);
    deleteButton.onclick = function() {
        var id = this.getAttribute("data-id");
        deleteData(id);
    };
    tdAction.appendChild(deleteButton);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
}
}
};
xmlhttp.open("GET", "load.php", true);
xmlhttp.send();

}

function deleteData(id) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
loadData();
}
};
xmlhttp.open("POST", "delete.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("id=" + id);
}

loadData();
