const allURL = "https://akabab.github.io/starwars-api/api/all.json"; //Instatiates the URL variable.

const $input = $(`input[type="text"]`);
const $form = $("form");
const $charName = $("#charName");
const $specName = $("#specName");
const $height = $("#height");
const $mass = $("#mass");
const $birthYear = $("#birthYear");
const $homeWorld = $("#homeWorld");
const $eyeColor = $("#eyeColor");
const $affiliations = $("#affiliations");

$form.on("submit", handleGetData);
let characterData;

function handleGetData(event){
    event.preventDefault();

$.ajax(allURL).then((data) =>{
    allData = data;
    let randomChar = Math.floor(Math.random() * allData.length);
    characterData = allData.find(el => el.id === randomChar);
    console.log(characterData);
    }, (error) =>{
        console.log("ERROR");
        console.log(error);
    });
};