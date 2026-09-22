export function form() {
  const main = document.querySelector(".main-container");
  const dialog = document.createElement("dialog");

  const form = document.createElement("form");
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const divThree = document.createElement("div");
  const title = document.createElement("h3");
  const labelName = document.createElement("label");
  const inputName = document.createElement("input");
  const numberOfPlayersLabel = document.createElement("label");
  const numberOfPlayersName = document.createElement("input");
  const closeButton = document.createElement("button");
  const submitButton = document.createElement("button");

  //TODO: check for valid inputs.
  // naming btn and other

  closeButton.classList.add("close-button");
  submitButton.classList.add("submit-btn");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Skapa rum";
  dialog.classList.add("dialog");
  divOne.classList.add("dialog-container");
  divTwo.classList.add("dialog-container");
  divThree.classList.add("dialog-container");
  title.innerHTML = `<bold>Skapa ett nytt rum</bold>`;
  labelName.setAttribute("for", "userName");
  labelName.innerText = "Namn:";
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "userName");
  inputName.setAttribute("name", "userName");

  numberOfPlayersLabel.innerText = "Antal spelare:";
  numberOfPlayersLabel.setAttribute("for", "numberOfPlayers");

  numberOfPlayersName.setAttribute("type", "text");
  numberOfPlayersName.setAttribute("id", "numberOfPlayers");
  numberOfPlayersName.setAttribute("name", "numberOfPlayers");

  main.appendChild(dialog);
  dialog.appendChild(form);
  form.appendChild(divOne);
  divOne.append(title, labelName, inputName);
  form.appendChild(divTwo);
  divTwo.append(numberOfPlayersLabel, numberOfPlayersName);
  form.appendChild(divThree);
  divThree.appendChild(submitButton);

  closeButton.innerText = "x";

  dialog.open = true;
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  //   return info;
}
