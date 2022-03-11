var kichThuoc = document.getElementsByClassName("slider")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = chuyenSlide.getElementsByTagName("img");
var Max = kichThuoc * Img.length;
Max -= kichThuoc;

var chuyen = 0;
function Next() {
    if(chuyen <Max) {
        chuyen += kichThuoc;
    } else {
        chuyen = 0;
    }
   
    chuyenSlide.style.marginLeft =  '-'+ chuyen + 'px';

}

function Back() {
    if(chuyen == 0) {
        chuyen = Max;
    } else {
        chuyen -=kichThuoc;
    }
    
    chuyenSlide.style.marginLeft =  '-'+ chuyen + 'px';
}

setInterval(function(){
    Next();
}, 3000); //thực hiện vĩnh viễn

/*setTimeout(function(){
    Next();
}, 3000)*/ //thực hiện 1 lần duy nhất