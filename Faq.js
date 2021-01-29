function dataC() {
    var x=document.forms["Cinfo"];
    var text="";
    var i;
    for(i=0;i<x.length;i++){
        text+=x.elements[i]+"<br>";
    }
    document.getElementsByClassName("Cdata").innerHTML= text;
}