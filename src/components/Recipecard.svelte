<script>
  export let recipe;
  console.log("recipe", recipe);
</script>

<div>
  <div
    class="h-auto w-auto items-center justify-center border-2 border-gray-500 border-dotted rounded-lg cursor-pointer bg-slate-200"
  >
    <div class="px-2 pt-2 items-center text-center justify-center flex">
      <a href={"/description/" + recipe.idMeal}>
        <img src={recipe.strMealThumb} alt="" class="rounded-lg w-auto" />
      </a>
    </div>
    <div
      class="text-lg font-bold text-green-700 items-center text-center underline"
    >
      {recipe.strMeal}
    </div>
    <div class="flex justify-between p-4 text-lg font-medium">
      <div class="">{recipe.strCategory}</div>
      <div class="">{recipe.strArea}</div>
    </div>
  </div>
</div>
