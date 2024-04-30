
function click(){
let a=document.getElementById('num').value;
a=a+1;
document.getElementById('num').innerHTML=a;
}

function reset(){
    document.getElementById('num').innerHTML="0";
}

function red(){
    document.getElementById('dis').style.backgroundColor="red";
}

function blue(){
    document.getElementById('dis').style.backgroundColor="blue";
}