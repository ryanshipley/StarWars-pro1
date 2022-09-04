const allURL = "https://akabab.github.io/starwars-api/api/all.json"; //Instatiates the URL variable.

/*
Instantiate all variables used
*/
const $input = $(`input[type="text"]`); //Sets the UI.
const $doIt = $("#do-it"); //Creates a form with an image as the button.
const $charName = $("#charName"); //Sets the character name.
const $specName = $("#specName"); //sets the character species.
const $height = $("#height"); //Sets the character height.
const $mass = $("#mass"); //Sets the character mass.
const $birthYear = $("#birthYear"); //Sets the character birth year.
const $homeWorld = $("#homeWorld"); //Sets the character home world.
const $eyeColor = $("#eyeColor"); //Sets the character eye color.
const $affiliations = $("#affiliations"); //Sets the characters affiliations.

$doIt.on("click", handleGetData);//Creates onclick function.
let characterData; //Instantiates the character information.

/*handleGetData function
Retrieves the API data, creates a random varable, and finds the index of the data array 
that matches that number.
@param event the parameter for the functon
@return call the AJAX method.
*/
function handleGetData(event){
    event.preventDefault();

/*AJAX method
@param data the data from the API
@randomChar the random number created by the method.
@log console the randomChar.
@characterData The data for the randm matching character.
@find find the element in the object whose id matches that random number.
@log console the characterData for the matching character.
@render calls the render function.
@changeImage calls the changeImage function.
@textCrawl calls the textCrawl function.
@error runs an error if there is an error.
*/
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

/*Render function
When called, it sets the text for the HTML elements to be the data extracted in the data.
*/
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

/*changeImage function
Changes the image of the character based on the random search
*/
function changeImage(){
    document.getElementById("photo").src = characterData.image;
    document.getElementById("photo").alt = characterData.name;
 };

/*textCrawl function
Changes the styling of the character card and makes it crawl.
*/
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