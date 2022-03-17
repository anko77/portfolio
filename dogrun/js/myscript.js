const target = document.querySelectorAll("#hero img");
let i = 0;

function changeImage() {
  setTimeout (() => {
    target[i].classList.remove("visible");
    i++;
    if(i>target.length-1){
      i = 0;
    }
    target[i].classList.add("visible");
    changeImage();
  },4000);

  
}

changeImage();