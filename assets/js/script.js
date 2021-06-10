
const showBrands = () =>{
    let animatedElement = document.querySelectorAll('.brand__img');
    let scrollTop = document.documentElement.scrollTop;
    let scrollNesesery = (document.documentElement.scrollHeight / 2) - 150;
    animatedElement.forEach( el => {
        if(scrollNesesery < scrollTop){
            el.classList.add('brand__animation');
        }
        if(scrollNesesery > scrollTop){
            el.classList.remove('brand__animation');
        }
    });
}

const showLabel = () =>{
    let animatedElement = document.querySelector('.section__label');
    let scrollTop = document.documentElement.scrollTop;
    let scrollNesesery = 10;
    
        if(scrollNesesery < scrollTop){
            animatedElement.classList.add('label__animation');
        }
        if(scrollNesesery > scrollTop){
            animatedElement.classList.remove('label__animation');
        }
}

const showFooter = () =>{
    let animatedElement = document.querySelectorAll('.footer__block');
    console.log(animatedElement);
    let scrollTop = document.documentElement.scrollTop;
    let scrollNesesery = (document.documentElement.scrollHeight / 2) - 350;
    animatedElement.forEach( el => {
        if(scrollNesesery < scrollTop){
            el.classList.add('block__animation');
        }
        if(scrollNesesery > scrollTop){
            el.classList.remove('block__animation');
        }
    });
}


window.addEventListener('scroll', showFooter);

window.addEventListener('scroll', showBrands);

window.addEventListener('scroll', showLabel);