window.onload = function(){
    //cont1 -left 
    //  -스크롤 fixed
    var cont1Left = document.querySelector(".cont1-left > div");

    document.addEventListener("scroll", function() {
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 501){
            cont1Left.style.position = "relative";
            cont1Left.style.width = "100%";
        }else if(document.documentElement.scrollTop < 500){
            cont1Left.style.position = "fixed";
            cont1Left.style.width = "40%"
        };
    })
    

    //cont2 가운데-스크롤이벤트
    var cont2Center = document.querySelector(".conts2-2")
    // document.addEventListener("scroll",function(){
    //     if(document.documentElement.scrollTop < 999){
    //         cont2Center.style.transform = "translateY(0px)"
    //     }
    //     else if(document.documentElement.scrollTop > 1000){
    //         cont2Center.style.transform = "translateY(-200px)"
    //     }
    // });

    // for (var i = 0; i < 2188; i++){
    //     if(document.documentElement.scrollTop > 1000){
    //         cont2Center.style.tranform = `translateY(${i*200} + 1000)px`
    //     }
    // }



    //cont3 -스크롤이벤트
    var cont3Left = document.querySelector(".cont3-left");
    var cont3Right = document.querySelector(".cont3-right");

    document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 2800){
            cont3Left.style.transform = "translateX(0px)";
            cont3Right.style.transform = "translateX(0px)";
        }else if(document.documentElement.scrollTop < 2800){
            cont3Left.style.transform = "translateX(-999px)";
            cont3Right.style.transform = "translateX(999px)";
        }
    })


}