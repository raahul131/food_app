<script lang="ts">
  /** @types {import ('./$types').PageData}*/
  export let data;

  // console.log("detail", data);

  /** @type {import (./)}*/

  import { onMount } from "svelte";
  //   onMount(() => description());
</script>

<div class="">
  <h1 class="text-center mt-4 underline rounded-2xl font-extrabold text-lg">{data.strMeal}</h1>
  <div class="items-center justify-center m-8">
    <img
      src={data.strMealThumb}
      alt=""
      class=" w-auto h-80 p-2 rounded-3xl border-dotted border-2 border-black"
    />
  </div>

  <div class=" grid grid-cols-2 m-10 gap-10">
    <div>
      <h1 class="font-extrabold text-lg underline text-red-700">Ingredients</h1>
      <ul class="pl-3 pt-2 text-lg font-medium">
        <li class="border-b border-black">{data.strIngredient1}</li>
        <li class="border-b border-black">{data.strIngredient2}</li>
        <li class="border-b border-black">{data.strIngredient3}</li>
        <li class="border-b border-black">{data.strIngredient4}</li>
        <li class="border-b border-black">{data.strIngredient5}</li>
        <li class="border-b border-black">{data.strIngredient6}</li>
        <li class="border-b border-black">{data.strIngredient7}</li>
        <li class="border-b border-black">{data.strIngredient8}</li>
        <li class="border-b border-black">{data.strIngredient9}</li>
        <li class="border-b border-black">{data.strIngredient10}</li>
        <li class="border-b border-black">{data.strIngredient11}</li>
        <li class="border-b border-black">{data.strIngredient12}</li>
        <li class="border-b border-black">{data.strIngredient13}</li>
        <li class="border-b border-black">{data.strIngredient14}</li>
        <li class="border-b border-black">{data.strIngredient15}</li>
        <li class="border-b border-black">{data.strIngredient16}</li>
        <li class="border-b border-black">{data.strIngredient17}</li>
        <li class="border-b border-black">{data.strIngredient18}</li>
        <li class="border-b border-black">{data.strIngredient19}</li>
        <li class="border-b border-black">{data.strIngredient20}</li>
      </ul>
    </div>

    <div>
      <h1 class="font-extrabold text-lg underline text-red-700">Measures</h1>
      <ul class="pl-3 pt-2 text-lg font-medium">
        <li>{data.strMeasure1}</li>
        <li>{data.strMeasure2}</li>
        <li>{data.strMeasure3}</li>
        <li>{data.strMeasure4}</li>
        <li>{data.strMeasure5}</li>
        <li>{data.strMeasure6}</li>
        <li>{data.strMeasure7}</li>
        <li>{data.strMeasure8}</li>
        <li>{data.strMeasure9}</li>
        <li>{data.strMeasure10}</li>
        <li>{data.strMeasure11}</li>
        <li>{data.strMeasure12}</li>
        <li>{data.strMeasure13}</li>
        <li>{data.strMeasure14}</li>
        <li>{data.strMeasure15}</li>
        <li>{data.strMeasure16}</li>
        <li>{data.strMeasure17}</li>
        <li>{data.strMeasure18}</li>
        <li>{data.strMeasure19}</li>
        <li>{data.strMeasure20}</li>
      </ul>
    </div>
  </div>

  <div class="m-8">
    <h1
      class="text-center font-extrabold underline text-red-700 bg-green-300 rounded p-2"
    >
      How to make {data.strMeal}
    </h1>
    <div class="pt-4 text-lg text-justify">{data.strInstructions}</div>
  </div>

  <div class="text-center m-5  font-extrabold text-3xl">
    Thank You 🙏
  </div>
</div>
