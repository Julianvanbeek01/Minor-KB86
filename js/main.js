// TODO
// Mobile Scrolling
if (window.screen.width < 461) {
  var characters = document.getElementsByClassName("character");

  for (var i = 0; i < characters.length; i++) {
    characters[i].onclick = function (e) {};
  }
}

// Scroll Functions
function mouseScroll(value) {
  var scrollValue;
  if (window.screen.width > 768) {
    switch (value) {
      case 1:
        scrollValue = 235;
        break;
      case 2:
        scrollValue = 470;
        break;
      case 3:
        scrollValue = 705;
        break;
      case 4:
        scrollValue = 940;
        break;
      case 5:
        scrollValue = 1175;
        break;
      default:
        break;
    }
    window.scroll({
      top: scrollValue,
      behavior: "smooth"
    });
  } else {
    window.scroll({
      top: window.innerHeight * value,
      behavior: "smooth"
    });
  }
}

//Declare Objects and Character sections

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");
let o5 = document.getElementById("o5");

if (window.screen.width > 768) {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (value <= 235) {
      p1.style.top = "-" + value * 3 + "px";
      p2.style.top = "-" + value * 3 + "px";
      p3.style.top = "-" + value * 3 + "px";
      p4.style.top = "-" + value * 3 + "px";
      p5.style.top = "-" + value * 3 + "px";
      o1.style.transform = "translateX(" + value * 2 + "px)";
    } else if (value > 235 && value <= 469) {
      p1.style.top = "-" + 235 * 3 + "px";
      p2.style.top = "-" + value * 3 + "px";
      p3.style.top = "-" + value * 3 + "px";
      p4.style.top = "-" + value * 3 + "px";
      p5.style.top = "-" + value * 3 + "px";
      o2.style.transform = "translateX(" + value + "px)";
    } else if (value > 469 && value <= 704) {
      p1.style.top = "-" + 235 * 3 + "px";
      p2.style.top = "-" + 469 * 3 + "px";
      p3.style.top = "-" + value * 3 + "px";
      p4.style.top = "-" + value * 3 + "px";
      p5.style.top = "-" + value * 3 + "px";
      o3.style.transform = "translateX(" + (value / 3) * 2 + "px)";
    } else if (value > 704 && value <= 939) {
      p1.style.top = "-" + 235 * 3 + "px";
      p2.style.top = "-" + 469 * 3 + "px";
      p3.style.top = "-" + 704 * 3 + "px";
      p4.style.top = "-" + value * 3 + "px";
      p5.style.top = "-" + value * 3 + "px";
      o4.style.transform = "translateX(" + value / 2 + "px)";
    } else if (value > 939 && value <= 1170) {
      p1.style.top = "-" + 235 * 3 + "px";
      p2.style.top = "-" + 469 * 3 + "px";
      p3.style.top = "-" + 704 * 3 + "px";
      p4.style.top = "-" + 939 * 3 + "px";
      p5.style.top = "-" + value * 3 + "px";
      o5.style.transform = "translateX(" + (value / 5) * 2 + "px)";
    } else if (value > 1170) {
      p1.style.top = "-" + 235 * 3 + "px";
      p2.style.top = "-" + 469 * 3 + "px";
      p3.style.top = "-" + 704 * 3 + "px";
      p4.style.top = "-" + 939 * 3 + "px";
      p5.style.top = "-" + 1170 * 3 + "px";
    }
  });
}

//   if (value * 3 < sectionHeight) {
//     p1.style.top = "-" + value * 3 + "px";
//     p2.style.top = "-" + value * 3 + "px";
//     p3.style.top = "-" + value * 3 + "px";
//     p4.style.top = "-" + value * 3 + "px";
//     p5.style.top = "-" + value * 3 + "px";
//   } else if (value * 3 > sectionHeight && value * 3 < sectionHeight * 2) {
//     p1.style.top = "-" + sectionHeight + "px";
//     p2.style.top = "-" + value * 3 + "px";
//     p3.style.top = "-" + value * 3 + "px";
//     p4.style.top = "-" + value * 3 + "px";
//     p5.style.top = "-" + value * 3 + "px";
//   } else if (value * 3 > sectionHeight * 2 && value * 3 < sectionHeight * 3) {
//     p1.style.top = "-" + sectionHeight + "px";
//     p2.style.top = "-" + sectionHeight * 2 + "px";
//     p3.style.top = "-" + value * 3 + "px";
//     p4.style.top = "-" + value * 3 + "px";
//     p5.style.top = "-" + value * 3 + "px";
//   } else if (value * 3 > sectionHeight * 3 && value * 3 < sectionHeight * 4) {
//     p1.style.top = "-" + sectionHeight + "px";
//     p2.style.top = "-" + sectionHeight * 2 + "px";
//     p3.style.top = "-" + sectionHeight * 3 + "px";
//     p4.style.top = "-" + value * 3 + "px";
//     p5.style.top = "-" + value * 3 + "px";
//   } else if (value * 3 > sectionHeight * 4 && value * 3 < sectionHeight * 5) {
//     p1.style.top = "-" + sectionHeight + "px";
//     p2.style.top = "-" + sectionHeight * 2 + "px";
//     p3.style.top = "-" + sectionHeight * 3 + "px";
//     p4.style.top = "-" + sectionHeight * 4 + "px";
//     p5.style.top = "-" + value * 3 + "px";
//   }
