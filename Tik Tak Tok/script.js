let btn=document.querySelectorAll(".btn");
let a="X";
let reset=document.querySelector("#reset")
let msg=document.querySelector(".name")
let m=document.querySelector(".winMasage")
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]



]

reset.addEventListener("click",()=>{
    for(let a of btn){
        a.disabled=false;
        a.innerText="";
        m.classList.add("hide");

        
    }
    

})
const box=()=>{
    for(let box of btn){
        box.disabled=true;
    }
}
btn.forEach((box) => {
    box.addEventListener("click",()=>{
        if(a=="X"){
            box.innerText="O";
            box.style.Color="black";
            a="O";
        }else{
            box.innerText="X";
            a="X";
    
        }
        box.disabled=true;
        winner()
    })

})
const winner = () =>{
    for(let i of win){
        let val1=btn[i[0]].innerText;
        let val2=btn[i[1]].innerText;
        let val3=btn[i[2]].innerText;
        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1 === val2 && val2 === val3){
                console.log("winner Is",val1)
            
                box();
                m.classList.remove("hide");
                m.innerHTML=`Winner is ${val1}`;
                
                
               
                
            }
        }
       

        
    };
    
    

}
