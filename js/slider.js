(function(){    
    const sliders = [...document.querySelectorAll('.product__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentProduct = document.querySelector('.product__body--show').dataset.id;
        value = Number(currentProduct);
        value+= add;
    
        sliders[Number(currentProduct)-1].classList.remove('product__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }
    
        sliders[value-1].classList.add('product__body--show');
    }
})();