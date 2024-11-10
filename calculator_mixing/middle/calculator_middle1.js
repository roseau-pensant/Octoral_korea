let GS901 = {
    white: 0,
    black: 100
};

let GS903 = {
    white: 100,
    black: 0
};

let GS905 = {
    white: 85,
    black: 15
};

let GS906 = {
    white: 71.8,
    black: 28.2
};

let GS907 = {
    white: 42.5,
    black: 57.5
};

let GS908 = {
    white: 16.2,
    black: 83.8
};

//기본고정값, 20 30 30 100
const H25 = 20;
const TA910 = 30;
const PA65 = 30;

//비중
const water_ph254_white = 1.325;
const water_ph254_black = 1.307;
const water_ph254_h25 = 1.017;
const water_ph254_ta910 = 0.903;
const water_ph254_pa65 = 0.874;

//TA910, PA65 안내문
var str_TA910_1 = `<div style="padding: 1%;"><li style="font-size: 15px;">신너(TA910)가 권장량 보다 많으면 건조가 빠르지만 도막 두께가 얇습니다.</li>
<li style="font-size: 15px;">신너(TA910)는 권장량 보다 10%이상 초과 하지 않도록 주의를 당부합니다.</li></div>`;
var str_PA65_1 = `<div style="padding: 1%;"><li style="font-size: 15px;">프라이머(PA65)가 권장량 보다 많으면 건조가 빠르지만 도막 두께가 얇습니다.</li>
<li style="font-size: 15px;">프라이머(PA65)는 권장량 보다 100g당 5~8g 초과하지 않는 범위에서의 사용도 추천합니다.</li>
<li style="font-size: 15px;">다만 너무 빠른 건조로 표면이 거칠어 베이스 코트 도포시에 살짝  핸드 연마를 추천합니다.</li></div>`


//첫로딩화면, GS901 100g 기준
document.getElementById("ta910/pa65").innerHTML = "TA910 (g)"
document.getElementById("white").innerHTML = (0.0).toFixed(1);
document.getElementById("black").innerHTML = 130.7;
document.getElementById("H25").innerHTML = 20.3;
document.getElementById("change_choice").innerHTML = 27.1;
document.getElementById("ph254_material").innerHTML = "TA910";
document.getElementById("ph254_material_").innerHTML = str_TA910_1;

//목표배합량에 따라 달라지는 변수
var nowWhite = GS901.white;
var nowBlack = GS901.black;
var change_H25 = 0;
var change_TA910 = 0;
var change_PA65 = 0;

//ta910 or pa65
function PH254_choice(){
    
    var ph254_Select = document.getElementById("ph254_choice");
    var selectValue = ph254_Select.options[ph254_Select.selectedIndex].value;

    if(selectValue == "TA910_choice"){
        document.getElementById("ph254_material").innerHTML = "TA910";  //ta910소개표타이틀
        document.getElementById("ph254_material_").innerHTML = str_TA910_1;  //ta910소개표소개
        document.getElementById("ta910/pa65").innerHTML = "TA910 (g)";
        document.getElementById("change_choice").innerHTML = (TA910*water_ph254_ta910).toFixed(1);
        document.getElementById("white").innerHTML = (0.0).toFixed(1);
        document.getElementById("black").innerHTML = 130.7;
        document.getElementById("H25").innerHTML = 20.3;
        document.getElementById("change_choice").innerHTML = 27.1;
        $("#GS_select option:eq(0)").prop("selected", true);
        $("#change_result").val("100");

    }else if(selectValue == "PA65_choice"){
        document.getElementById("ph254_material").innerHTML = "PA65";
        document.getElementById("ph254_material_").innerHTML = str_PA65_1;
        document.getElementById("ta910/pa65").innerHTML = "PA65 (g)";
        document.getElementById("change_choice").innerHTML = (PA65*water_ph254_pa65).toFixed(1);    
        document.getElementById("white").innerHTML = (0.0).toFixed(1);
        document.getElementById("black").innerHTML = 130.7;
        document.getElementById("H25").innerHTML = 20.3;
        document.getElementById("change_choice").innerHTML = 26.2;
        $("#GS_select option:eq(0)").prop("selected", true);
        $("#change_result").val("100");

    }

}

function changeSelect1(){

    var PH254_Select = document.getElementById("ph254_choice");
    var ph254SelectValue = PH254_Select.options[PH254_Select.selectedIndex].value;

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    if(ph254SelectValue == "TA910_choice"){

        if(selectValue == 901){
            document.getElementById("white").innerHTML = (GS901.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS901.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS901.white*water_ph254_white;
            nowBlack = GS901.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 903){
            document.getElementById("white").innerHTML = (GS903.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS903.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS903.white*water_ph254_white;
            nowBlack = GS903.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 905){
            document.getElementById("white").innerHTML = (GS905.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS905.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS905.white*water_ph254_white;
            nowBlack = GS905.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 906){
            document.getElementById("white").innerHTML = (GS906.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS906.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS906.white*water_ph254_white;
            nowBlack = GS906.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 907){
            document.getElementById("white").innerHTML = (GS907.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS907.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS907.white*water_ph254_white;
            nowBlack = GS907.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 908){
            document.getElementById("white").innerHTML = (GS908.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS908.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 27.1;
            nowWhite = GS908.white*water_ph254_white;
            nowBlack = GS908.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else{
            window.location.href = 'calculator_mixing1.html';
        }

    }else if(ph254SelectValue == "PA65_choice"){

        if(selectValue == 901){
            document.getElementById("white").innerHTML = (GS901.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS901.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS901.white*water_ph254_white;
            nowBlack = GS901.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 903){
            document.getElementById("white").innerHTML = (GS903.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS903.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS903.white*water_ph254_white;
            nowBlack = GS903.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 905){
            document.getElementById("white").innerHTML = (GS905.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS905.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS905.white*water_ph254_white;
            nowBlack = GS905.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 906){
            document.getElementById("white").innerHTML = (GS906.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS906.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS906.white*water_ph254_white;
            nowBlack = GS906.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 907){
            document.getElementById("white").innerHTML = (GS907.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS907.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS907.white*water_ph254_white;
            nowBlack = GS907.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else if(selectValue == 908){
            document.getElementById("white").innerHTML = (GS908.white*water_ph254_white).toFixed(1);
            document.getElementById("black").innerHTML = (GS908.black*water_ph254_black).toFixed(1);
            document.getElementById("H25").innerHTML = 20.3;
            document.getElementById("change_choice").innerHTML = 26.2;
            nowWhite = GS908.white*water_ph254_white;
            nowBlack = GS908.black*water_ph254_black;
            document.getElementById("change_result").value = 100;
    
        }else{
            window.location.href = 'calculator_mixing1.html';
        }

    }
    

}

function calculator(){

    var PH254_Select = document.getElementById("ph254_choice");
    var ph254SelectValue = PH254_Select.options[PH254_Select.selectedIndex].value;

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;

    if(ph254SelectValue == "TA910_choice"){
        
        if(selectValue == 901){

            nowWhite = (changeResult/100)*GS901.white;
            nowBlack = (changeResult/100)*GS901.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;

        }else if(selectValue == 903){

            nowWhite = (changeResult/100)*GS903.white;
            nowBlack = (changeResult/100)*GS903.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;

        }else if(selectValue == 905){

            nowWhite = (changeResult/100)*GS905.white;
            nowBlack = (changeResult/100)*GS905.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;

        }else if(selectValue == 906){
            
            nowWhite = (changeResult/100)*GS906.white;
            nowBlack = (changeResult/100)*GS906.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;

        }else if(selectValue == 907){
        
            nowWhite = (changeResult/100)*GS907.white;
            nowBlack = (changeResult/100)*GS907.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;
            
        }else if(selectValue == 908){
        
            nowWhite = (changeResult/100)*GS908.white;
            nowBlack = (changeResult/100)*GS908.black;
            change_H25 = changeResult/5;
            change_TA910 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_TA910 = (change_TA910*water_ph254_ta910).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_TA910;

        }else{
            window.location.href = 'calculator_mixing1.html';
        }

    
    }else if(ph254SelectValue == "PA65_choice"){

        if(selectValue == 901){

            nowWhite = (changeResult/100)*GS901.white;
            nowBlack = (changeResult/100)*GS901.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;

        }else if(selectValue == 903){

            nowWhite = (changeResult/100)*GS903.white;
            nowBlack = (changeResult/100)*GS903.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;

        }else if(selectValue == 905){

            nowWhite = (changeResult/100)*GS905.white;
            nowBlack = (changeResult/100)*GS905.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;

        }else if(selectValue == 906){
            
            nowWhite = (changeResult/100)*GS906.white;
            nowBlack = (changeResult/100)*GS906.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;

        }else if(selectValue == 907){
        
            nowWhite = (changeResult/100)*GS907.white;
            nowBlack = (changeResult/100)*GS907.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;
            
        }else if(selectValue == 908){
        
            nowWhite = (changeResult/100)*GS908.white;
            nowBlack = (changeResult/100)*GS908.black;
            change_H25 = changeResult/5;
            change_PA65 = (nowWhite+nowBlack+change_H25)*0.25;

            const final_white = (nowWhite*water_ph254_white).toFixed(1);
            const final_black = (nowBlack*water_ph254_black).toFixed(1);
            const final_H25 = (change_H25*water_ph254_h25).toFixed(1);
            const final_PA65 = (change_PA65*water_ph254_pa65).toFixed(1);

            document.getElementById("white").innerHTML = final_white;
            document.getElementById("black").innerHTML = final_black;
            document.getElementById("H25").innerHTML = final_H25;
            document.getElementById("change_choice").innerHTML = final_PA65;

        }else{
            window.location.href = 'calculator_mixing1.html';
        }


    }


}

$('#reset').click(function () {

    var changePH254 = $("#ph254_choice option:selected").val();

    //처음 위치로 돌아가기
    $("#GS_select option:eq(0)").prop("selected", true);
    $("#white").html("0.0");
    $("#black").html((GS901.black*water_ph254_black)); 
    $("#H25").html((H25*water_ph254_h25).toFixed(1));

    if(changePH254 == "TA910_choice"){
        $("#change_choice").html((TA910*water_ph254_ta910).toFixed(1));
    }else if(changePH254 == "PA65_choice"){
        $("#change_choice").html((PA65*water_ph254_pa65).toFixed(1));
    }

    $("#change_result").val("100");

});