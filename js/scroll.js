$(function(){
  $('#top_menu>ul>li:nth-child(1)>a').on('click',function(e){
      e.preventDefault();
      $("html,body").stop().animate({
          "scrollTop": 1450
      },1000);
  })
  $('#top_menu>ul>li:nth-child(2)>a').on('click',function(e){
      e.preventDefault();
      $("html,body").stop().animate({
          "scrollTop":4210
      },1000);
  })
  $('#top_menu>ul>li:nth-child(3)>a').on('click',function(e){
      e.preventDefault();
      $("html,body").stop().animate({
          "scrollTop":4948
      },1000);
  })
  $('#top_menu>ul>li:nth-child(4)> a').on('click',function(e){
      e.preventDefault();
      $("html,body").stop().animate({
          "scrollTop":5600
      },1000);
  })

  
  })