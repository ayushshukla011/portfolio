let index=0;
imagechange();
 

function imagechange(){
let slides=document.getElementsByClassName("slide");
let doots=document.getElementsByClassName("dot");
let i;
for( i=0;i<slides.length;i++){
    slides[i].style.display="none";
    doots[i].style.background="#1f242d";
}
index++;
 if(index>slides.length){index=1}
 slides[index-1].style.display="block";
 doots[index-1].style.background="#0ef";
 setTimeout(imagechange,4000);
}

let know = document.querySelector('.knowme');
let content = document.querySelector('.maininfo');
let cross = document.getElementById('clo');

know.addEventListener('click', function(){
content.style.display = "block";
})
cross.addEventListener('click', function(){
content.style.display ="none";
})
