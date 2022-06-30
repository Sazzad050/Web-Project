 let table = document.querySelector('.add-row');
 let div = document.querySelector('.add-row-btn');

 var totalBill = 0;
 var totalDiscount = 0;

var x = 0;
var y = 0;
// functions
let createTask = function() {
    x = x + 1;
    let input = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let input4 = document.createElement('input');

    let table_row = document.createElement('tr');
    let calculate_btn = document.createElement('button');

    let select = document.createElement('select');
    let select2 = document.createElement('select');

    let option = document.createElement('option');
    let option2 = document.createElement('option');

    let table_data = document.createElement('td');
    let table_data2 = document.createElement('td');
    let table_data3 = document.createElement('td');
    let table_data4 = document.createElement('td');
    let table_data5 = document.createElement('td');
    let table_data6 = document.createElement('td');

    table_data.className = "custom-frm";
    table_data2.className = "custom-frm";
    table_data3.className = "custom-frm";
    table_data4.className = "custom-frm";
    table_data5.className = "custom-frm";
    table_data6.className = "custom-frm";
    table_row.className = "new-table-row";
    calculate_btn.className = "custom-frm2";
    
    input.id = "price".concat(x);
    input2.id = "discount".concat(x);
    input3.id = "total1".concat(x);
    input4.id = "total10".concat(x);

    input.type = "number";
    input2.type = "number";
    input3.type = "number";
    input4.type = "number";
    
    calculate_btn.style.marginRight = "5px"

    input3.readOnly = true
    input4.readOnly = true

    option.text = "select";
    option2.text = "select";
    calculate_btn.innerText = "=";

    select.appendChild(option);
    select2.appendChild(option2);

    table_data5.appendChild(calculate_btn);

    table_data.appendChild(select);
    table_data2.appendChild(select2);
    table_data3.appendChild(input);
    table_data4.appendChild(input2);
    table_data5.appendChild(input3);
    table_data6.appendChild(input4);

    table_row.appendChild(table_data);
    table_row.appendChild(table_data2);
    table_row.appendChild(table_data3);
    table_row.appendChild(table_data4);
    table_row.appendChild(table_data5);
    table_row.appendChild(table_data6);

    return table_row;
}

let addTask = function(event) {
    y = y + 1;
    event.preventDefault();
    let elements = createTask();
    table.appendChild(elements);


    let btn_cal = document.querySelector('.custom-frm2');
    btn_cal.onclick = function(event) {
        var numVal1 = Number(document.getElementById("price".concat(y)).value);
        var numVal2 = Number(document.getElementById("discount".concat(y)).value) / 100 * numVal1;
        var subTotal = document.getElementById("sub-total");
        
        var subTotal_discount = document.getElementById("discount-sub-total");
        
        var netPayable = document.getElementById("net-payable");
        var totalValue = numVal2;
        var finalvalue= numVal1 - totalValue 
        document.getElementById("total1".concat(y)).value = totalValue.toFixed(2);
        document.getElementById("total10".concat(y)).value =finalvalue.toFixed(2);
        subTotal.value = finalvalue + totalBill;
        subTotal_discount.value = numVal2 + totalDiscount;
        var tax = Number((subTotal.value * 2) / 100);
        netPayable.value = (Number(subTotal.value) + tax);
    }
}

div.addEventListener('click', addTask);

let getPrice = function() {
    var numVal1 = Number(document.getElementById("price").value);
    var numVal2 = Number(document.getElementById("discount").value) / 100 * numVal1;
    var subTotal = document.getElementById("sub-total");
    var subTotal_discount = document.getElementById("discount-sub-total");
    var netPayable = document.getElementById("net-payable");
    var totalValue = numVal2;
    var finalvalue= numVal1 - totalValue;
    document.getElementById("total1").value = totalValue.toFixed(2);
    document.getElementById("total10").value =finalvalue.toFixed(2);
    subTotal.value = finalvalue;
    totalBill = finalvalue;
    subTotal_discount.value = numVal2;
    totalDiscount = numVal2;
    var tax = Number((subTotal.value * 2) / 100);
    netPayable.value = (Number(subTotal.value) + tax);
}

