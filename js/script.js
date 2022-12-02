
$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 500){
           $("header").addClass("sticky")
       }else{
           $("header").removeClass("sticky")
       }
    })
   });
   
   $(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 500){
           $(".navbar").addClass("sticky")
       }else{
           $(".navbar").removeClass("sticky")
       }
    })
   });
//Javascript for toggle dropdown menus
$(document).ready(function(){
    //toggle sub-menus
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
});
    
});

//Banner Slider
$(document).ready(function(){
    $('.slider-area').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        autoPlay:true,
        navText:['<span><i class="fa-solid fa-arrow-left"></i></span>' ,'<span><i class="fa-solid fa-arrow-right"></i></span>'],
   
    })

  });
  
  $(document).ready(function(){
    $('.cat-slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText:['<span><i class="fa-solid fa-arrow-left"></i></span>' ,'<span><i class="fa-solid fa-arrow-right"></i></span>'],
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:5,
            },
            1000:{
                items:7,
            }
        }
    })

  });

  //Blog post 
  $(document).ready(function(){
    $('.blog-pos-slider').owlCarousel({
        items:1,
        margin:40,
        loop:true,
        nav:true,
        dots:false,
        navText:['<span><i class="fa-solid fa-arrow-left"></i></span>' ,'<span><i class="fa-solid fa-arrow-right"></i></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

  });
  //Company Slider
  $(document).ready(function(){
    $('.company-slider').owlCarousel({
        items:1,
        margin:60,
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    })

  });
  //News Silder Post image
  $(document).ready(function(){
    $('.news-slider-img').owlCarousel({
        items:1,
        margin:40,
        loop:true,
        nav:true,
        dots:false,
        navText:['<span><i class="fa-solid fa-arrow-left"></i></span>' ,'<span><i class="fa-solid fa-arrow-right"></i></span>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

  });
  $(document).ready(function(){
    $('.clint-feedback-clider').owlCarousel({
        items:1,
        margin:40,
        loop:true,
        nav:false,
        dots:false,
        autoplay: true,
        autoPlaySpeed: 2000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    })

  });
//Top Cart Rigth Side Data Show
let cartBtn = document.querySelector('#shortView-cart');
let cartData = document.querySelector('.cart-short-wrapper');
let cartCloseBtn = document.querySelector('.cart-top-btn')

cartBtn.addEventListener("click" ,function(){
    cartData.classList.add('cart-active');
});

cartCloseBtn.addEventListener("click",function(){
    cartData.classList.remove('cart-active');
});
//Menu bar responsive
let menuBtn = document.querySelector('#menubar-btn');
let menuBar = document.querySelector('.nav-bar');
let indexMenu= document.querySelector('.menu-index');
let menuCloseBtn = document.querySelector('.menu-close-btn');

menuBtn.addEventListener("click",function(){
    menuBar.classList.add('menu-active');
});
menuCloseBtn.addEventListener("click",function(){
    menuBar.classList.remove('menu-active');
});
menuBtn.addEventListener("click",function(){
    indexMenu.classList.add('menu-active');
});
menuCloseBtn.addEventListener("click",function(){
    indexMenu.classList.remove('menu-active');
});



//account page tab for javascript
let tabs = document.querySelectorAll(".acc-left-imtem");
let tabContents = document.querySelectorAll(".babs-div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
        content.classList.remove("active");
    });
    tabs.forEach((tab) => { 
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
//Shop Details page Product Description & Review Tab
let desReviewBtn = document.querySelectorAll('.tav-des-btn');
let proReview    = document.querySelectorAll('.proDesReviewDiv');

desReviewBtn.forEach((value,index ) =>{
    value.addEventListener("click",()=>{
        // console.log("helo")
        proReview.forEach((content) =>{
            content.classList.remove('open');
        });
        desReviewBtn.forEach(()=>{
            value.classList.remove('open');
        });
        proReview[index].classList.add('open');
        desReviewBtn[index].classList.add('open');
    });
});


//Shop Dtails image slider


let thamnails = document.getElementsByClassName('proSlideItem');
let ActiveImage = document.getElementsByClassName('proactive');
let buttonRight = document.getElementById('btnRgiht');
let buttonLeft = document.getElementById('btnlft');

for(var i = 0; i<thamnails.length; i++){
    thamnails[i].addEventListener('mouseover',function(){
        // console.log(ActiveImage)
        if(ActiveImage.length>0){
            ActiveImage[0].classList.remove('proactive')
        }
       if(ActiveImage.length>0){
        buttonLeft.addEventListener("click",function(){
            ActiveImage[0].classList.add('proactive')
        })
       }
        this.classList.add('proactive')
        document.getElementById('mainImage').src = this.src;
    });
}

buttonLeft.addEventListener("click",function(){
    document.getElementById("pro-img-slider").scrollLeft -= 180
});
buttonRight.addEventListener("click",function(){
    document.getElementById("pro-img-slider").scrollLeft += 180
});

