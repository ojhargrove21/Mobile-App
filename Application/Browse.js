var i = 0;
var imgList = ["Assets/Dish1.webp","Assets/Dish2.jpeg","Assets/Dish3.jpg","Assets/Dish4.webp","Assets/Dish5.jpg","Assets/Dish6.jpg","Assets/Dish7.jifi"];
function imgNext(){
    i++;
    console.log(i);
    var imgNow = document.getElementById("rImage");
    imgNow.src = imgList.pop();
    
}