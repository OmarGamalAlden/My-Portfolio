// handel light , night moode buttom!!
$(".mode_button").on("click", function (e) {
  if (e.target.alt == "light mode") {
    $(".light_mode").fadeOut("slow", function () {
      $(".night_mode").fadeIn("slow");
      $(document.body).addClass("dark_mode");
    });
  } else {
    $(".night_mode").fadeOut("slow", function () {
      $(".light_mode").fadeIn("slow");
      $(document.body).removeClass("dark_mode");
    });
  }
});

// handel fixed bottom navBar!!
$(".bottom_navbar a").on({
  mouseenter: function (e) {
    let sectionName = e.target.href.split("#")[1];
    $(".section_name").fadeIn("slow");
    $(".section_name").html(sectionName);
  },
  mouseleave: function () {
    $(".section_name").fadeOut("slow");
  },
});
//
$(document).ready(() => {
  // handel technologies divs...
  let technologiesImages = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      src: "https://logowik.com/content/uploads/images/visual-studio-code7642.jpg",
      alt: "vs-code",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/524px-JQuery-Logo.svg.png?20200715135602",
      alt: "jquery",
    },
    {
      src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      alt: "git",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "typescript",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      alt: "Node.js",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      alt: "mongoDB",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      alt: "express",
    },
    {
      src: "https://raw.githubusercontent.com/sequelize/sequelize/dd2aa1832fdaf5151977f9dacda01500cd97f277/logo.svg",
      alt: "sequelize",
    },
    {
      src: "https://www.redbytes.co.uk/wp-content/uploads/2019/11/graphql.png",
      alt: "graphQl",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      alt: "socketIo",
    },
  ];
  let cartona = "";
  technologiesImages.forEach((img) => {
    cartona += `  <div data-aos="slide-up" data-aos-duration="4000" class="technology_card m-3 d-flex align-items-center justify-content-center py-3 px-2">
                     <img class="technology_img ${img.alt}" src="${img.src}" alt="${img.alt}" />
                     <span class="technology_name mx-2 fw-bold">${img.alt}</span>
                  </div>`;
  });
  cartona
    ? (document.querySelector(".technology_cards").innerHTML = cartona)
    : "";
});
