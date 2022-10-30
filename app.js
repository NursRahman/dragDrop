const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const p of placeholders) {
  p.addEventListener("dragover", dragover);
  p.addEventListener("dragenter", dragenter);
  p.addEventListener("dragleave", dragleave);
  p.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold");
  event.target.classList.remove("hide");
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
