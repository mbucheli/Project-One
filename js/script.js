const $dish = $("#dish");
const $dishPhoto = $("#dishPhoto");
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
            // console.log(data);
            $dish.text(data.hits[0].recipe.label);// these are only accessing one recipe, I need to access all of them in order to randomize recipes
            $dishPhoto.attr("src", data.hits[0].recipe.image);
            $instructions.attr("href", data.hits[0].recipe.shareAs);
            $ingredients.text(data.hits[0].recipe.ingredientLines.join(", "));
            $labels.text(data.hits[0].recipe.healthLabels.join(", "));
            $calories.text(data.hits[0].recipe.calories);
        },
        (error) => {
            console.log("Error: ", error);
        }
    );
}

$('form').on('submit', handleGetData);