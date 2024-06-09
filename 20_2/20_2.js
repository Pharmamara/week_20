async function findResource() {
  const selectResource = document.getElementById("resources");
  const selectOption = selectResource.value;
  const inputId = document.getElementById("resourceId").value;
  const progress = document.getElementById("progress");
  progress.textContent = "Подождите...";
  try {
    await fetch("https://swapi.py4e.com/api/" + selectOption + "/" + inputId)
      .then((response) => response.json())
      .then((data) => {
        const name = data.name;
        const url = data.url;
        if (name !== undefined) {
          progress.textContent = "";
          const resultName = document.createElement("h2");
          dataContainer.appendChild(resultName);
          resultName.innerHTML = `Name: ${name}`;
        } else {
          throw new Error("Имя не обнаружено");
        }
        if (url !== undefined) {
          progress.textContent = "";
          const resultUrl = document.createElement("a");
          resultUrl.href = data.url;
          dataContainer.appendChild(resultUrl);
          resultUrl.innerHTML = `URL: ${url}`;
        } else {
          throw new Error("URL не обнаружен");
        }
      });
  } catch (error) {
    progress.textContent = "";
    const resultError = document.createElement("h2");
    dataContainer.appendChild(resultError);
    resultError.innerHTML = "Ошибка: " + error.message;
  }
}
document.querySelector(".b-2").addEventListener("click", findResource);
