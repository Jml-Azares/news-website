function like(e) {
  e.classList.toggle("heart");
  e.classList.toggle("like");
  e.classList.toggle("fa-solid");
}

function read(e) {
  e.classList.toggle("visible");
}

function remove(e) {
  const card = e.closest(".myCard-cont");
  if (card) {
    card.remove();
  }
}
