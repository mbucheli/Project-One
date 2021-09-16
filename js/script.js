
const $dish = $("#dish");
const $instructions = $("#instructions");
const $ingredients = $("#ingredients");
const $labels = $("#labels");
const $calories = $("#calories");
const $input = $('input[type="text"]');  

function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();

    $.ajax({
        url: "https://api.edamam.com/api/recipes/v2?type=public&q=" + userInput + "&app_id=1592f293&app_key=3badd2b21b26f16adc0d2e2d0b47e094&ingr=3-10"
    }).then(
        (data) => {
            console.log(data);
            $dish.text(data.hits[0].recipe.label);// these are only accessing one recipe, I need to access all of them in order to randomize recipes
            $instructions.text(data.hits[0].recipe.url);
            $ingredients.text(data.hits[0].recipe.ingredientLines[0]);
            $labels.text(data.hits[0].recipe.healthLabels[0]);
            $calories.text(data.hits[0].recipe.calories);
        },
        (error) => {
            console.log("Error: ", error);
        }
    );
}

$('form').on('submit', handleGetData);





    // steps I need to take! Finally was able to access the right info using dot notation
// things I need to remind myself: 
    // take baby steps
    // ingredients and health labels needs to iterating through array of ingredients and labels
    // instructions need to open up url and access the recipe 
    // individual iterating functions for each ingr and label per recipe