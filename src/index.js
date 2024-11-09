function generatepoem(event){
    event.preventDefault();

    let poemElement = document.querySelector("#poem");

   

new Typewriter('#poem', {
  strings: " Strong Son of God, immortal Love",
  autoStart: true,
  delay:1,
  cursor:"",
});
   

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatepoem);