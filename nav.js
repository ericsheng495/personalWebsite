const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
  const visibility = primaryNav.getAttribute("data-visible");
  if(visibility === "false"){
    //css not working!!!
    primaryNav.setAttribute("data-visible", true);
  }else{
    primaryNav.setAttribute("data-visible", false);
  }
  console.log(visibility);

});
