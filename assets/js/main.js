const navbar = document.querySelector('.navbar')
const headerContentSpan = document.querySelector('.carousel-caption span')
const loading = document.querySelector('.loading')
const scrollToTop = document.querySelector('.scroll-to-top')
const logos = document.querySelector('.logos')

window.addEventListener('scroll',function(){
    if(window.scrollY >=  headerContentSpan.offsetTop){
        navbar.style.backgroundColor = 'rgba(252, 247, 238, 0.95)'
    }
    else{
        navbar.style.backgroundColor = 'transparent'
    } 
    if(window.scrollY > logos.offsetTop){
        scrollToTop.classList.remove('opacity-0' , 'invisible')
    } 
    else{
        scrollToTop.classList.add('opacity-0' , 'invisible')
    }  
})

window.addEventListener('load',function(){
    this.setTimeout(function(){
        loading.classList.add('opacity=0','invisible')
        document.body.style.overflow = 'auto'
    },2000)
})

scrollToTop.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
