//기본고정값
const AW001 = 20;
const H23_26 = 6.3;

//첫로딩화면, GS901 100g 기준
document.getElementById("AW001").innerHTML = AW001;
document.getElementById("H23_26").innerHTML = H23_26;

//목표배합량에 따라 달라지는 변수
var change_AW001 = 0;
var change_H23_26 = 0;

function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_AW001 = changeResult*(AW001/100);
    change_H23_26 = changeResult*(H23_26/100);

    const final_AW001 = change_AW001.toFixed(1);
    const final_H23_26 = change_H23_26.toFixed(1);

    document.getElementById("AW001").innerHTML = final_AW001;
    document.getElementById("H23_26").innerHTML = final_H23_26;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#AW001").html(AW001);
    $("#H23_26").html(H23_26);
    $("#change_result").val("100");

});