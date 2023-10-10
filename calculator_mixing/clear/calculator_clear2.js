//기본고정값
const C450 = 80.1;
const H25 = 17.8;

//첫로딩화면
document.getElementById("C450").innerHTML = C450;
document.getElementById("H25").innerHTML = H25;

//목표배합량에 따라 달라지는 변수
var change_C450 = 0;
var change_H25 = 0;


function calculator(){

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    change_C450 = changeResult*0.8008;
    const final_C450 = change_C450.toFixed(1);

    change_H25 = changeResult*0.1778;
    const final_H25 = change_H25.toFixed(1);

    document.getElementById("C450").innerHTML = final_C450;
    document.getElementById("H25").innerHTML = final_H25;

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#C450").html(C450);
    $("#H25").html(H25);
    $("#change_result").val("100");

});