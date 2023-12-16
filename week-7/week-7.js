var mytable = [];
function Tbl() {
        var id = document.getElementById("id").value;
    var productId = document.getElementById("productId").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("quantity").value;
    var totalValue = document.getElementById("totalValue").value;
    var obj = {
        "id": id,
        "productId": productId,
        "description": description,
        "price": price,
        "totalValue": totalValue,
    };
    mytable.push(obj);
    //create table
    var html = "<table>";
    mytable.forEach(function(entry)); {
        html += "<tr>";
        for (var k in entry) {
            html += "<td>" + entry[k] + "</td>";
        }
        html += "</tr>";
     }};
     html += "</table>";
     document.getElementById("result").innerHTML = html;
    