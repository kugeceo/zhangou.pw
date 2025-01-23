

$(window).on('load', function () {
    //var $preloader = $('#p_prldr');
    //$preloader.delay(500).fadeOut('500');
    //$("body").css('overflow', 'auto');
    //$('.monitor').fadeIn(3000);
    bgHeight();


})

$(window).bind('resize', bgHeight);


function bgHeight() {
  var h = $(".section100vh").outerHeight();
  console.log(h);
  $(".blured").css({ 'height': h + "px" });
  $(".overlay").css({ 'height': h + "px" });
}


$(document).ready(function () {
  $('.modal').modal('show');
});



/*
$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
    navbarHeight = $('.navbar').outerHeight()-1;
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top-navbarHeight
    }, 500);
});
*/
$(".calculate").click(function () {
  $('.price').css('color', '#28a745');
  whereVar = $(".q-where").val();
  quantityVar = $(".q-quantity").val();
  whatVar = $(".q-type").val();
  colorVar = $(".q-color").val();
  price = 0;
  stockPrice = 500;
  lowPrice = 350;
  discount = " ";
  a = 0;
  b = 0;
  c = 0;
  d = 1;
  freeRide = '';
  //Где проводить фотосессию
  switch (whereVar) {
    case "1":
      a = 0;
      break;
    
    case "2":
      a = 2500;
      break;
  
    default:
      a = 0;
      break;
  }

  //Сложность
  switch (whatVar) {
    case "1":
      b = 200;
      break;

    case "2":
      b = 0;
      break;    

    default:
      b = 0;
      break;
  }

  //Цвет
  switch (colorVar) {
    case "1":
      c = 0;
      break;

    case "2":
      c = 0;
      break;

    case "3":
      c = 50;
      break;
    
    case "4":
      c = 50;
      break;

    default:
      c = 0;
      break;
  }

  quantity = parseInt(quantityVar, 10);
  
  if (quantity >= 15) {
    d = 0.95;
    discount = "СКИДКА 5%";
  }
  if (quantity >= 30) {
    d = 0.90;
    discount = "СКИДКА 10%";
  }
  if (quantity >= 50) {
    d = 0.85;
    discount = "СКИДКА 15%";
  }
  if (quantity >= 100) {
    d = 0.80;
    discount = "СКИДКА 20%";
  }

  price = (quantity * (stockPrice + b + c))*d + a;

  newPrice = (quantity * (lowPrice)) * d;
  
  if (quantity < 10) {
    newPrice = newPrice + a;
    freeRide = '';
  }
  else{
    freeRide = ' и бесплатный выезд'
  }



  $(".discount").text(discount);
  //$(".price").text(price + " " + "₽");
  $(".price").html("<span class = 'newprice'><span>" + price + "₽</span></span>" + 
  " <span>" + newPrice + "₽" +"</span>" + 
  "<h4>Антикризисная акция" + freeRide + "!</h4>");
});





$(".copyToClipboard").click(function () {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(this).text()).select();  
  document.execCommand("copy");
  $temp.remove();
  alert('Текст "' + $(this).text() + '" скопирован в буфер обмена');
});