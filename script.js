document.addEventListener("DOMContentLoaded", function(){
    const galleryList = document.querySelectorAll(".gallery img");
    const galleryBox = document.querySelector(".lightbox_overlay");
    const lightBox = document.querySelector(".lightbox-img");

    function showLightBox(event){
        const imageSrc = this.getAttribute("data-lightbox");

        event.preventDefault();
        lightBox.setAttribute("src", imageSrc);
        galleryBox.classList.add("visible");
        hideLightBox();
    }

    function hideLightBox(){
        galleryBox.addEventListener("click", function(){
            this.classList.remove("visible");
        });
    }
    
    galleryList.forEach((item)=>{
        item.addEventListener("click", showLightBox)
    });   
    
})