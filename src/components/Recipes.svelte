<script lang="ts">
  let recipes = [];

  // Fetch recipes from an API
  export async function fetchRecipes() {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    const recipeList = await response.json();
    recipes = recipeList.meals;
    console.log(recipes);
  }

  import { onMount } from "svelte";
  onMount(fetchRecipes);

  import Recipecard from "./Recipecard.svelte";
</script>

<div class="grid grid-cols-1 gap-10 px-8 my-10">
  {#each recipes as recipe}
    <!-- {recipe.idMeal}
    {recipe.strMeal} -->
    <Recipecard {recipe} />
  {/each}
</div>
