function typer() {
  var typed = new Typed(".typer", {
    strings: ["Web developer", "Web Designer", "MERN Stack Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
}

typer();

function collapseNav() {
  const collapseBtn = document.querySelector(".collapseBtn");
  const navBtns = document.querySelector(".navBtns");
  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) {
      navBtns.style.maxHeight = 0;
    } else {
      navBtns.style.maxHeight = "10vh";
    }
  });

  collapseBtn.addEventListener("click", () => {
    if (navBtns.style.maxHeight == "0px") {
      navBtns.style.maxHeight = "10vh";
    } else {
      navBtns.style.maxHeight = "0px";
    }
  });
}
collapseNav();
