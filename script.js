// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-button");
const overlay = document.getElementById("overlay");
const modal = document.querySelectorAll(".modal")[0];

openModal.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
