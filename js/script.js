const URL = "https://akabab.github.io/starwars-api/api/id/";

const $input = $(`input[type="text"]`);
const $form = $("form");
const $charName = $("#charName");
const $specName = $("#specName");
const $height = $("#height");
const $mass = $("#mass");
const $birthYear = $("#birthYear");
const $homeWorld = $("#homeWorld");

$form.on("submit", handleGetData);
let characterData;

function handleGetData(event){
    event.preventDefault();
    userInput = $input.val();
    if(userInput === "") return;
$.ajax(URL + 1 + ".json").then((data) =>{
        characterData = data;
        render();
        $("body").append(`<img id="photo" src="${characterData.image}"`);
        $input.val("");
    }, (error) =>{
        console.log("ERROR");
        console.log(error);
    });
};