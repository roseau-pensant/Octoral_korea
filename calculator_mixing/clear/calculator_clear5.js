//기본고정값
const C600 = 66.3;
const H60 = 33.8;
const C600_TA910 = 4.5;
const Sgravity = 0.903;

//첫로딩화면
document.getElementById("C600").innerHTML = C600;
document.getElementById("H60").innerHTML = H60;
document.getElementById("C600_TA910").innerHTML = C600_TA910;

//목표배합량에 따라 달라지는 변수
var change_C600 = 0;
var change_H60 = 0;
var change_C600_TA910 = 0;


function calculator(){

   //사용자가 배합량 설정후 클릭
   const changeResult = document.getElementById("change_result").value;

   change_C600 = changeResult*0.6627;
   var final_C600 = change_C600.toFixed(1);
   final_C600 *= 1;

   change_H25 = final_C600*0.50958;
   var final_H60 = change_H25.toFixed(1);
   final_H60 *= 1;

   change_C600_TA910 = (final_C600+final_H60)*0.05*Sgravity;
   const final_C600_TA910 = change_C600_TA910.toFixed(1);

   document.getElementById("C600").innerHTML = final_C600;
   document.getElementById("H60").innerHTML = final_H60;
   document.getElementById("C600_TA910").innerHTML = final_C600_TA910;

}

$(
'#reset').click(function () {

     //처음 위치로 돌아가기 
     $("#C600").html(C600);
     $("#H60").html(H60);
     $("#C600_TA910").html(C600_TA910);
     $("#change_result").val("100");

});