const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

  $(".about").addEventListener("click", function(){
    // var element = document.getElementsByClassName("popup-overlay");
    // var otherelement = document.getElementsByClassName("popup-content");

    // element.classList.add("active");
    // otherelement.classList.add("active");

    document.getElementById("overlayID").className += " active";
    document.getElementById("contentID").className += " active";

    // $(".popup, .popup-content").addClass("active");
  });

  $(".close, .popup").addEventListener("click", function(){
    document.getElementById("overlayID").className = "popup-overlay";
    document.getElementById("contentID").className = "popup-content";
  });

});
    