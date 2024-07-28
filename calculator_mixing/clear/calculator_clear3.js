//기본고정값
const C500 = 712.1;
const H25 = 254.0;
const C500_1_TA910 = 43.6;
const Sgravity = 0.903;

//첫로딩화면
document.getElementById("C500").innerHTML = C500;
document.getElementById("H25").innerHTML = H25;
document.getElementById("C500_1_TA910").innerHTML = C500_1_TA910;

//목표배합량에 따라 달라지는 변수
var change_C500 = 0;
var change_H25 = 0;
var change_C500_1_TA910 = 0;


function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_C500 = changeResult*0.7121;
    var final_C500 = change_C500.toFixed(1);
    final_C500 *= 1;

    change_H25 = final_C500*0.35669;
    var final_H25 = change_H25.toFixed(1);
    final_H25 *= 1;

    change_C500_1_TA910 = (final_C500+final_H25)*0.05*Sgravity;
    const final_C500_1_TA910 = change_C500_1_TA910.toFixed(1);

    document.getElementById("C500").innerHTML = final_C500;
    document.getElementById("H25").innerHTML = final_H25;
    document.getElementById("C500_1_TA910").innerHTML = final_C500_1_TA910;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#C500").html(C500);
    $("#H25").html(H25);
    $("#C500_1_TA910").html(C500_1_TA910);
    $("#change_result").val("1000");

});