<script>
  import { onMount } from 'svelte';
  
  let photos =  [];
  onMount(async () => {
    console.log("OnMount");
    const response = await fetch('https://rickandmortyapi.com/api/character/?count=20')
    let resp = await response.json();
    console.log(resp);
    photos = resp.results;
    console.log(photos.results);
  });

</script>

<style>
  .Photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
  img {
    width: 80%;
  }
</style>

<div class="Photos">
  {#each photos as photo}
    <figure>
      <img src={photo.image} alt={photo.name}>
      <figcaption>{photo.name}</figcaption>
    </figure>
  {:else}
  <p>Loading...</p>
  {/each}
</div>