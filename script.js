function openPopup(img,title){

document.getElementById("popup").style.display="flex";

document.getElementById("popup-img").src=img;

document.getElementById("popup-title").innerText=title;

}


function closePopup(){

document.getElementById("popup").style.display="none";

}
