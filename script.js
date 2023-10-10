function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Mengambil semua elemen dengan class "container"
let containers = document.querySelectorAll(".container");

// Iterasi melalui setiap elemen "container"
containers.forEach((container) => {
  let circularProgress = container.querySelector(".circular-progress");
  let progressValue = container.querySelector(".progress-value");

  // Mengambil nilai awal dari elemen .progress-value
  let progressStartValue = 0;

  // Mengambil nilai akhir dari elemen .progress-value (tanpa tanda persen)
  let progressEndValue = parseFloat(progressValue.textContent);

  let speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(var(--main-color)  ${
      progressStartValue * 3.6
    }deg, BLACK 0deg)`;

    // Menghentikan interval jika progress mencapai nilai akhir
    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
});

let boxes = document.querySelectorAll(".box-prog");

window.onload = function () {
  setTimeout(() => {
    load_bars();
  }, 1000);
};

function load_bars() {
  boxes.forEach((box) => {
    let line = box.querySelector(".line");
    let increasing_percentage = box.querySelector(".increasing_percentage");
    let total_percentage = box.querySelector(".total_percentage");

    let p = 0;
    let my_interval = setInterval(() => {
      p++;
      line.style.width = p + "%";
      increasing_percentage.innerHTML = p + "%";
      if (increasing_percentage.innerHTML == total_percentage.innerHTML) {
        clearInterval(my_interval);
      }
    }, 100);
  });
}

// gallery item filter
let filterItem = document.querySelector(".items-links");
let filterImages = document.querySelectorAll(".project-img");

window.addEventListener("load", () => {
  filterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("item-link")) {
      // Fixed the typo in "classList"
      document.querySelector(".menu-active").classList.remove("menu-active");
      selectedItem.target.classList.add("menu-active");
      let filterName = selectedItem.target.getAttribute("data-name");

      filterImages.forEach((image) => {
        // Fixed the forEach loop syntax
        let filterImage = image.getAttribute("data-name"); // Changed variable name to "filterImage"
        if (filterImage === filterName || filterName === "all") {
          // Corrected the condition
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});

const submitBtn = document.querySelector(".contactForm input[type='submit']");

submitBtn.addEventListener("click", function (event) {
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (
    nameValue.length < 6 ||
    emailValue.length < 8 ||
    messageValue.length < 10
  ) {
    alert("Please check your form entries.");

    // Mengosongkan formulir jika ada kesalahan
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    event.preventDefault();
  } else {
    alert("Form submitted successfully.");

    // Mengosongkan formulir setelah berhasil mengirim pesan
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});

//change theme
var icon = document.getElementById("icon-theme");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
