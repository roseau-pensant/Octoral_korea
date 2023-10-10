//기본고정값
const C500 = 712.1;
const H25 = 254.0;
const AP871 = 96.6;

//첫로딩화면
document.getElementById("C500").innerHTML = C500;
document.getElementById("H25").innerHTML = H25;
document.getElementById("AP871").innerHTML = AP871;

//목표배합량에 따라 달라지는 변수
var change_C500 = 0;
var change_H25 = 0;
var change_AP871 = 0;


function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_C500 = changeResult*0.7121;
    var final_C500 = change_C500.toFixed(1);
    final_C500 *= 1;

    change_H25 = final_C500*0.35669;
    var final_H25 = change_H25.toFixed(1);
    final_H25 *= 1;

    change_AP871 = (final_C500+final_H25)*0.1;
    const final_AP871 = change_AP871.toFixed(1);

    document.getElementById("C500").innerHTML = final_C500;
    document.getElementById("H25").innerHTML = final_H25;
    document.getElementById("AP871").innerHTML = final_AP871;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#C500").html(C500);
    $("#H25").html(H25);
    $("#AP871").html(AP871);
    $("#change_result").val("1000");

});