document.addEventListener("DOMContentLoaded", function (){
    const usernameInput = document.getElementById("Input");
    const btnUser = document.getElementById("btn");
    btnUser.addEventListener("click", function (){
    if (usernameInput.value === ""){
        usernameInput.classList.add("error-border");
    } else{
        usernameInput.classList.remove("error-border");
    }
    });
    const elements = document.querySelectorAll(".border_image, .part_3, .part_4, .part_5");
    function checkVisibility(){
        elements.forEach((element) =>{
            const bounding = element.getBoundingClientRect();
            if (bounding.top <= window.innerHeight && bounding.bottom >= 0){
                element.classList.add("animated");
            }
        });
    }
    window.addEventListener('resize', function(){
        const txt1Element = document.getElementById('txt1');
        if (window.innerWidth >= 810){
            txt1Element.textContent = 'MR Medicina y Fisioterapia';
        } else if(window.innerWidth <= 809){
            txt1Element.textContent = 'MR';
        }
    });
    window.dispatchEvent(new Event('resize'));
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
