<<<<<<< HEAD
//기본고정값
const C150 = 66.2;
const H55 = 33.5;
const C150_TA910 = 4.5;
const S20 = 0.30;
const Sgravity = 0.903;

//첫로딩화면, GS901 100g 기준
document.getElementById("C150").innerHTML = C150;
document.getElementById("H55").innerHTML = H55;
document.getElementById("C150_TA910").innerHTML = C150_TA910;
document.getElementById("S20").innerHTML = (S20).toFixed(2);

//목표배합량에 따라 달라지는 변수
var change_C150 = 0;
var change_H55 = 0;
var change_TA910 = 0;
var change_S20 = 0;

function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_C150 = changeResult*0.6619;
    var final_C150 = change_C150.toFixed(1);
    final_C150 *= 1;

    change_H55 = final_C150*0.50672;
    var final_H55 = change_H55.toFixed(1);
    final_H55 *= 1;

    change_TA910 = (final_C150+final_H55)*0.05*Sgravity;
    const final_TA910 = change_TA910.toFixed(1);

    change_S20 = final_H55*0.01*0.88;
    const final_S20 = change_S20.toFixed(2);

    document.getElementById("C150").innerHTML = final_C150;
    document.getElementById("H55").innerHTML = final_H55;
    document.getElementById("C150_TA910").innerHTML = final_TA910;
    document.getElementById("S20").innerHTML = final_S20;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#C150").html(C150);
    $("#H55").html(H55);
    $("#C150_TA910").html(C150_TA910);
    $("#S20").html(S20);
    $("#change_result").val("100");

=======
//기본고정값
const C150 = 66.2;
const H55 = 33.5;
const C150_TA910 = 4.5;
const S20 = 0.30;
const Sgravity = 0.903;

//첫로딩화면, GS901 100g 기준
document.getElementById("C150").innerHTML = C150;
document.getElementById("H55").innerHTML = H55;
document.getElementById("C150_TA910").innerHTML = C150_TA910;
document.getElementById("S20").innerHTML = S20

//목표배합량에 따라 달라지는 변수
var change_C150 = 0;
var change_H55 = 0;
var change_TA910 = 0;
var change_S20 = 0;

function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_C150 = changeResult*0.6619;
    var final_C150 = change_C150.toFixed(1);
    final_C150 *= 1;

    change_H55 = final_C150*0.50672;
    var final_H55 = change_H55.toFixed(1);
    final_H55 *= 1;

    change_TA910 = (final_C150+final_H55)*0.05*Sgravity;
    const final_TA910 = change_TA910.toFixed(1);

    change_S20 = final_H55*0.01*0.88;
    const final_S20 = change_S20.toFixed(2);

    document.getElementById("C150").innerHTML = final_C150;
    document.getElementById("H55").innerHTML = final_H55;
    document.getElementById("C150_TA910").innerHTML = final_TA910;
    document.getElementById("S20").innerHTML = final_S20;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#C150").html(C150);
    $("#H55").html(H55);
    $("#C150_TA910").html(C150_TA910);
    $("#S20").html(S20);
    $("#change_result").val("100");

>>>>>>> 887b5fb135e070c90c0097d0b6ed0fcffed83095
});