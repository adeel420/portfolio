let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
let results = document.getElementById("results")
let srcBtn = document.getElementById("src-btn")
let sound = document.getElementById("sound")
srcBtn.addEventListener("click", function run(){
    let search = document.getElementById("search").value
    fetch(`${url}${search}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].meanings[0].definitions[0].definition)
            results.innerHTML = `
            <div class="word">
                <h2>${search}</h2>
                <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="word-phontics">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p id="phonetics">${data[0].phonetic}</p>
            </div>
            <div class="word-meanings">
                ${data[0].meanings[0].definitions[0].definition}
            </div>
            <div class="word-examples">
                ${data[0].meanings[0].definitions[0].example}
            </div>
            `
            sound.setAttribute("src", data[0].phonetics[0].audio)
            console.log(sound)
        })
        .catch(error => {
            results.innerHTML = "<h3 id='error'>Could n't find the word</h3>"
        })
})
function playSound(){
    sound.play()
}