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

//기본고정값, 14.4 30 100
const H25 = 14.4;
const PA65 = 30;

//첫로딩화면, GS901 100g 기준
document.getElementById("white").innerHTML = GS901.white;
document.getElementById("black").innerHTML = GS901.black;
document.getElementById("H25").innerHTML = H25;
document.getElementById("PA65").innerHTML = PA65;

//목표배합량에 따라 달라지는 변수
var nowWhite = GS901.white;
var nowBlack = GS901.black;
var change_H25 = 0;
var change_PA65 = 0;

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    if(selectValue == 901){
        document.getElementById("white").innerHTML = GS901.white;
        document.getElementById("black").innerHTML = GS901.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS901.white;
        nowBlack = GS901.black;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 903){
        document.getElementById("white").innerHTML = GS903.white;
        document.getElementById("black").innerHTML = GS903.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS903.white;
        nowBlack = GS903.black;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 905){
        document.getElementById("white").innerHTML = GS905.white;
        document.getElementById("black").innerHTML = GS905.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS905.white;
        nowBlack = GS905.black;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 906){
        document.getElementById("white").innerHTML = GS906.white;
        document.getElementById("black").innerHTML = GS906.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS906.white;
        nowBlack = GS906.black;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 907){
        document.getElementById("white").innerHTML = GS907.white;
        document.getElementById("black").innerHTML = GS907.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS907.white;
        nowBlack = GS907.black;
        document.getElementById("change_result").value = 100;

    }else if(selectValue == 908){
        document.getElementById("white").innerHTML = GS908.white;
        document.getElementById("black").innerHTML = GS908.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PA65").innerHTML = PA65;
        nowWhite = GS908.white;
        nowBlack = GS908.black;
        document.getElementById("change_result").value = 100;

    }else{
        window.location.href = 'calculator_mixing2.html';
    }
}

function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    const changeResult = document.getElementById("change_result").value;


    if(selectValue == 901){

        nowWhite = (changeResult/100)*(GS901.white);
        nowBlack = (changeResult/100)*(GS901.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;

    }else if(selectValue == 903){

        nowWhite = (changeResult/100)*(GS903.white);
        nowBlack = (changeResult/100)*(GS903.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;

    }else if(selectValue == 905){

        nowWhite = (changeResult/100)*(GS905.white);
        nowBlack = (changeResult/100)*(GS905.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;

    }else if(selectValue == 906){
        
        nowWhite = (changeResult/100)*(GS906.white);
        nowBlack = (changeResult/100)*(GS906.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;

    }else if(selectValue == 907){
     
        nowWhite = (changeResult/100)*(GS907.white);
        nowBlack = (changeResult/100)*(GS907.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;
        
    }else if(selectValue == 908){
     
        nowWhite = (changeResult/100)*(GS908.white);
        nowBlack = (changeResult/100)*(GS908.black);
        change_H25 = changeResult*(H25/100);
        change_PA65 = changeResult*(PA65/100);

        const final_white = nowWhite.toFixed(2);
        const final_black = nowBlack.toFixed(2);
        const final_H25 = change_H25.toFixed(1);
        const final_PA65 = change_PA65.toFixed(1);

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PA65").innerHTML = final_PA65;

    }else{
        window.location.href = 'calculator_mixing2.html';
    }
}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#GS_select option:eq(0)").prop("selected", true);
    $("#white").html(GS901.white);
    $("#black").html(GS901.black); 
    $("#H25").html(H25);
    $("#PA65").html(PA65);
    $("#change_result").val("100");

});