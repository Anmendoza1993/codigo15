const form = document.querySelector("#form-register");
const button = document.querySelector("button");

function setStyleToButton(validate) {
  if (validate) {
    // activar boton
    button.classList.remove("bg-purple-800/50", "cursor-no-drop");
    button.classList.add("bg-purple-800", "cursor-pointer");
    button.removeAttribute("disabled");
  } else {
    // deshabilitar boton
    button.classList.remove("bg-purple-800", "cursor-pointer");
    button.classList.add("bg-purple-800/50", "cursor-no-drop");
    button.setAttribute("disabled", true);
  }
}

function verifyIfAllInputsAreNotEmpty() {
  // traer todos los inputs
  const inputs = document.querySelectorAll("input");

  const validate =
    Array.from(inputs)
      .map((input) => input.value)
      .filter((value) => value).length === 4;

  setStyleToButton(validate);
}

function veryFyIfEmptyInput(element) {
  verifyIfAllInputsAreNotEmpty();
  const IfPAfterInput = document.querySelector(`#${element.name}`);

  if (element.value.length > 0) {
    element.classList.remove("border", "border-red-500");
    if (IfPAfterInput) IfPAfterInput.remove();
  } else {
    if (element.dataset.validation !== "false")
      element.classList.add("border", "border-red-500");

    if (!IfPAfterInput) {
      const p = document.createElement("p");
      p.textContent = "Completar este campo";
      p.setAttribute("id", element.name);
      p.classList.add("mt-1", "text-xs", "text-red-500");
      element.after(p);
    }
  }
}

// los formularios tienen un evento y unico
// * onsubmit tiene un parametro llamado event

form.onsubmit = function (event) {
  // Existe una funcion que nos permite evitar que el navegador te recargue cuando es formulario
  event.preventDefault();

  // manera 1

  // console.log(event.target[0].value)
  // console.log(event.target[1].value)
  // console.log(event.target[2].value)
  // console.log(event.target[3].value)

  // manera 2

  // const inputs = event.target;

  // for (const input of inputs){
  //     console.log (input.name, input.value);
  // }

  // manera3
  const inputs = document.querySelectorAll("input");

  const values = {};

  for (const input of inputs) {
    values[input.name] = input.value;
    // como podriamos agregar una clase si el input esta vacio
    // 1. verificar el valor
    veryFyIfEmptyInput(input);

    // if (!input.value) {
    //       input.classList.add("border", "border-red-500");
    // }
  }
  if (values.password !== values["verify-password"]) {
    Swal.fire({
      icon: "error",
      title: "error",
      text: "El password no coincide",
    });
    return;
  }
  
  Swal.fire({
    icon: "success",
    title: "Exitoso",
    text: "Se regitstro correctamente",
    confirmButtonColor: "#3085d6",
  });
  

  // vamos a guardar los valores del objeto de una array y verficar si alguno esta vacío
  // const inputValues = Object.values(values);

  // const validacion = inputValues.find((value) => !value);

  // console.log(typeof validacion);

  // if (typeof validacion === "string") {
  //   alert("Completo todos los campos");
  //   return;
  // }
};

// verificar si password y verify password son iguales

