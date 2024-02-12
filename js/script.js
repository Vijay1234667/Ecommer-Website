

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".modal").style.
          display = "block";
      },
      2000
  )
});
document.querySelector(".close").addEventListener
("click", function(){
  document.querySelector(".modal").style.display = "none";

});
