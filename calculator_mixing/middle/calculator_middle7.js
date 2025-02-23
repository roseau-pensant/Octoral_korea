let GS901 = {
    white: 0,
    black: 623.2
};

let GS903 = {
    white: 664.8,
    black: 0
};

let GS905 = {
    white: 560.9,
    black: 66.5
};

let GS906 = {
    white: 486.1,
    black: 146.3
};

let GS907 = {
    white: 324.1,
    black: 319.1
};

let GS908 = {
    white: 130.9,
    black: 525.2
};

//기본고정값
const H345 = 218.6;
const TH345 = 344.8;

//첫로딩화면, GS901 100g 기준
document.getElementById("white").innerHTML = GS901.white;
document.getElementById("black").innerHTML = GS901.black;
document.getElementById("H345").innerHTML = H345;
document.getElementById("TH345").innerHTML = TH345;


function changeSelect(){

    //select element에서 선택된 option의 value가 저장된다.
    var GS_Select = document.getElementById("GS_select");
    var selectValue = GS_Select.options[GS_Select.selectedIndex].value;

        if(selectValue == 901){

            document.getElementById("white").innerHTML = GS901.white;
            document.getElementById("black").innerHTML = GS901.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;

        }else if(selectValue == 903){

            document.getElementById("white").innerHTML = GS903.white;
            document.getElementById("black").innerHTML = GS903.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;
        
        }else if(selectValue == 905){

            document.getElementById("white").innerHTML = GS905.white;
            document.getElementById("black").innerHTML = GS905.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;

        }else if(selectValue == 906){

            document.getElementById("white").innerHTML = GS906.white;
            document.getElementById("black").innerHTML = GS906.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;

        }else if(selectValue == 907){

            document.getElementById("white").innerHTML = GS907.white;
            document.getElementById("black").innerHTML = GS907.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;

        }else if(selectValue == 908){

            document.getElementById("white").innerHTML = GS908.white;
            document.getElementById("black").innerHTML = GS908.black;
            document.getElementById("H345").innerHTML = H345;
            document.getElementById("TH345").innerHTML = TH345;
            document.getElementById("change_result").value = 1000;

        }else{
            window.location.href = 'calculator_mixing1.html';
        }

}

function calculator(){

    //사용자가 배합량 설정후 클릭
    var changeResult = document.getElementById("change_result").value;

    var ph254_Select = document.getElementById("GS_select");
    var selectValue = GS_select.options[ph254_Select.selectedIndex].value;


    if(selectValue == 901){

        change_black = changeResult*0.6232;
        var final_black = change_black.toFixed(1);
        final_black *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = 0;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else if(selectValue == 903){

        change_white = changeResult*0.6648;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = 0;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else if(selectValue == 905){

        change_white = changeResult*0.6232*0.9;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_black = changeResult*0.6648*0.1;
        var final_black = change_black.toFixed(1);
        final_black *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else if(selectValue == 906){

        change_white = changeResult*0.6232*0.78;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_black = changeResult*0.6648*0.22;
        var final_black = change_black.toFixed(1);
        final_black *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else if(selectValue == 907){

        change_white = changeResult*0.6232*0.52;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_black = changeResult*0.6648*0.48;
        var final_black = change_black.toFixed(1);
        final_black *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else if(selectValue == 908){

        change_white = changeResult*0.6232*0.21;
        var final_white = change_white.toFixed(1);
        final_white *= 1;

        change_black = changeResult*0.6648*0.79;
        var final_black = change_black.toFixed(1);
        final_black *= 1;

        change_H345 = changeResult*0.2186;
        var final_H345 = change_H345.toFixed(1);
        final_H345 *= 1;

        change_TH345 = changeResult*0.3448;
        var final_TH345 = change_TH345.toFixed(1);
        final_TH345 *= 1;

        document.getElementById("white").innerHTML = final_white;
        document.getElementById("black").innerHTML = final_black;
        document.getElementById("H345").innerHTML = final_H345;
        document.getElementById("TH345").innerHTML = final_TH345;

    }else{
        window.location.href = 'calculator_mixing1.html';
    }
}

$('#reset').click(function () {

    //처음 위치로 돌아가기 
    $("#GS_select option:eq(0)").prop("selected", true);
    $("#white").html(GS901.white);
    $("#black").html(GS901.black);
    $("#H345").html(H345);
    $("#TH345").html(TH345);
    $("#change_result").val("1000");

});
