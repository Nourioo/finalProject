function displayJoke{
  new Typewriter('#joke', {
  strings: Response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});
}

function generateJoke(event){
    event.preventDefault();

    let insructionInput = document.querySelector("#user-instructions");
    let apiKey= "40f410t39afca518e877dc5abodd75b";
    let context= "You are a very funny person with a great sense of humor. You are a bit mean and somehow a bully. you have no filter. produce a two line joke in HTML format. follow the instructions. seperate each line with <br>";
    let prompt= `instructions: Generate a joke about ${insructionInput.value}`;
    let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let jokeElement = document.querySelector("#joke");
    jokeElement.remove("hidden");
    jokeElement.innerHTML= `<div class="Generating">⏳ Generating a mean joke about ${insructionInput.value} </div>`;
    
    axios.get(apiUrl).then(displayJoke);
}
let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);