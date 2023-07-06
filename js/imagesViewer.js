var li = document.querySelectorAll("#sect7 .container ul li");

var interiorDesignImgs = [];
var Imgs = [];
var flag = false;
var buildings = false;
var interors = false;

document.querySelectorAll("#sect7 figure img").forEach(function (Img, ind) {
  Imgs[ind] = Img.parentNode;
  Imgs[ind].style.display = "block";
});
var figures = document.querySelectorAll("#sect7 .parent-row figure");
var neededElements = Array.prototype.filter.call(figures, function (el) {
  if (el.style.display == "none") {
    return false;
  }
  return true;
});
// small screen
var smScreen = window.matchMedia("(min-width:576px)");
function smScreenFunction(e) {
  if (e.matches) {
    neededElements.forEach(function (element) {
      element.style.width = "40%";
    });
  }
}
smScreen.addListener(smScreenFunction);
smScreenFunction(smScreen);

// medium screen
var mdScreen = window.matchMedia("(min-width:768px)");
function mdScreenFunction(e) {
  // Check if the media query is true
  if (e.matches) {
    neededElements.forEach(function (element) {
      element.style.width = "60%";
    });
  }
}
mdScreen.addListener(mdScreenFunction);
mdScreenFunction(mdScreen);

// largeScreen
var lgScreen = window.matchMedia("(min-width:992px)");
function lgScreenFunction(e) {
  // Check if the media query is true
  if (e.matches) {
    neededElements.forEach(function (element) {
      element.style.width = "80%";
    });
  }
}
lgScreen.addListener(lgScreenFunction);
lgScreenFunction(lgScreen);
// verylarge screen
var xlgScreen = window.matchMedia("(min-width:1200px)");
function xlgScreenFunction(e) {
  // Check if the media query is true
  if (e.matches) {
    neededElements.forEach(function (element) {
      element.style.width = "100%";
    });
  }
}
xlgScreen.addListener(xlgScreenFunction);
xlgScreenFunction(xlgScreen);

li.forEach(function (listItem, index) {
  listItem.addEventListener("click", function () {
    clearOthers(li);
    this.className = "tab-select";

    //show all images
    if (index === 0) {
      if (flag === false) {
        for (let index = 0; index < interiorDesignImgs.length; index++) {
          interiorDesignImgs[index].style.display = "block";
          console.log("done");
        }
      } else {
        for (let index = 0; index < Imgs.length; index++)
          Imgs[index].style.display = "block";
      }
      if (interors === true) {
        for (let index = 0; index < Imgs.length; index++)
          Imgs[index].style.display = "block";
      }
    }
    //show buildings only
    else if (index === 1) {
      buildings = true;
      if (flag === false) {
        var len = document.getElementsByClassName("interior").length;

        for (let i = 0; i < len; i++) {
          var e = document.getElementsByClassName("interior")[i];
          interiorDesignImgs.push(e.parentNode);
          e.parentNode.style.display = "none";
        }
      } else {
        for (let ind = 0; ind < Imgs.length; ind++) {
          if (Imgs[ind].children[0].classList.contains("interior")) {
            Imgs[ind].style.display = "none";
            continue;
          } else {
            Imgs[ind].style.display = "block";
          }
        }
      }
      if(interors ===true){
        for (let ind = 0; ind < Imgs.length; ind++) {
          if (Imgs[ind].children[0].classList.contains("interior")) {
            Imgs[ind].style.display = "none";
            continue;
          } else {
            Imgs[ind].style.display = "block";
          }
        }

      }
    } else if (index === 2) {
      interors = true;
      for (let i = 0; i < Imgs.length; i++) {
        if (Imgs[i].children[0].classList.contains("interior")) {
          Imgs[i].style.display = "block";
        } else {
          Imgs[i].style.display = "none";
        }
      }
    } else if (index === 3 || index === 4) {
      flag = true;
      document
        .querySelectorAll("#sect7 figure img")
        .forEach(function (Img, ind) {
          // Imgs[ind] = Img.parentNode;
          Img.parentNode.style.display = "none";
        });
    }
  });
});

function clearOthers(element) {
  for (let index = 0; index < element.length; index++) {
    element[index].classList.remove("tab-select");
  }
}
