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
})();