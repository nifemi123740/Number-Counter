var number;
var numbers=['1', '2', '3', '4', '5' , '6']
var stopped=true
var t;

function change(){
    var random=Math.floor(Math.random()*6)
    number.innerHTML=numbers[random]
}
function stopStart(){
    if(stopped){
        stopped=false
        t=setInterval(change,100)
    }else{
        clearInterval(t)
        stopped=true
    }
}
window.onload=function(){
    number=document.getElementById('number')
    stopStart();
}