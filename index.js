var color=["green","red","yellow","blue"];
var pattern=[];
var user=[];
var level=0;
var start=false;

document.addEventListener("keydown",function(e)
{
  if(!start)
  {

    start=true;
    nextseq();

  }
});
function nextseq()
{
  level++;
  document.querySelector('#level-title').textContent="Level "+level;
  user=[];
  var randno=Math.floor((Math.random()*100) % 4);
    pattern.push(color[randno]);
    console.log(randno);
    for(var i=0;i<pattern.length;i++)
    {
      var col="."+pattern[i];
      func(col,i);
    }
    // checkans();

}
var loc=document.querySelectorAll('.btn');
for(var i=0;i<loc.length;i++)
{
  loc[i].addEventListener("click",function()
{

  var col=this.getAttribute('id');

  $("#" +col).fadeIn(100).fadeOut(100).fadeIn(100);
user.push(this.getAttribute('id'));
checkans(user.length-1);
});
}
function checkans(currentlevel)
{
if(user[currentlevel]===pattern[currentlevel])
{
  if(user.length==pattern.length)
  {
    setTimeout(function()
  {
    nextseq();
  },1000);
  }
}
else{
document.querySelector('body').className='game-over';
  document.querySelector('h1').textContent='Game Over';
setTimeout(()=>{
    startover();
},2000);

}
}
function startover()
{
  level=0;
  document.querySelector('body').classList.remove('game-over');
  start=false;
    document.querySelector('h1').textContent='Press A key to Start';
    pattern=[];
}

function func(col,i)
{

setTimeout(()=>
{
  setTimeout(() => {document.querySelector(col).style.setProperty('opacity',0)},100);
  var str=col.substring(1);
var audio=new Audio("sounds/"+str+".mp3");
audio.play();
   setTimeout(() => {document.querySelector(col).style.setProperty('opacity',1)},400);
},500*(i+1));

}
// function checkans(user)
// {
//   var loc=document.querySelectorAll('.btn');
//   var count=0;
//   for(let i=0;i<loc.length;i++)
//   {
//     loc[i].addEventListener("click",function()
//   {
//
//     var inp=this.getAttribute("id");
//     switch(inp)
//     {
//       case "green":
//       user.push(0);
//       break;
//       case "red":
//       user.push(1);
//       break;
//       case "yellow":
//       user.push(2);
//       break;
//       case "blue":
//       user.push(3);
//       break;
//     }
//     // alert(inp);
//   // if(inp=="green")
//   // user.push(0);
//   // else if(inp=="red")
//   // user.push(1);
//   // else if(inp=="yellow")
//   // user.push(2);
//   // else if(inp=="blue")
//   // user.push(3);
//   console.log(user);
//   if(user[count]!=pattern[count] )
//   {
//     document.querySelector('h1').textContent="Refresh";
//
//   }
//   // if(count==pattern.length)
//   // {
//   //
//   //     nextseq();
//   //
//   //
//   // }
//   count++;
//   });
//   }
//
// }
// function nextseq()
// {
//   var randno=Math.floor((Math.random()*100) % 4);
//   pattern.push(randno);
//   console.log(randno);
// }
//   nextseq();
// while(1)
// {
//   var user=[];
//
//   // var randno=Math.floor((Math.random()*100) % 4);
//   // pattern.push(randno);
//   // console.log(randno);
//   // pattern.forEach((element,i)=>{
//   //       setTimeout(() => {
//   //           $("." + element).fadeOut(100).fadeIn(100);
//   //           // playSound(element);
//   //       }, i * 500);
//   //   });
//   for(let i=0;i<pattern.length;i++)
//   {
//     var col="."+color[pattern[i]];
//
//   func(col,i);
// //     console.log(col);
// //     // $(col).fadeOut(500*(i+1));
// //     //   $(col).fadeIn(800*(i+1));
// // $(col).fadeOut(100).fadeIn(200);
//    // setTimeout(() => {document.querySelector(col).style.setProperty('opacity',0)},500*(i+1));
//    //
//    //  setTimeout(() => {document.querySelector(col).style.setProperty('opacity',1)},800*(i+1));
//
//
//
//
// }
// checkans(user);
// nextseq();
// // var loc=document.querySelectorAll('.btn');
// // var count=0;
// // for(let i=0;i<loc.length;i++)
// // {
// //   loc[i].addEventListener("click",function()
// // {
// //
// //   var inp=this.getAttribute("id");
// //   switch(inp)
// //   {
// //     case "green":
// //     user.push(0);
// //     break;
// //     case "red":
// //     user.push(1);
// //     break;
// //     case "yellow":
// //     user.push(2);
// //     break;
// //     case "blue":
// //     user.push(3);
// //     break;
// //   }
// //   // alert(inp);
// // // if(inp=="green")
// // // user.push(0);
// // // else if(inp=="red")
// // // user.push(1);
// // // else if(inp=="yellow")
// // // user.push(2);
// // // else if(inp=="blue")
// // // user.push(3);
// // console.log(user);
// // if(user[count]!=pattern[count] )
// // {
// //   document.querySelector('h1').textContent="Refresh";
// //
// // }
// // count++;
// // });
// // }
// if(pattern.length>=5)
// {
// // {setTimeout(function()
// // {
// //   clearTimeout(wh);
// //   clearTimeout(cl);
// // });
//     break;
// }
//
// }
// // var j=4
// // while(j--)
// // {
// //   var level=1;
// //   var randno=Math.floor(Math.random()*4);
// //   var arr=[];
// //   arr.push(randno);
// //   var n=arr.length;
// //   var color;
// //   switch(randno)
// //   {
// //     case 0:color="green";
// //     break;
// //     case 1:color="red";
// //     break;
// //     case 2:color="yellow";
// //     break;
// //     case 3:color="blue";
// //     break;
// //   }
// //   $("."+color).fadeOut(1000);
// //     $("."+color).fadeIn(1000);
// //   for(var i=0;i<n;i++)
// //   {
// //     console.log(i);
// //     var colort;
// //     $(".btn").on("click",function(){
// //         colort=this.id;
// // console.log(colort);
// //
// // switch(arr[i])
// // {
// //   case 0:color="green";
// // //  alert(color);
// //   break;
// //   case 1:color="red";//alert(color);
// //   break;
// //   case 2:color="yellow";//alert(color);
// //   break;
// //   case 3:color="blue";//alert(color);
// //   break;
// // }
// //
// // if(color!=colort)
// // {
// //   console.log(color+" "+colort);
// //   level=0;
// // //    alert(color+" " +colort);
// //   break;
// // }
// //
// //       //  alert(colort);
// //         //alert(colort);
// //     });
// //   }
// //
// //
// //
// //
// //
// //   if(level===0)
// //   {
// //     //alert("game over");
// //     break;
// //   }
// //
// //   level++;
// // }
