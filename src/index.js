function displaypoam(response){
    console.log("poem genreting")
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
}

function generatepoem(event){
    event.preventDefault();
  let instractionsInput = document.querySelector("#user-instructions")
    let apikey="a4b5f6061o0261183fbadt0d978134a2"
    let prompt=` user instruction :Generate a poam  about ${instractionsInput}`
    let context =
    " you are a romatic poam expert and love to write short poam  .your mission is  to generate  5 line poem  separate eace line in br. make sure to follow   user instruction . and in the end of the poem  add <strong>shecodeAi</strong>"
    let apiUrl=
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`


 console.log(`promtp:${prompt}`)
    axios.get(apiUrl).then(displaypoam)

    // let poemElement = document.querySelector("#poem");

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatepoem);