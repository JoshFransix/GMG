document
  .querySelector(".step-2-btn")
  .addEventListener("click", loadStep2Content);

function loadStep2Content(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "step-2.htm", true);

  xhr.onload = function () {
    if (this.status === 200) {
    }
  };

  xhr.send();
}
