var circle = document.getElementById("circle");
var move = false;
function movecircle() {
  move = !move;
  if (move) circle.classList.add("active");
  else circle.classList.remove("active");
}

document.addEventListener("mousemove", (e) => {
  if (move) {
    // Pegar a posição do mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    // Pegar a posição do círculo
    const circleX = circle.offsetLeft + circle.offsetWidth / 2;
    const circleY = circle.offsetTop + circle.offsetHeight / 2;
    // Pegar a difereça entre a posição do mouse e o círculo
    const deltaX = mouseX - circleX;
    const deltaY = mouseY - circleY;
    // Mover o círculo
    circle.style.transform = `translate(${deltaX}px,${deltaY}px)`;
  }
});
