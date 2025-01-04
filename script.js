function makebuble (){let clutter ='';
for (let i = 0; i <176 ;i++) {
    let num = Math.floor(Math.random()*10)
    clutter+=` <div class="buble">${num}</div>`
}
document.querySelector("#pbotom").innerHTML=clutter;}
makebuble();


let timer =60 ;
function runtimer(){
  let timer1 =  setInterval(function(){
    if(timer>0){
      document.querySelector("#timeinterval").innerHTML =timer--
    }
    
    else{
      clearInterval(timer1)
      document.querySelector('#pbotom').innerHTML=`<h1> Game Over </h1>`
    }
  },1000)}
  runtimer()
  function startimer(){
    clearInterval(timer1)
  }



let num1;
function hit(){
 num1 = Math.floor(Math.random()*10)
  document.querySelector("#hitvalue").innerHTML=num1
}
hit()


let score =0;
function increasescore(){
  score+=10
 document.querySelector("#score").textContent =score
}
function decreasescore(){
  score-=5
  document.querySelector("#score").textContent =score
}


 function start(){document.querySelector("#pbotom").addEventListener('click',function(e){
 
    let value = Number(e.target.textContent)
    if(num1==value){
      increasescore();
      makebuble();
      hit()
    }
    
    else{
      alert('YOUR SCORE IS DEDUCTED BY 5 EACH TIME WHEN YOU CLICK WRONG NUMBER')
      decreasescore()
      


      
   
      
     
    }

})}
start()
// document.querySelector('#restart').addEventListener("click",function(e){
//   makebuble()
//   hit()

//   runtimer()
//   start()}
 
// )




  
