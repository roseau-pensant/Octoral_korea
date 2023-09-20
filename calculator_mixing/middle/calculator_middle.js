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

const H25 = 14.4;
const TA910 = 22.6;

function changeSelect(){
    var Select = document.getElementById("selectbox");
    // select element에서 선택된 option의 value가 저장된다.
    var selectValue = Select.options[Select.selectedIndex].value;
    // select element에서 선택된 option의 text가 저장된다.
    var selectText = Select.options[Select.selectedIndex].text;

    if(selectValue==GS901){
        document.getElementById("white").innerHTML = GS901.white;
        document.getElementById("black").innerHTML = GS901.black;
    }else if(selectValue==GS903){
        document.getElementById("white").innerHTML = GS903.white;
        document.getElementById("black").innerHTML = GS903.black;
    }else if(selectValue==GS905){
        document.getElementById("white").innerHTML = GS905.white;
        document.getElementById("black").innerHTML = GS905.black;
    }else if(selectValue==GS906){
        document.getElementById("white").innerHTML = GS906.white;
        document.getElementById("black").innerHTML = GS906.black;
    }else if(selectValue==GS907){
        document.getElementById("white").innerHTML = GS907.white;
        document.getElementById("black").innerHTML = GS907.black;
    }else if(selectValue==GS908){
        document.getElementById("white").innerHTML = GS908.white;
        document.getElementById("black").innerHTML = GS908.black;
    }

}

function calculator() {

}