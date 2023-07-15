var a="";
function clearchar(){
    a="0";
    document.getElementById("c1").innerHTML="0";
}
function display(value){
    a+=value;
    document.getElementById("c1").innerHTML=a;
}
function calculate(){
    var p=a;
    var q=eval(p);
    document.getElementById("c1").innerHTML=q;
    a=q;
}
function back()
{
    if(a.length=1)
    {
    a=a.slice(0,-1);
    document.getElementById("c1").innerHTML=a;
    }
    else
    {
        a="";
        document.getElementById("c1").innerHTML=a;
    }
}