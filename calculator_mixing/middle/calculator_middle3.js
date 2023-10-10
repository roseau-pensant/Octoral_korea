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

//기본고정값, 11.0 16.2 100
const H25 = 11.0;
const PF131_TA910 = 16.2;

//첫로딩화면, GS901 100g 기준
document.getElementById("white").innerHTML = GS901.white;
document.getElementById("black").innerHTML = GS901.black;
document.getElementById("H25").innerHTML = H25;
document.getElementById("PF131_TA910").innerHTML = PF131_TA910;

//목표배합량에 따라 달라지는 변수
var nowWhite = GS901.white;
var nowBlack = GS901.black;
var change_H25 = 0;
var change_PF131_TA910 = 0;

function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    if(selectValue == 901){
        document.getElementById("white").innerHTML = GS901.white;
        document.getElementById("black").innerHTML = GS901.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS901.white;
        nowBlack = GS901.black;

    }else if(selectValue == 903){
        document.getElementById("white").innerHTML = GS903.white;
        document.getElementById("black").innerHTML = GS903.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS903.white;
        nowBlack = GS903.black;

    }else if(selectValue == 905){
        document.getElementById("white").innerHTML = GS905.white;
        document.getElementById("black").innerHTML = GS905.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS905.white;
        nowBlack = GS905.black;

    }else if(selectValue == 906){
        document.getElementById("white").innerHTML = GS906.white;
        document.getElementById("black").innerHTML = GS906.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS906.white;
        nowBlack = GS906.black;

    }else if(selectValue == 907){
        document.getElementById("white").innerHTML = GS907.white;
        document.getElementById("black").innerHTML = GS907.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS907.white;
        nowBlack = GS907.black;

    }else if(selectValue == 908){
        document.getElementById("white").innerHTML = GS908.white;
        document.getElementById("black").innerHTML = GS908.black;
        document.getElementById("H25").innerHTML = H25;
        document.getElementById("PF131_TA910").innerHTML = PF131_TA910;
        nowWhite = GS908.white;
        nowBlack = GS908.black;

    }else{
        window.location.href = 'calculator_mixing1.html';
    }
}

function calculator(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

    //사용자가 배합량 설정후 클릭
    var changeResult = document.getElementById("change_result").value;
    changeResult *= 1;

    if(selectValue == 901){

        nowWhite = (changeResult/100)*(GS901.white);
        nowBlack = (changeResult/100)*(GS901.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;

    }else if(selectValue == 903){

        nowWhite = (changeResult/100)*(GS903.white);
        nowBlack = (changeResult/100)*(GS903.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;

    }else if(selectValue == 905){

        nowWhite = (changeResult/100)*(GS905.white);
        nowBlack = (changeResult/100)*(GS905.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;

    }else if(selectValue == 906){
        
        nowWhite = (changeResult/100)*(GS906.white);
        nowBlack = (changeResult/100)*(GS906.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;

    }else if(selectValue == 907){
     
        nowWhite = (changeResult/100)*(GS907.white);
        nowBlack = (changeResult/100)*(GS907.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;
        
    }else if(selectValue == 908){
     
        nowWhite = (changeResult/100)*(GS908.white);
        nowBlack = (changeResult/100)*(GS908.black);
        change_H25 = changeResult*0.1095;

        const final_white = nowWhite.toFixed(1);
        const final_black = nowBlack.toFixed(1);
        var final_H25 = change_H25.toFixed(1);
        final_H25 *= 1;

        const temp = changeResult + final_H25
        var change_PF131_TA910 = temp*0.146;

        const final_PF131_TA910 = change_PF131_TA910.toFixed(1);
        

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H25").innerHTML = final_H25;
        document.getElementById("PF131_TA910").innerHTML = final_PF131_TA910;

    }else{
        window.location.href = 'calculator_mixing3.html';
    }
}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#GS_select option:eq(0)").prop("selected", true);
    $("#white").html(GS901.white);
    $("#black").html(GS901.black); 
    $("#H25").html(H25);
    $("#PA65").html(PF131_TA910);
    $("#change_result").val("100");
});