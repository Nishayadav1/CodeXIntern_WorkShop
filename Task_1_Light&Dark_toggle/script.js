const btn=document.querySelector('button');
const container=document.querySelector('.container')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if( container.innerText==='Dark'){
        container.style.backgroundColor="Black";
        btn.style.backgroundColor='white';
        btn.style.color='black';
        btn.innerText='Light'
    }else{
        container.style.backgroundColor="white";
        btn.style.backgroundColor='black';
        btn.style.color='white';
        btn.innerText='Dark'
    }    

    // console.log('nisha')
})

