$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
        $('.toggle').addClass("togglerActive");
    }
    else{
      $('.navbar').removeClass("sticky");
      $('.toggle').removeClass("togglerActive");

    }
    if(this.scrollY>500){
      $('.scroll-up-btn').addClass('show')
    }
    else{
      $('.scroll-up-btn').removeClass('show')
    }
  });
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
  });
/* typed js */
var typed=new Typed(".typing",{
  strings:["React","Angular","Javascript","Jquery","HTML","CSS","Bootstrap"],
  typedSpeed:200,
  backSpeed:200,
  loop:true,
});
var typed=new Typed(".typing-2",{
  strings:["Web Developer","React Developer","Angular Developer"],
  typedSpeed:200,
  backSpeed:200,
  loop:true,
});
/*  */
  /* menu toggling script */
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active")    
      $('.menu-btn i').toggleClass("active")    
  })
  $('.toggle').click(function(){
    var element=document.body;
    element.classList.toggle('dark-theme');
  })
});