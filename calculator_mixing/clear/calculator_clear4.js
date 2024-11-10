//기본고정값
const C500 = 679.8;

const H23 = 241.6;
const H24 = 241.7;
const H25 = 242.5;
const H26 = 244.0;

const AP871 = 74.2;
const Sgravity = 0.871;

//주재대비 경화제 함량
const H23_x = (H23/C500*100).toFixed(5);
const H24_x = (H24/C500*100).toFixed(5);
const H25_x = (H25/C500*100).toFixed(5);
const H26_x = (H26/C500*100).toFixed(5);

//첫로딩화면
document.getElementById("C500").innerHTML = C500;
document.getElementById("h").innerHTML = H23;
document.getElementById("AP871").innerHTML = AP871;

//목표배합량에 따라 달라지는 변수
var change_C500 = 0;
var change_H = 0;
var change_AP871 = 0;


function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("H_select");
    var selectValue = Select.options[Select.selectedIndex].value;

    if(selectValue == 1){
        document.getElementById("C500").innerHTML = C500;
        document.getElementById("h").innerHTML = H23;
        document.getElementById("AP871").innerHTML = AP871;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 2){
        document.getElementById("C500").innerHTML = C500;
        document.getElementById("h").innerHTML = H24;
        document.getElementById("AP871").innerHTML = AP871;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 3){
        document.getElementById("C500").innerHTML = C500;
        document.getElementById("h").innerHTML = H25;
        document.getElementById("AP871").innerHTML = AP871;
        document.getElementById("change_result").value = 1000;

    }else if(selectValue == 4){
        document.getElementById("C500").innerHTML = C500;
        document.getElementById("h").innerHTML = H26;
        document.getElementById("AP871").innerHTML = AP871;
        document.getElementById("change_result").value = 1000;

    }else{
        window.location.href = 'C500_2.html';
    }
}


function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("H_select");
    var selectValue = Select.options[Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    if(selectValue == 1){

        change_C500 = changeResult*0.6798;
        var final_C500 = change_C500.toFixed(2);
        final_C500 *= 1;
    
        change_H = final_C500*(H23_x/100);
        var final_H = change_H.toFixed(2);
        final_H *= 1;
    
        change_AP871 = (final_C500+final_H)*0.1*Sgravity;
        const final_AP871 = change_AP871.toFixed(1);
    
        document.getElementById("C500").innerHTML = final_C500;
        document.getElementById("h").innerHTML = final_H;
        document.getElementById("AP871").innerHTML = final_AP871;

    }else if(selectValue == 2){

        change_C500 = changeResult*0.6798;
        var final_C500 = change_C500.toFixed(2);
        final_C500 *= 1;
    
        change_H = final_C500*(H24_x/100);
        var final_H = change_H.toFixed(2);
        final_H *= 1;
    
        change_AP871 = (final_C500+final_H)*0.1*Sgravity;
        const final_AP871 = change_AP871.toFixed(1);
    
        document.getElementById("C500").innerHTML = final_C500;
        document.getElementById("h").innerHTML = final_H;
        document.getElementById("AP871").innerHTML = final_AP871;

    }
    else if(selectValue == 3){

        change_C500 = changeResult*0.6798;
        var final_C500 = change_C500.toFixed(2);
        final_C500 *= 1;
    
        change_H = final_C500*(H25_x/100);
        var final_H = change_H.toFixed(2);
        final_H *= 1;
    
        change_AP871 = (final_C500+final_H)*0.1*Sgravity;
        const final_AP871 = change_AP871.toFixed(1);
    
        document.getElementById("C500").innerHTML = final_C500;
        document.getElementById("h").innerHTML = final_H;
        document.getElementById("AP871").innerHTML = final_AP871;

    }
    else if(selectValue == 4){

        change_C500 = changeResult*0.6798;
        var final_C500 = change_C500.toFixed(2);
        final_C500 *= 1;
    
        change_H = final_C500*(H26_x/100);
        var final_H = change_H.toFixed(2);
        final_H *= 1;
    
        change_AP871 = (final_C500+final_H)*0.1*Sgravity;
        const final_AP871 = change_AP871.toFixed(1);
    
        document.getElementById("C500").innerHTML = final_C500;
        document.getElementById("h").innerHTML = final_H;
        document.getElementById("AP871").innerHTML = final_AP871;

    }else{
        window.location.href = 'c500_2.html';
    }
    

}

$('#reset').click(function () {

    //처음 위치로 돌아가기
    $("#H_select option:eq(0)").prop("selected", true);
    $("#C500").html(C500);
    $("#h").html(H23);
    $("#AP871").html(AP871);
    $("#change_result").val("1000");

});