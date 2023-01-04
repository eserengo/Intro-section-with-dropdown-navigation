(function () {
  const display = {
    hideQuery: function(query) {
      document.querySelectorAll(query).forEach((item) => {
        item.classList.add("inactive");
      })
    },
    showQuery: function(query) {
      document.querySelectorAll(query).forEach((item) => {
        item.classList.remove("inactive");
      })
    },
    hideElement: function(el) {
      document.getElementById(el).classList.add("inactive");
    },
    showElement: function(el) {
      document.getElementById(el).classList.remove("inactive");
    },
    media: function() {
      if (document.querySelector(".modal").classList.contains("active")) {
        return null;
      } else {
        if (window.matchMedia("(width <= 400px)").matches) {
          display.showElement("menu");
          display.hideQuery(".navbar");
        }
        if (window.matchMedia("(width > 400px)").matches) {
          display.hideElement("menu");
          display.showQuery(".navbar");
        }
      }
    },
    showDropdown: function(query, down, up) {
      display.showQuery(query);
      display.hideElement(down);
      display.showElement(up);
    },
    hideDropdown: function(query, down, up) {
      display.hideQuery(query);
      display.showElement(down);
      display.hideElement(up);
    },
    showModal: function () {
      document.querySelector(".modal").classList.add("active");
      document.querySelectorAll(".container").forEach((item) => {
        item.classList.add("blur");
      })
    },
    hideModal: function () {
      document.querySelector(".modal").classList.remove("active");
      document.querySelectorAll(".container").forEach((item) => {
        item.classList.remove("blur");
      })
    },
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fa-times, .feat-item, .co-item, .fa-chevron-up").forEach((item) => {
      item.classList.add("inactive");
      display.media();
    })
  });
  let timer;
  window.onresize = function() {
    window.clearTimeout(timer);
    timer = window.setTimeout(display.media, 100);
  }

  document.getElementById("menu").addEventListener("click", () => {
    display.hideDropdown(".feat-item", "feat-down", "feat-up");
    display.hideDropdown(".co-item", "co-down", "co-up");
    display.showModal();
    display.showElement("close");
    display.showQuery(".navbar");
    display.hideElement("menu");
  })
  document.getElementById("close").addEventListener("click", () => {
    display.hideDropdown(".feat-item", "feat-down", "feat-up");
    display.hideDropdown(".co-item", "co-down", "co-up");
    display.hideModal();
    display.hideElement("close");
    display.media();
  })
  document.getElementById("feat-down").addEventListener("click", display.showDropdown.bind("feat-down", ".feat-item", "feat-down", "feat-up"));
  document.getElementById("feat-up").addEventListener("click", display.hideDropdown.bind("feat-up", ".feat-item", "feat-down", "feat-up"));
  document.getElementById("co-down").addEventListener("click", display.showDropdown.bind("co-down", ".co-item", "co-down", "co-up"));
  document.getElementById("co-up").addEventListener("click", display.hideDropdown.bind("co-up", ".co-item", "co-down", "co-up"));
})();