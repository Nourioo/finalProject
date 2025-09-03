function displayJoke(response) {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = ""; // clear old content before typing

  new Typewriter("#joke", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "40f410t39afca518e877dc5abodd75b";
  let context =
    "You are a very funny person with a great sense of humor. You are a bit mean and somehow a bully. You have no filter. Produce a two line joke in HTML format. Separate each line with <br>.";
  let prompt = `instructions: Generate a joke about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="Generating">⏳ Generating a mean joke about ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-app");
jokeFormElement.addEventListener("submit", generateJoke);
