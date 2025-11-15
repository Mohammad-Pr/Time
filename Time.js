 var data=new Date();

 var s = data.getSeconds();
 var m = data.getMinutes();
 var h = data.getHours();

 var timer;
 var flag_start = false 

 function Time(){
 document.getElementById("div_id").innerHTML = h+":"+m+":"+s;
 s = s+1;
  if( s > 59){
   m = m+1;
   s = 0;
  }
  if( m > 59){
   h = h+1;
   m = 0;
  }
 }
 function start(){
 timer=setInterval(Time,1000);
 }

function stop(){
clearInterval(timer)
 }
 function reset(){
 document.getElementById("div_id").innerHTML = "0:0:0";
   s = 0;
   m = 0;
   h = 0;
 }