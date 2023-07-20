const exploreText = document.getElementById("exploreText");
const aboutUsText = document.getElementById("aboutUsText");
const contactUsText = document.getElementById("contactUsText");
const collectionText = document.getElementById("collectionText");
const aboutUsText1 = document.getElementById("aboutUsText1");
const contactUsText1 = document.getElementById("contactUsText1");
const homeText = document.getElementById("homeText");
const ireneButton = document.getElementById("ireneButton");
const kristanButton = document.getElementById("kristanButton");
const benjieButton = document.getElementById("benjieButton");

if (exploreText) {
  exploreText.addEventListener("click", function (e) {
    window.location.href = "./compilation.html";
  });
}


if (aboutUsText) {
  aboutUsText.addEventListener("click", function (e) {
    window.location.href = "./about-us.html";
  });
}


if (contactUsText) {
  contactUsText.addEventListener("click", function (e) {
    window.location.href = "./contact-us.html";
  });
}


if (collectionText) {
  collectionText.addEventListener("click", function (e) {
    window.location.href = "./compilation.html";
  });
}


if (aboutUsText1) {
  aboutUsText1.addEventListener("click", function (e) {
    window.location.href = "./about-us.html";
  });
}


if (contactUsText1) {
  contactUsText1.addEventListener("click", function (e) {
    window.location.href = "./contact-us.html";
  });
}


if (homeText) {
  homeText.addEventListener("click", function (e) {
    window.location.href = "./index.html";
  });
}

if (ireneButton) {
  ireneButton.addEventListener("click", function (e) {
    window.location.href = "./irene.html";
  });
}

if (kristanButton) {
  kristanButton.addEventListener("click", function (e) {
    window.location.href = "./kristan.html";
  });
}

if (benjieButton) {
  benjieButton.addEventListener("click", function (e) {
    window.location.href = "./benjie.html";
  });
}