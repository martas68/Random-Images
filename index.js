const imageContainerEl = document.querySelector(".img-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    //when clicked we want to load more images
    imageNum = 10;
    //and call the function that we created it bellow
    addNewImgages();
});
// function to add more images to the container.
function addNewImgages(){
    for(let i = 0; i<imageNum; i++){
        const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=1${Math.floor(Math.random() *2000)}`;
    imageContainerEl.appendChild(newImgEl);
    }
    
}