//기본고정값
const PW170 = 550.5;
const H130 = 420.4;
const first_result = 100;

//첫로딩화면, GS901 100g 기준
document.getElementById("PW170").innerHTML = PW170;
document.getElementById("H130").innerHTML = H130;

//목표배합량에 따라 달라지는 변수
var change_PW170 = 0;
var change_H130 = 0;


function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_PW170 = changeResult*(PW170/100);
    const final_PW170 = change_PW170.toFixed(1);

    change_H130 = final_PW170*0.7636;
    const final_H130 = change_H130.toFixed(1);

    document.getElementById("PW170").innerHTML = final_PW170;
    document.getElementById("H130").innerHTML = final_H130;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#PW170").html(PW170);
    $("#H130").html(H130);
    $("#change_result").val("100");

});