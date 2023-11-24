//비중
const water_sp4499 = 1.016;
const water_sp2599 = 1.071;
const water_sp2499 = 1.068;
const water_sp2699 = 1.067;
const water_sp3099 = 0.875;
const water_sp3199 = 0.903;
const water_s20 = 0.88;

//실배합량
const first_result = 1000;
const SP4499 = first_result/4*3;
const SP2599 = first_result/4;
const SP2499 = first_result/4;
const SP2699 = first_result/4;
const SP3099 = first_result*0.05;
const SP3199 = first_result*0.05;
const S20 = SP2599*0.03;

//실배합 무게
const SP4499_1 = (water_sp4499*SP4499).toFixed(1);
const SP2599_1 = (water_sp2599*SP2599).toFixed(1);
const SP2499_1 = (water_sp2499*SP2499).toFixed(1);
const SP2699_1 = (water_sp2699*SP2699).toFixed(1);
const SP3099_1 = (water_sp3099*SP3099).toFixed(2);
const SP3199_1 = (water_sp3199*SP3199).toFixed(2);
const S20_1 = (water_s20*S20).toFixed(2);


//첫로딩화면
document.getElementById("SP4499_1").innerHTML = SP4499;
document.getElementById("SP2599_1").innerHTML = SP2599;
document.getElementById("SP2499_1").innerHTML = SP2499;
document.getElementById("SP2699_1").innerHTML = SP2699;
document.getElementById("SP3099_1").innerHTML = SP3099;
document.getElementById("SP3199_1").innerHTML = SP3199;
document.getElementById("S20_1").innerHTML = S20;

document.getElementById("SP4499_2").innerHTML = SP4499_1;
document.getElementById("SP2599_2").innerHTML = SP2599_1;
document.getElementById("SP2499_2").innerHTML = SP2499_1;
document.getElementById("SP2699_2").innerHTML = SP2699_1;
document.getElementById("SP3099_2").innerHTML = SP3099_1;
document.getElementById("SP3199_2").innerHTML = SP3199_1;
document.getElementById("S20_2").innerHTML = S20_1;



function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    //실배합량
    var change_SP4499_1 = changeResult/4*3;
    var change_SP2599_1 = changeResult/4;
    var change_SP2499_1 = changeResult/4;
    var change_SP2699_1 = changeResult/4;
    var change_SP3099_1 = changeResult*0.05;
    var change_SP3199_1 = changeResult*0.05;
    var change_S20_1 = change_SP2599_1*0.03;

    //실배합 무게
    var change_SP4499_2 = (water_sp4499*change_SP4499_1).toFixed(1);
    var change_SP2599_2 = (water_sp2599*change_SP2599_1).toFixed(1);
    var change_SP2499_2 = (water_sp2499*change_SP2499_1).toFixed(1);
    var change_SP2699_2 = (water_sp2699*change_SP2699_1).toFixed(1);
    var change_SP3099_2 = (water_sp3099*change_SP3099_1).toFixed(2);
    var change_SP3199_2 = (water_sp3199*change_SP3199_1).toFixed(2);
    var change_S20_2 = (change_S20_1*water_s20).toFixed(2);

    document.getElementById("SP4499_1").innerHTML = change_SP4499_1;
    document.getElementById("SP2599_1").innerHTML = change_SP2599_1;
    document.getElementById("SP2499_1").innerHTML = change_SP2499_1;
    document.getElementById("SP2699_1").innerHTML = change_SP2699_1;
    document.getElementById("SP3099_1").innerHTML = change_SP3099_1;
    document.getElementById("SP3199_1").innerHTML = change_SP3199_1;
    document.getElementById("S20_1").innerHTML = change_S20_1;

    document.getElementById("SP4499_2").innerHTML = change_SP4499_2;
    document.getElementById("SP2599_2").innerHTML = change_SP2599_2;
    document.getElementById("SP2499_2").innerHTML = change_SP2499_2;
    document.getElementById("SP2699_2").innerHTML = change_SP2699_2;
    document.getElementById("SP3099_2").innerHTML = change_SP3099_2;
    document.getElementById("SP3199_2").innerHTML = change_SP3199_2;
    document.getElementById("S20_2").innerHTML = change_S20_2;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#SP4499_1").html(SP4499);
    $("#SP2599_1").html(SP2599);
    $("#SP2499_1").html(SP2499);
    $("#SP2699_1").html(SP2699);
    $("#SP3099_1").html(SP3099);
    $("#SP3199_1").html(SP3199);
    $("#SP4499_2").html(SP4499_1);
    $("#SP2599_2").html(SP2599_1);
    $("#SP2499_2").html(SP2499_1);
    $("#SP2699_2").html(SP2699_1);
    $("#SP3099_2").html(SP3099_1);
    $("#SP3199_2").html(SP3199_1);
    $("#change_result").val("1000");

});