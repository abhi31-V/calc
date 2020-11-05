let r=document.getElementById('in');
let s=''
but=document.querySelectorAll('button');
for(item of but)
{
    item.addEventListener('click',(e)=>
    {

       bt=e.target.innerText;
       
     if(bt=='X')
     {
         bt='*';
         s+=bt;
    
if(s.length>12)
{
    r.value='limit exceed';
}
else{
    r.value=s;
}
     }
     else if(bt=='C'){
         s=''
    r.value='';


     }
     else if(bt=='d')
     {
    
        s= s.slice(0,-1)
      
         r.value=s;
     }
     else if(bt=='=')
     {
         s=eval(s)
         if(s.length>12)
         {
             r.value='limit exceed';
         }
         else{
             r.value=s;
         }

     }
     
     else{
         s+=bt;
         if(s.length>12)
{
    r.value='limit exceed';
}
else{
    r.value=s;
}
     }
    })
}
