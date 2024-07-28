let GS901 = {
    white: 0,
    black: 100
};

let GS903 = {
    white: 100,
    black: 0
};

let GS905 = {
    white: 90.5,
    black: 9.5
};

let GS906 = {
    white: 78,
    black: 22
};

let GS907 = {
    white: 52,
    black: 48
};

let GS908 = {
    white: 21,
    black: 79
};

//기본고정값
const H25 = 16.7;
const TA910_sanding = 29.2;  //25%
const TA910_Nonsanding = 40.8;  //35%

//비중
const water_ph254_white = 1.42;
const water_ph254_black = 1.39;
const water_ph254_h25 = 1.017;
const water_ph254_ta910 = 0.903;

//첫로딩화면, GS901 100g 기준
document.getElementById("white").innerHTML = (0.0).toFixed(1);
document.getElementById("black").innerHTML = (139.0).toFixed(1);
document.getElementById("H25").innerHTML = (17.0).toFixed(1);
document.getElementById("sanding").innerHTML = "TA910_샌딩"
document.getElementById("TA910_change_sanding").innerHTML = 26.3;


//목표배합량에 따라 달라지는 변수
var nowWhite = GS901.white;
var nowBlack = GS901.black;
var change_H25 = 0;
var change_TA910_sanding = 0;

function sanding_choice(){

    var sanding_Select = document.getElementById("sanding_choice");
    var selectValue = sanding_Select.options[sanding_Select.selectedIndex].value;

    if(selectValue == "sanding"){
        document.getElementById("sanding").innerHTML = "TA910_샌딩";
        document.getElementById("TA910_change_sanding").innerHTML = 26.3;
        document.getElementById("white").innerHTML = (0.0).toFixed(1);
        document.getElementById("black").innerHTML = (139.0).toFixed(1);
        document.getElementById("H25").innerHTML = (17.0).toFixed(1);
        $("#GS_select option:eq(0)").prop("selected", true);
        $("#change_result").val("100");

    }else if(selectValue == "nonsanding"){
        document.getElementById("sanding").innerHTML = "TA910_논샌딩";
        document.getElementById("TA910_change_sanding").innerHTML = 36.9;
        document.getElementById("white").innerHTML = (0.0).toFixed(1);
        document.getElementById("black").innerHTML = (139.0).toFixed(1);
        document.getElementById("H25").innerHTML = (17.0).toFixed(1);
        $("#GS_select option:eq(0)").prop("selected", true);
        $("#change_result").val("100");
        
    }

}

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    var sanding_Select = document.getElementById("sanding_choice");
    var sandingSelectValue = sanding_Select.options[sanding_Select.selectedIndex].value;


    if(sandingSelectValue == "sanding"){
        if(selectValue == 901){
            document.getElementById("white").innerHTML = (GS901.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS901.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS901.white*water_ph254_white;
            nowBlack = GS901.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 903){
            document.getElementById("white").innerHTML = (GS903.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS903.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS903.white*water_ph254_white;
            nowBlack = GS903.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 905){
            document.getElementById("white").innerHTML = (GS905.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS905.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS905.white*water_ph254_white;
            nowBlack = GS905.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 906){
            document.getElementById("white").innerHTML = (GS906.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS906.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS906.white*water_ph254_white;
            nowBlack = GS906.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 907){
            document.getElementById("white").innerHTML = (GS907.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS907.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS907.white*water_ph254_white;
            nowBlack = GS907.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 908){
            document.getElementById("white").innerHTML = (GS908.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS908.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 26.3;
            nowWhite = GS908.white*water_ph254_white;
            nowBlack = GS908.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else{
            window.location.href = 'calculator_mixing1.html';
        }

    }else if(sandingSelectValue == "nonsanding"){

        if(selectValue == 901){
            document.getElementById("white").innerHTML = (GS901.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS901.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS901.white*water_ph254_white;
            nowBlack = GS901.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 903){
            document.getElementById("white").innerHTML = (GS903.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS903.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS903.white*water_ph254_white;
            nowBlack = GS903.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 905){
            document.getElementById("white").innerHTML = (GS905.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS905.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS905.white*water_ph254_white;
            nowBlack = GS905.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 906){
            document.getElementById("white").innerHTML = (GS906.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS906.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS906.white*water_ph254_white;
            nowBlack = GS906.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 907){
            document.getElementById("white").innerHTML = (GS907.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS907.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS907.white*water_ph254_white;
            nowBlack = GS907.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 908){
            document.getElementById("white").innerHTML = (GS908.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS908.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = (17.0).toFixed(1);
            document.getElementById("TA910_change_sanding").innerHTML = 36.9;
            nowWhite = GS908.white*water_ph254_white;
            nowBlack = GS908.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else{
            window.location.href = 'calculator_mixing1.html';
        }
    }

    
}

function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    var sanding_Select = document.getElementById("sanding_choice");
    var sandingSelectValue = sanding_Select.options[sanding_Select.selectedIndex].value;


    //사용자가 배합량 설정후 클릭
    var changeResult = document.getElementById("change_result").value;
    changeResult *= 1;


    if(sandingSelectValue == "sanding"){

        if(selectValue == 901){

            nowWhite = (changeResult/100)*(GS901.white);
            nowBlack = (changeResult/100)*(GS901.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 903){
    
            nowWhite = (changeResult/100)*(GS903.white);
            nowBlack = (changeResult/100)*(GS903.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 905){
    
            nowWhite = (changeResult/100)*(GS905.white);
            nowBlack = (changeResult/100)*(GS905.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 906){
            
            nowWhite = (changeResult/100)*(GS906.white);
            nowBlack = (changeResult/100)*(GS906.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 907){
         
            nowWhite = (changeResult/100)*(GS907.white);
            nowBlack = (changeResult/100)*(GS907.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
            
        }else if(selectValue == 908){
         
            nowWhite = (changeResult/100)*(GS908.white);
            nowBlack = (changeResult/100)*(GS908.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.25;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else{
            window.location.href = 'calculator_mixing3.html';
        }

    }else if(sandingSelectValue == "nonsanding"){

        if(selectValue == 901){

            nowWhite = (changeResult/100)*(GS901.white);
            nowBlack = (changeResult/100)*(GS901.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 903){
    
            nowWhite = (changeResult/100)*(GS903.white);
            nowBlack = (changeResult/100)*(GS903.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 905){
    
            nowWhite = (changeResult/100)*(GS905.white);
            nowBlack = (changeResult/100)*(GS905.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 906){
            
            nowWhite = (changeResult/100)*(GS906.white);
            nowBlack = (changeResult/100)*(GS906.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else if(selectValue == 907){
         
            nowWhite = (changeResult/100)*(GS907.white);
            nowBlack = (changeResult/100)*(GS907.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
            
        }else if(selectValue == 908){
         
            nowWhite = (changeResult/100)*(GS908.white);
            nowBlack = (changeResult/100)*(GS908.black);
            change_H25 = (nowWhite+nowBlack)/6;
            change_TA910_sanding = (nowWhite+nowBlack+change_H25)*0.35;

    
            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910_sanding = (change_TA910_sanding*water_ph254_ta910).toFixed(1);
            
    
            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("TA910_change_sanding").innerHTML = final_TA910_sanding;
    
        }else{
            window.location.href = 'calculator_mixing3.html';
        }

    }


    
}

$('#reset').click(function () {

    var changePH254 = $("#sanding_choice option:selected").val();

    //처음 위치로 돌아가기
    $("#GS_select option:eq(0)").prop("selected", true);
    $("#white").html("0.0");
    $("#black").html((GS901.black*water_ph254_black)); 
    $("#H25").html((H25*water_ph254_h25).toFixed(1));

    if(changePH254 == "sanding"){
        $("#TA910_change_sanding").html("26.3");
    }else if(changePH254 == "nonsanding"){
        $("#TA910_change_sanding").html("36.9");
    }

    $("#change_result").val("100");
});