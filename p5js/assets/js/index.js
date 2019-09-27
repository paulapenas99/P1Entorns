$(document).ready(function() {
    // $('#btn_num1').click(function() {
    document.getElementById("inputRange").innerHTML = document.getElementById("range").value;

});

function get_number(num) {
    let val = document.getElementById("range").value;
    window.location.href = "assets/pages/numbers.html?num="+num+"&vel="+val;
}

function showVal(value) {
    document.getElementById("inputRange").innerHTML = value;
}
