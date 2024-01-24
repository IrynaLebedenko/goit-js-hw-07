const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {

  const trimmedValue = nameInput.value.trim();

  const displayName = trimmedValue !== "" ? trimmedValue : "Anonymous";

  nameOutput.textContent = displayName;
});