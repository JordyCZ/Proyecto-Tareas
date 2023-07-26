const imputbox = document.getElementById("imputbox");
const boton = document.getElementById("boton");
const cajadetareas = document.getElementById("cajadetareas");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  // cajadetareas.innerHTML = imputbox.value;

  console.log(imputbox);
  const li = document.createElement("li");

  li.textContent = imputbox.value;
  cajadetareas.appendChild(li);
});
