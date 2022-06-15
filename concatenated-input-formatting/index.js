const inputs = document.querySelectorAll("form input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    inlineError(event, input);
  });

  input.addEventListener("invalid", (event) => {
    event.preventDefault();

    inlineError(event, input);
  });
});

function inlineError(event, input) {
  input.classList.add("dirty");

  let somethingIsClean = false;
  inputs.forEach((input) => {
    if (!input.classList.contains("dirty")) {
      somethingIsClean = true;
    }
  });

  if (!somethingIsClean) {
    document.getElementById("errors").classList.add("allDirty");

    document.getElementById("concatenated-container").classList.add("allDirty");
  }

  if (input.validity.valid) {
    document.getElementById(`error-${input.id}`).innerText = "";
  }

  if (input.validity.valueMissing) {
    document.getElementById(
      `error-${input.id}`
    ).innerText = `Error: ${input.id} is required.`;
  }

  if (input.validity.patternMismatch) {
    document.getElementById(
      `error-${input.id}`
    ).innerText = `Error: ${input.title}.`;
  }
}
