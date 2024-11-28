var name=" ";
function enterdetails(){
  b=false;
  do {
    name = window.prompt("give yuor name");
    for(var i=0;i<name.length;i++){
      if (name.charAt(i)<'A'||name.charAt(i)>'z')
             break;
       } 
       if(i==name.length)
           b=true;
  } while (b==false||name.length<1);
  start(); 
}
if(localStorage.getItem("minTry")==null)
localStorage.setItem("minTry",1000);
var countTry;
var result;
var imgwin;
var chance1=new Array();
var secret=new Array();
function start()
{
  if(result==null){
    result = document.createElement("div");
    document.getElementById("bd").appendChild(result);  
  }
document.getElementById("bd").removeChild(result);
document.getElementById("result").innerText="";
countTry=0;
for(var i=1;i<4;i++){
document.getElementById("eye"+i).setAttribute('class','eye');
document.getElementById("nose"+i).setAttribute('class','nose');
document.getElementById("mouse"+i).setAttribute('class','mouse');
}
document.getElementById("tocheking").addEventListener("click",check);
    secret[0] = eyes[Math.floor(Math.random() * 3)].id;
    secret[1] = noses[Math.floor(Math.random() * 3)].id;
    secret[2] = mouses[Math.floor(Math.random() * 3)].id;
    chance1=[null,null,null];
var a= document.createElement("div");
var b= document.createElement("div");
var c= document.createElement("div");
document.getElementById("bd").appendChild(a); 
a.setAttribute("id","eye");  
document.getElementById("bd").appendChild(b); 
b.setAttribute("id","nose");  
document.getElementById("bd").appendChild(c); 
c.setAttribute("id","mouse");  
}
const eyes=document.getElementsByClassName("eye");
const noses=document.getElementsByClassName("nose");
const mouses=document.getElementsByClassName("mouse");

function chance(e)
{
  var img= document.createElement('img'); 
  img.src= e.target.src; 
 document.getElementById("bd").appendChild(img);
switch (e.target.className){
    
    case 'eye':
     chance1[0]=e.target.id; 
     document.getElementById("bd").removeChild(document.getElementById("eye"));
     img.setAttribute("id","eye");
     break;
     case 'nose':
     chance1[1]=e.target.id;   
     document.getElementById("bd").removeChild(document.getElementById("nose"));
     img.setAttribute("id","nose");
     break;
    case 'mouse':
    chance1[2]=e.target.id; 
    document.getElementById("bd").removeChild(document.getElementById("mouse"));
    img.setAttribute("id","mouse");  
     break;       
    default:
        break;
}

}
function check(){
  countTry++;
    var bool = FindBulls();
    document.getElementById("result").innerText=" bool: " +bool + "      Hitt: " +  (parseInt(FindHittings()) - parseInt(bool)); 
    if(bool == 3)
    win();
   }
   function FindBulls()
{
    var count = 0;
    for (let i = 0; i < 3; i++)
    {
        if (secret[i] == chance1[i])
            count++;
    }
    return count;
}
function FindHittings()
{ 
  var count = 0;
  countsecret=[0,0,0];
  countchnce=[0,0,0];
  for(i=0;i<3;i++)
  {
    countchnce[parseInt(chance1[i].charAt(chance1[i].length-1))-1]++;
    countsecret[parseInt(secret[i].charAt(secret[i].length-1))-1]++;
  }
  for(i=0;i<3;i++){
    count+=Math.min(countchnce[i],countsecret[i])
  }

 return count;
}
var b;

function win(){
   document.getElementById("myAudio").play();
   result=document.createElement("div");
   result.setAttribute("id","resultWin");
   document.getElementById("bd").appendChild(result);
   imgwin= document.createElement("img");
   imgwin.src="../img/wow.gif";
   result.appendChild(imgwin);
   var face=document.createElement("div");
   face.setAttribute("id","face");
   result.appendChild(face);
   var eye=document.createElement("img");
   eye.setAttribute("id","eyeWin");
   eye.src=document.getElementById("eye").src;
   face.appendChild(eye);
   var nose=document.createElement("img");
   nose.setAttribute("id","noseWin");
   nose.src=document.getElementById("nose").src;
   face.appendChild(nose);
   var mouse=document.createElement("img");
   mouse.setAttribute("id","mouseWin");
   mouse.src=document.getElementById("mouse").src;
   face.appendChild(mouse);
   var text = document.createElement("div");
   result.appendChild(text);
   text.setAttribute("id","text")
   text.innerText= name + "  this is the right face!!  😊"+" "
   text.innerText+="the number of attemts: " + countTry
   +"    "+"          your record: ";
  if (parseInt(localStorage.getItem("minTry")) > countTry){
     localStorage.setItem("minTry",countTry);}
  text.innerText+=localStorage.getItem("minTry");
  var bt= document.createElement("button");
   bt.setAttribute("id","bt")
   bt.innerHTML="new game";
   bt.addEventListener("click",start);
   text.appendChild(bt);
  document.getElementById("bd").removeChild(document.getElementById("eye"));
  document.getElementById("bd").removeChild(document.getElementById("nose"));
  document.getElementById("bd").removeChild(document.getElementById("mouse"));
  imgwin.setAttribute("width","3%");
  imgwin.setAttribute("height","1%");
  b = setInterval(makebig, 40);
}
var maxw = 540, maxh = 540;
function makebig() {
    if (imgwin.width < maxw && imgwin.height < maxh) {
      imgwin.width += 3;
      imgwin.height += 2.1;
    }
    else {
        clearInterval(b)
    }
}



