const imputbox = document.getElementById("imputbox");
const boton = document.getElementById("boton");
const cajadetareas = document.getElementById("cajadetareas");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  // cajadetareas.innerHTML = imputbox.value;

  const texto = document.createElement("p");
  texto.textContent = imputbox.value;
  const ul = document.createElement("ul");
  const check = document.createElement("input");
  check.type = "checkbox";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  console.log(imputbox.value);
  const li = document.createElement("li");
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      li.appendChild(check);
    }

    if (i === 1) {
      li.appendChild(texto);
    }

    if (i === 2) {
      li.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", function (params) {
        li.remove();
      });
    }
  }
  console.log(li);
  ul.appendChild(li);
  cajadetareas.appendChild(ul);
});
