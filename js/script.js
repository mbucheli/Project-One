// let recipeData;
const $dish = $("#dish");
const $instructions = $("#instructions");
const $ingredients = $("#ingredients");
const $labels = $("#labels");
const $calories = $("#calories");

$.ajax({
    url: "https://api.edamam.com/api/recipes/v2?type=public&q=beef+broccoli+soy&app_id=1592f293&app_key=3badd2b21b26f16adc0d2e2d0b47e094&ingr=5-6"
}).then(
    (data) => {
        console.log(data);
        $dish.text(data.);// need to figure out how to access data from multiple arrays
        // $instructions.text(data.);
        // $ingredients.text(data.);
        // $labels.text(data.);
        // $calories.text(data.)
    }
);