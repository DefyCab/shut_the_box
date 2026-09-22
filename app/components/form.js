export function form() {
  const main = document.querySelector(".main-container");
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  const divOne = document.createElement("div");
  const title = document.createElement("h3");
  const labelName = document.createElement("label");
  const inputName = document.createElement("input");
  const closeButton = document.createElement("button");

  closeButton.classList.add("close-button");
  dialog.classList.add("dialog");
  divOne.classList.add("dialog-container");
  title.innerHTML = `<bold>Skapa ett nytt rum</bold>`;
  labelName.setAttribute("for", "userName");
  labelName.innerText = "Namn:";
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "userName");
  inputName.setAttribute("name", "userName");

  main.appendChild(dialog);
  dialog.appendChild(form);
  form.appendChild(divOne);
  divOne.append(title, labelName, inputName);

  closeButton.innerText = "x";

  dialog.open = true;
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}
