document.getElementById("binary_button").onclick = function(){
    var input = document.getElementById("binary");
    var binary = input.value;
    var binary_result = parseInt(binary,2);
    document.getElementById("binary_to_decimal").innerHTML = binary_result;
}
document.getElementById("decimal_button").onclick = function(){
    var input_decimal = document.getElementById("decimal");
    var decimal = input_decimal.value;
    var decimal_result = parseInt(decimal, 10).toString(2)
    document.getElementById("decimal_to_binary").innerHTML = decimal_result;
}
