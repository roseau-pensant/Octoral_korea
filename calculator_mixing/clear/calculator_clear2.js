//기본고정값
const C450 = 800.8;
const H23 = 177.2;
const H24 = 177.2;
const H25 = 177.8;
const H26 = 179.0;

//주재대비 경화제 함량
const H23_x = (H23/C450*100).toFixed(5);
const H24_x = (H24/C450*100).toFixed(5);
const H25_x = (H25/C450*100).toFixed(5);
const H26_x = (H26/C450*100).toFixed(5);

//첫로딩화면
document.getElementById("C450").innerHTML = C450;
document.getElementById("h").innerHTML = H23;

//목표배합량에 따라 달라지는 변수
var change_C450 = 0;
var change_H25 = 0;

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("H_select");
    var selectValue = Select.options[Select.selectedIndex].value;

    if(selectValue == 1){
        document.getElementById("C450").innerHTML = C450;
        document.getElementById("h").innerHTML = H23;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 2){
        document.getElementById("C450").innerHTML = C450;
        document.getElementById("h").innerHTML = H24;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 3){
        document.getElementById("C450").innerHTML = C450;
        document.getElementById("h").innerHTML = H25;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 4){
        document.getElementById("C450").innerHTML = C450;
        document.getElementById("h").innerHTML = H26;
        document.getElementById("change_result").value = 1000;

    }else{
        window.location.href = 'c450_2.html';
    }
}

function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("H_select");
    var selectValue = Select.options[Select.selectedIndex].value;
    
    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    if(selectValue == 1){

        change_C450 = changeResult*0.8008;
        var final_C450 = change_C450.toFixed(2);
        final_C450 *= 1;
    
        change_H25 = final_C450*(H23_x/100);
        var final_H = change_H25.toFixed(2);
        final_H *= 1;
    
        document.getElementById("C450").innerHTML = final_C450;
        document.getElementById("h").innerHTML = final_H;

    }else if(selectValue == 2){

        change_C450 = changeResult*0.8008;
        var final_C450 = change_C450.toFixed(2);
        final_C450 *= 1;
    
        change_H25 = final_C450*(H24_x/100);
        var final_H = change_H25.toFixed(2);
        final_H *= 1;
    
        document.getElementById("C450").innerHTML = final_C450;
        document.getElementById("h").innerHTML = final_H;

    }else if(selectValue == 3){

        change_C450 = changeResult*0.8008;
        var final_C450 = change_C450.toFixed(2);
        final_C450 *= 1;
    
        change_H25 = final_C450*(H25_x/100);
        var final_H = change_H25.toFixed(2);
        final_H *= 1;
    
        document.getElementById("C450").innerHTML = final_C450;
        document.getElementById("h").innerHTML = final_H;

    }else if(selectValue == 4){

        change_C450 = changeResult*0.8008;
        var final_C450 = change_C450.toFixed(2);
        final_C450 *= 1;
    
        change_H25 = final_C450*(H26_x/100);
        var final_H = change_H25.toFixed(2);
        final_H *= 1;
    
        document.getElementById("C450").innerHTML = final_C450;
        document.getElementById("h").innerHTML = final_H;

    }else{
        window.location.href = 'c450.html';
    } 

}

$('#reset').click(function () {

    //처음 위치로 돌아가기
    $("#H_select option:eq(0)").prop("selected", true); 
    $("#C450").html(C450);
    $("#h").html(H23);
    $("#change_result").val("1000");

});