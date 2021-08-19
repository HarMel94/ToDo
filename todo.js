const form = document.querySelector(".form"),
      input = document.querySelector(".input"),
      result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const textAdd = input.value;

    if(textAdd){
        const newLi = document.createElement("p"),   
              resLi = result.appendChild(newLi);
        
        resLi.innerHTML = input.value;

        resLi.addEventListener("click", () => {
            resLi.classList.toggle("done")
        });

        input.value = "";
    };    
});