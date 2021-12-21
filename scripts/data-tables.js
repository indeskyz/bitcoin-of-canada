const scrollContainer = document.querySelectorAll(".horizontal-scroll");

scrollContainer.forEach((container) =>{
    container.addEventListener("wheel", (event)=>{
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    })
})

