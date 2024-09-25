const panels = document.querySelectorAll(".panel");
const iframes = document.querySelectorAll(".video");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removePanelsclasses();
    panel.classList.add("active");
  });
});

iframes.forEach((video) => {
  video.addEventListener("click", () => {
    removeActiveclasses();
    video.classList.add("active");
  });
});

function removeActiveclasses() {
  iframes.forEach((video) => {
    video.classList.remove("active");
  });
}
function removePanelsclasses() {
  panels.forEach((panel) => {   
    panel.classList.remove("active");
  });
}
