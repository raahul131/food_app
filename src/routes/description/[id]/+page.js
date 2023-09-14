/** @type {import ('./$types').PageLoad} */

export async function load({ params }) {
  console.log("params", params);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const recipeList = await response.json();
  const details = recipeList.meals[0];
  return details;
}
