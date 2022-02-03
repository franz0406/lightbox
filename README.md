## 라이트박스 기본 순수 자바스크립트

#### STEP 1. HTML
```html
<div class="gallery-container">
    <ul class="gallery">
        <li><a href="#"><img src="img1" alt="" data-lightbox="img1.png"></a></li>
        <li><a href="#"><img src="img2" alt="" data-lightbox="img2.png"></a></li>
        <li><a href="#"><img src="img3" alt="" data-lightbox="img3.png"></a></li>
        <li><a href="#"><img src="img4" alt="" data-lightbox="img4.png"></a></li>
        <li><a href="#"><img src="img5" alt="" data-lightbox="img5.png"></a></li>
        <li><a href="#"><img src="img6" alt="" data-lightbox="img6.png"></a></li>
    </ul>
</div>
<div class="lightbox_overlay">
    <img class="lightbox-img" src="img1" alt="">
</div>
```
---
---
#### STEP 2. CSS
```css
.lightbox_overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0; left: 0;

    opacity: 0;
    pointer-events: none;
}

.lightbox_overlay.visible{
    opacity: 1;
    pointer-events: auto;
}
```
---
---
#### STEP 3. JavaScript 
```javascript
const galleryList = document.querySelectorAll(".gallery img");
const galleryBox = document.querySelector(".lightbox_overlay");
const lightBox = document.querySelector(".lightbox-img");

galleryList.forEach((item)=>{
    item.addEventListener("click", showLightBox)
});

function showLightBox(e){
    const imageSrc = this.getAttribute("data-lightbox");  
    
    e.preventDefault();
    lightBox.setAttribute("src", imageSrc);
    galleryBox.classList.add("visible");
    hideLightBox();
}

function hideLightBox(){
    galleryBox.addEventListener("click", function(){
        this.classList.remove("visible");
    });
}

// 1. 이미지 마다 클릭이벤트 추가
// 2. 클릭한 이미지의 data-lightbox 속성을 가져온다.
// 3. 가져온 값을 lightBox 이미지의 속성의 값으로 넣어준다.
// 4. 그리고 galleryBox 의 스타일이 적용 될 클래스명을 추가해준다.
// 5. galleryBox에 클릭이벤트 추가
// 6. 클릭시 4번에 추가해준 클래스명 삭제.

```