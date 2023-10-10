let PE130_white = {
    white: 104.0,
    H130: 29.9,
    TA910: 24.2
};

let PE130_grey = {
    grey: 101.7,
    H130: 29.9,
    TA910: 23.8
};

//첫로딩화면, PE130_white 100g 기준
document.getElementById("PE130_white").innerHTML = PE130_white.white;
document.getElementById("PE130_grey").innerHTML = 0;
document.getElementById("H130").innerHTML = PE130_white.H130;
document.getElementById("TA910").innerHTML = PE130_white.TA910;

//목표배합량에 따라 달라지는 변수
var change_white = 0;
var change_grey = 0;
var change_H130 = 0;
var change_TA910 = 0;

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("PE130");
    var selectValue = Select.options[Select.selectedIndex].value;

    if(selectValue == 1){
        document.getElementById("PE130_white").innerHTML = PE130_white.white;
        document.getElementById("PE130_grey").innerHTML = 0;
        document.getElementById("H130").innerHTML = PE130_white.H130;
        document.getElementById("TA910").innerHTML = PE130_white.TA910;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 2){
        document.getElementById("PE130_white").innerHTML = 0;
        document.getElementById("PE130_grey").innerHTML = PE130_grey.grey;
        document.getElementById("H130").innerHTML = PE130_grey.H130;
        document.getElementById("TA910").innerHTML = PE130_grey.TA910;
        document.getElementById("change_result").value = 100;

    }else{
        window.location.href = 'calculator_mixing1.html';
    }
}

function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("PE130");
    var selectValue = Select.options[Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    var changeResult = document.getElementById("change_result").value;


    if(selectValue == 1){

        change_white = changeResult*1.0398;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_H130 = final_white*0.287266;
        var final_H130 = change_H130.toFixed(1);
        final_H130 *= 1;

        change_TA910 = (final_white+final_H130)*0.2*0.903;
        var final_TA910 = change_TA910.toFixed(1);

        document.getElementById("PE130_white").innerHTML = final_white;
        document.getElementById("PE130_grey").innerHTML = 0;
        document.getElementById("H130").innerHTML = final_H130;
        document.getElementById("TA910").innerHTML = final_TA910;

    }else if(selectValue == 2){

        change_grey = changeResult*1.0166;
        var final_grey = change_grey.toFixed(1);
        final_grey *= 1;

        change_H130 = final_grey*0.293822;
        var final_H130 = change_H130.toFixed(1);
        final_H130 *= 1;

        change_TA910 = (final_grey+final_H130)*0.2*0.903;
        var final_TA910 = change_TA910.toFixed(1);

        document.getElementById("PE130_white").innerHTML = 0;
        document.getElementById("PE130_grey").innerHTML = final_grey;
        document.getElementById("H130").innerHTML = final_H130;
        document.getElementById("TA910").innerHTML = final_TA910;

    }else{
        window.location.href = 'calculator_mixing1.html';
    }
}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#PE130 option:eq(0)").prop("selected", true);
    $("#PE130_white").html(PE130_white.white);
    $("#PE130_grey").html("0");
    $("#H130").html(PE130_white.H130);
    $("#TA910").html(PE130_white.TA910);
    $("#change_result").val("100");

});