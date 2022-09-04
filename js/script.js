const allURL = "https://akabab.github.io/starwars-api/api/all.json"; //Instatiates the URL variable.

const $input = $(`input[type="text"]`);
const $doIt = $("#do-it");
const $charName = $("#charName");
const $specName = $("#specName");
const $height = $("#height");
const $mass = $("#mass");
const $birthYear = $("#birthYear");
const $homeWorld = $("#homeWorld");
const $eyeColor = $("#eyeColor");
const $affiliations = $("#affiliations");

$doIt.on("click", handleGetData);
let characterData;

function handleGetData(event){
    event.preventDefault();

$.ajax(allURL).then((data) =>{
    allData = data;
    let randomChar = Math.floor(Math.random() * allData.length);
    characterData = allData.find(el => el.id === randomChar);
    render();
    changeImage();
    textCrawl();
    }, (error) =>{
        console.log("ERROR");
        console.log(error);
    });
};

function render(){
    $charName.text(characterData.name);
    $specName.text(characterData.species);
    $height.text(characterData.height);
    $mass.text(characterData.mass);
    $birthYear.text(characterData.born);
    $homeWorld.text(characterData.homeworld);
    $eyeColor.text(characterData.eyeColor);
    $affiliations.text(characterData.affiliations);
};

function changeImage(){
    document.getElementById("photo").src = characterData.image;
    document.getElementById("photo").alt = characterData.name;
 };

 function textCrawl(){
    $("#card").css({
        "height": "100%",
        "text-align": "center",
        "-moz-transform": "translateY(100%)",
        "webkit-transform": "translateY(100%)",
        "transform": "translateY(100%)",
        "-moz-animation": "my-animation 30s linear infinite",
        "-webkit-animation": "my-animation 30s linear infinite",
        "animation": "my-animation 30s linear infinite",
    })
}