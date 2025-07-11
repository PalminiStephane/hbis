document.addEventListener('DOMContentLoaded',function(){
    const menuToggle=document.getElementById('menuToggle');
    const navMenu=document.getElementById('navMenu');
    if(menuToggle){
        menuToggle.addEventListener('click',()=>navMenu.classList.toggle('active'));
    }
    document.querySelectorAll('.nav-menu a').forEach(link=>{
        link.addEventListener('click',()=>navMenu.classList.remove('active'));
    });
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        if(window.scrollY>50){
            header.classList.add('scrolled');
        }else{
            header.classList.remove('scrolled');
        }
    });
});
