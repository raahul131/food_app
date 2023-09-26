/** @type {import ('./$types').PageLoad} */

export async function load({ params }) {
  console.log("params", params);
  let response = await fetch(
    `www.themealdb.com/api/json/v1/1/search.php?s=${params.id}`
  );
  const searchedRecipe = await response.json();
  const details = searchedRecipe.meals;
  console.log(details)
  return details;
}
