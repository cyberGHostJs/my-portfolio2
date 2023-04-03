
$(document).ready(function () { 
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });

    $(".mover5").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("pro5");
      }
    });

    $(".mover1").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("pro1");
      }
    });

    $(".mover2").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("pro2");
      }
    });

    $(".mover3").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("pro3");
      }
    });

    //----------nav scroll----------------//
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 250){
    nav.classList.add('navbar-scroll')
  }else if (window.scrollY < 250){
    nav.classList.remove('navbar-scroll')
  }
})


  });
});

//have to make this a reusable code
let i = 0;

function Offon() {//1
  if (i == 0) {
    i++;
    return true;
  } else {
    i--;
    return false;
  }
}
//------------------------------------//-----------------------------------//

let j = 0;

function Offon2() {//2
  if (j == 0) {
    j++;
    return true;
  } else {
    j--;
    return false;
  }
}
//------------------------------------//-----------------------------------//

let l = 0;

function Offon3() {//3
  if (l == 0) {
    l++;
    return true;
  } else {
    l--;
    return false;
  }
}
//------------------------------------//-----------------------------------//

let m = 0;

function Offon4() {//4
  if (m == 0) {
    m++;
    return true;
  } else {
    m--;
    return false;
  }
}
//------------------------------------//-----------------------------------//

//made this reusable
// param "four", "btn4"
function Readmore(pac,four,btn4) {
  // console.log(pac)
  if (pac === true) {
    document.getElementById(four).style.visibility = "visible";
    document.getElementById(btn4).innerText = "Read less";
    // document.getElementById(four).style.display="block";


  } else if (pac === false) {
    document.getElementById(four).style.visibility = "hidden";
    document.getElementById(btn4).innerText = "Read more";
    // document.getElementById(four).style.display="none";
  }
}









// const headerEl = document.querySelector('.navbar')

// window.addEventListener('scroll', ()=>{
//   if(window.scrollY > 50){
//     headerEl.classList.add('navbar-scroll')
//   }
// })