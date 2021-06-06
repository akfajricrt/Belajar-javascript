let profile = document.getElementById("profile");
let sejarah = document.getElementById("sejarah");
let profl = document.getElementById("profl");
let sjrh = document.getElementById("sjrh");

//fungsi
function OpenProfile() {
  profile.style.display = "block";
  setTimeout(() => {
    profile.style.opacity = "1";
  }, 500);
}

function CloseProfile() {
  profile.style.opacity = "0";
  setTimeout(() => {
    profile.style.display = "none";
  }, 500);
}

function OpenSejarah() {
  sejarah.style.display = "block";
  setTimeout(() => {
    sejarah.style.opacity = "1";
  }, 500);
}

function CloseSejarah() {
  sejarah.style.opacity = "0";
  setTimeout(() => {
    sejarah.style.display = "none";
  }, 500);
}

//action menu

profl.addEventListener("click", () => {
  OpenProfile();
  CloseSejarah();
});

sjrh.addEventListener("click", () => {
  OpenSejarah();
  CloseProfile();
});
