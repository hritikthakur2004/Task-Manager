function openCards(){
    let allelem  = document.querySelectorAll(".elem");
let btn = document.querySelectorAll(".backbutton");
let fullallelem = document.querySelectorAll(".fullElem")
allelem.forEach((element) => {
   
    element.addEventListener("click",()=>{
       fullallelem[element.id].style.display = 'block';

    })
    
    

});
btn.forEach(function(back){
    back.addEventListener("click",function(){
         fullallelem[back.id].style.display = 'none';
    })
})

}
openCards();
