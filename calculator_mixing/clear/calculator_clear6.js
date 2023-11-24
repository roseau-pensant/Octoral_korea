let M1 = {
    CM267: 41.92,
    CM269: 17.62
};

let M2 = {
    CM267: 28.9,
    CM269: 29.4
};

let M3 = {
    CM267: 17.96,
    CM269: 41.12
};

let M4 = {
    CM267: 11.98,
    CM269: 46.99
};
let M5 = {
    CM267: 0.00,
    CM269: 58.74
};


//기본고정값
const HM260 = 20.5;
const TM261 = 18.05;

//첫로딩화면, GS901 100g 기준
document.getElementById("CM267").innerHTML = M1.CM267;
document.getElementById("CM269").innerHTML = M1.CM269;
document.getElementById("HM260").innerHTML = HM260;
document.getElementById("TM261").innerHTML = TM261;

//목표배합량에 따라 달라지는 변수
var change_CM267 = 0;
var change_CM269 = 0;
var change_HM260 = 0;
var change_TM261 = 0;

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("MX_select");
    var selectValue = Select.options[Select.selectedIndex].value;

    if(selectValue == 1){
        document.getElementById("CM267").innerHTML = M1.CM267;
        document.getElementById("CM269").innerHTML = M1.CM269;
        document.getElementById("HM260").innerHTML = HM260;
        document.getElementById("TM261").innerHTML = TM261;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 2){
        document.getElementById("CM267").innerHTML = M2.CM267;
        document.getElementById("CM269").innerHTML = M2.CM269;
        document.getElementById("HM260").innerHTML = HM260;
        document.getElementById("TM261").innerHTML = TM261;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 3){
        document.getElementById("CM267").innerHTML = M3.CM267;
        document.getElementById("CM269").innerHTML = M3.CM269;
        document.getElementById("HM260").innerHTML = HM260;
        document.getElementById("TM261").innerHTML = TM261;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 4){
        document.getElementById("CM267").innerHTML = M4.CM267;
        document.getElementById("CM269").innerHTML = M4.CM269;
        document.getElementById("HM260").innerHTML = HM260;
        document.getElementById("TM261").innerHTML = TM261;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 5){
        document.getElementById("CM267").innerHTML = M5.CM267;
        document.getElementById("CM269").innerHTML = M5.CM269;
        document.getElementById("HM260").innerHTML = HM260;
        document.getElementById("TM261").innerHTML = TM261;
        document.getElementById("change_result").value = 100;

    }else{
        window.location.href = 'cm267_269.html';
    }
}


function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var Select = document.getElementById("MX_select");
    var selectValue = Select.options[Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    if(selectValue == 1){

        change_CM267 = changeResult*(M1.CM267/100);
        change_CM269 = changeResult*(M1.CM269/100);
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(2);
        const final_CM269 = change_CM269.toFixed(2);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;

    }else if(selectValue == 2){

        change_CM267 = changeResult*0.2894;
        change_CM269 = changeResult*0.2937;
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(1);
        const final_CM269 = change_CM269.toFixed(1);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;

    }else if(selectValue == 3){
        
        change_CM267 = changeResult*(M3.CM267/100);
        change_CM269 = changeResult*(M3.CM269/100);
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(2);
        const final_CM269 = change_CM269.toFixed(2);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;

    }else if(selectValue == 4){
        
        change_CM267 = changeResult*(M4.CM267/100);
        change_CM269 = changeResult*(M4.CM269/100);
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(2);
        const final_CM269 = change_CM269.toFixed(2);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;

    }else if(selectValue == 4){
        
        change_CM267 = changeResult*(M4.CM267/100);
        change_CM269 = changeResult*(M4.CM269/100);
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(2);
        const final_CM269 = change_CM269.toFixed(2);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;
        
    }else if(selectValue == 5){

        change_CM267 = changeResult*(M5.CM267/100);
        change_CM269 = changeResult*(M5.CM269/100);
        change_HM260 = changeResult*(HM260/100);
        change_TM261 = changeResult*(TM261/100);
    
        const final_CM267 = change_CM267.toFixed(2);
        const final_CM269 = change_CM269.toFixed(2);
        const final_HM260 = change_HM260.toFixed(1);
        const final_TM261 = change_TM261.toFixed(2);
    
        document.getElementById("CM267").innerHTML = final_CM267;
        document.getElementById("CM269").innerHTML = final_CM269;
        document.getElementById("HM260").innerHTML = final_HM260;
        document.getElementById("TM261").innerHTML = final_TM261;
        
    }else{
        window.location.href = 'cm267_269.html';
    }
    

}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#MX_select option:eq(0)").prop("selected", true);
    $("#CM267").html(M1.CM267);
    $("#CM269").html(M1.CM269);
    $("#HM260").html(HM260);
    $("#TM261").html(TM261);
    $("#change_result").val("100");

});