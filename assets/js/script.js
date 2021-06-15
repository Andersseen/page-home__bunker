

//SHOW COVER ANIMATED
const showCover = () => {
    let coverTitle = document.querySelector('.main__title');
    let coverSubtitle = document.querySelector('.main__subtitle');
    let coverText = document.querySelectorAll('.main__text');
    let coverButttons = document.querySelector('.main__buttons');

    let scrollTop = document.documentElement.scrollTop;
        if(scrollTop == 0){
            coverTitle.classList.add('main__title-animated');
            coverText.forEach(el =>{
                el.classList.add('main__text-animated');
            })
            coverButttons.classList.add('main__buttons-animated');
        }
        if(scrollTop > 0){
            coverTitle.classList.remove('main__title-animated');
            coverText.forEach(el =>{
                el.classList.remove('main__text-animated');
            })
            coverButttons.classList.remove('main__buttons-animated');
            
        }
}
        //SHOW FOOTER ANIMATED
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

const showTitleBrands = () =>{
    let animatedElement = document.querySelectorAll('hr');
    let scrollTop = document.documentElement.scrollTop;
    let scrollNesesery = (document.documentElement.scrollHeight / 2) - 50;
    animatedElement.forEach( el => {
        if(scrollNesesery < scrollTop){
            el.classList.add('hr__animation');
        }
        if(scrollNesesery > scrollTop){
            el.classList.remove('hr__animation');
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

    let animatedFooterBlock_1 = document.querySelector('.footer__block_1');
    let animatedFooterBlock_2 = document.querySelector('.footer__block_2');
    let animatedFooterBlock_3 = document.querySelector('.footer__block_3');
    let animatedFooterBlock_4 = document.querySelector('.footer__block_4');

    let scrollTop = document.documentElement.scrollTop;
    let heigthFooter = 400;

    if(heigthFooter < scrollTop){
        animatedFooterBlock_1.classList.add('footer__block_1-animated');
        animatedFooterBlock_2.classList.add('footer__block_2-animated');
        animatedFooterBlock_3.classList.add('footer__block_3-animated');
        animatedFooterBlock_4.classList.add('footer__block_4-animated');
    }
    if(heigthFooter > scrollTop){
        animatedFooterBlock_1.classList.remove('footer__block_1-animated');
        animatedFooterBlock_2.classList.remove('footer__block_2-animated');
        animatedFooterBlock_3.classList.remove('footer__block_3-animated');
        animatedFooterBlock_4.classList.remove('footer__block_4-animated');
    }

}

window.onscroll = () => {
    showCover()
    showFooter()
    showBrands()
    showTitleBrands()
    showLabel()
}