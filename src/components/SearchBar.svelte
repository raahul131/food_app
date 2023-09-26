<script>
  let inputValue = "";
  let active = false;
  import { goto } from "$app/navigation";

  function submitSearch() {
    goto("/search/" + inputValue);
  }
</script>

<main>
  <form on:submit={submitSearch} class="flex-col items-center">
    <input
      bind:value={inputValue}
      on:focus={() => (active = true)}
      name="search_recipe"
      type="text"
      placeholder="Search recipe"
      class=" w-[220px] mx-8 p-3 border-gray-500 border rounded-2xl"
    />
    <button
      class="bg-emerald-600 p-2 mr- rounded-xl text-lg font-semibold text-white items-center text-center justify-center cursor-pointer"
      >Search</button
    >
  </form>

  <!-- <form class="">
    <label for="search_recipe">search recipe</label>
    <input
      bind:value={inputValue}
      on:focus={() => (active = true)}
      name="search_recipe"
      type="text"
      placeholder="Search recipe"
    />
    <button>Search</button>
  </form> -->
</main>
