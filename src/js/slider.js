
       
  
        for(let i = 0; i < 8; i++) {

           document.body.append(sliderDot);
        };
        sliderDot.className = "slider__dot";


        sliderDot.addEventListener("click", () => {
            sliderDot.classList.add("active");
            alert("23e")
        });

