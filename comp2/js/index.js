var v = false;
var b = false;
var vs = true;

setInterval(function()
{
    if(v == true)
    {
        document.getElementById("n").src = "img/lk4.png"
    }
    else
    {
        document.getElementById("n").src = "img/lk3.png"   
    }
},9000)

setInterval(function()
{
    if(vs == true)
    {
        document.getElementById("img").src = "img/lk.png"
    }
    else
    {
        document.getElementById("img").src = "img/lk.jpg"   
    }
},21000)

setInterval(function()
{
    if(b == false)
    {
        document.getElementById("nn").src = "img/ll.png"
    }
    else
    {
        document.getElementById("nn").src = "img/l.png"   
    }
},9000)

setInterval(function(){
    if(b == false)
    {
        b = true;
    }
    else
    {
        b = false
    }
    if(v == true)
    {
        v = false;
    }
    else
    {
        v = true
    }
},8000);

setInterval(function(){
    if(vs == true)
    {
        vs = false;
    }
    else
    {
        vs = true
    }
},20000)

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  
});