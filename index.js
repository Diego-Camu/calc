function soma(){
    var num1 = document.getElementById("inputnum1").value;
    var num2 = document.getElementById("inputnum2").value;
    var result=(Number(num1)+Number(num2));
    var res = window.document.querySelector("#abc");
    res.innerHTML=result;
}
function sub(){
    var num1 = document.getElementById("inputnum1").value;
    var num2 = document.getElementById("inputnum2").value;
    var result=(Number(num1)-Number(num2));
    var res = window.document.querySelector("#abc");
    res.innerHTML=result;
}
function div(){
    var num1 = document.getElementById("inputnum1").value;
    var num2 = document.getElementById("inputnum2").value;
    var result=(Number(num1)/Number(num2)).toFixed(2);
    var res = window.document.querySelector("#abc");
    res.innerHTML=result ;
}
function mult(){
    var num1 = document.getElementById("inputnum1").value;
    var num2 = document.getElementById("inputnum2").value;
    var result=(Number(num1)*Number(num2));
    var res = window.document.querySelector("#abc");
    res.innerHTML=result;
}

     
